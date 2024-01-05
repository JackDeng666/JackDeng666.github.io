---
id: message-api
sidebar_label: 群聊 api
title: 群聊 api
---

本节来实现群消息相关的所有 api。

## 准备

### 枚举

在`group.enum.ts`添加一个`GroupMessageType`枚举。

```ts title="packages/shared/src/enum/group.enum.ts"
// ...
export enum GroupMessageType {
  Text,
  Image,
  Video
}
```

### 实体

添加一个`GroupMessageEntity`。

```ts title="apps/server/src/modules/db/entities/group-message.entity.ts"
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm'
import { GroupMessageType } from '@ying-chat/shared'
import { BaseEntity } from './base.entity'
import { UserEntity } from './user.entity'
import { FileEntity } from './file.entity'

@Entity({ name: 'group_message' })
export class GroupMessageEntity extends BaseEntity {
  @Column({
    type: 'enum',
    enum: GroupMessageType,
    comment: '0 Text; 1 Image; 2 Video'
  })
  type: GroupMessageType

  @Column({
    type: 'text',
    nullable: true
  })
  content?: string

  @Column()
  userId: number

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity

  @Column()
  groupId: number

  @Column({
    nullable: true
  })
  coverId?: number

  @OneToOne(() => FileEntity)
  @JoinColumn()
  cover?: FileEntity

  @Column({
    nullable: true
  })
  fileId?: number

  @OneToOne(() => FileEntity)
  @JoinColumn()
  file?: FileEntity
}
```

导出。

```ts title="apps/server/src/modules/db/entities/index.ts"
// ...
export * from './group-message.entity'
```

修改一下`GroupConversationEntity`，加了一个`recentMsg`作为当前群聊里的最新消息，会在获取列表时读取返回。

```ts title=""
// ...
import { GroupMessageEntity } from './group-message.entity'

@Entity({ name: 'group_conversation' })
export class GroupConversationEntity extends BaseEntity {
  // ...

  recentMsg?: GroupMessageEntity

  // ...
}
```

### DTO

发送消息到群里的 DTO。

```ts title="packages/shared/src/dto/send-msg.dto.ts"
import { IsNotEmpty, MaxLength } from 'class-validator'

export class SendMsgDto {
  @IsNotEmpty()
  groupId: number

  @MaxLength(5000)
  @IsNotEmpty()
  content: string
}
```

获取群消息列表的 DTO。

```ts title="packages/shared/src/dto/group-message-list.dto.ts"
import { IsNotEmpty, IsOptional } from 'class-validator'

export class GroupMessageListDto {
  @IsNotEmpty()
  groupId: number

  @IsOptional()
  curId?: number

  @IsOptional()
  size?: number
}
```

导出。

```ts title="packages/shared/src/dto/index.ts"
// ...
export * from './send-msg.dto'
export * from './group-message-list.dto'
```

## 实现

### service

在`modules`下新建一个`conversation`文件夹，先来实现一个`ConversationService`。

```ts title="apps/server/src/modules/conversation/conversation.service.ts"
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { LessThan, MoreThan, Repository } from 'typeorm'
import {
  FileType,
  GroupMessageListDto,
  GroupMessageType,
  SendMsgDto
} from '@ying-chat/shared'
import { FileService } from '@/modules/file/file.service'
import {
  GroupConversationEntity,
  GroupMessageEntity
} from '@/modules/db/entities'

@Injectable()
export class ConversationService {
  @InjectRepository(GroupConversationEntity)
  private readonly groupConversationRepository: Repository<GroupConversationEntity>

  @InjectRepository(GroupMessageEntity)
  private readonly groupMessageRepository: Repository<GroupMessageEntity>

  @Inject()
  private readonly fileService: FileService

  async getGroupConversationList(userId: number) {
    const res = await this.groupConversationRepository.find({
      where: {
        userId
      },
      relations: ['group', 'group.cover'],
      order: {
        updateAt: 'DESC'
      }
    })
    return res
  }

  async getGroupConversationMessageList(
    userId: number,
    groupMessageListDto: GroupMessageListDto
  ) {
    await this.checkUserInGroup(userId, groupMessageListDto.groupId)

    return this.groupMessageRepository.find({
      where: {
        groupId: groupMessageListDto.groupId,
        id: groupMessageListDto.cursorId
          ? LessThan(groupMessageListDto.cursorId)
          : undefined
      },
      order: {
        id: 'DESC'
      },
      take: groupMessageListDto.size || 10,
      relations: ['user', 'user.avatar', 'file', 'cover']
    })
  }

  async sendTextGroupMessage(userId: number, sendMsgDto: SendMsgDto) {
    await this.checkUserInGroup(userId, sendMsgDto.groupId)

    const message = new GroupMessageEntity()
    message.userId = userId
    message.groupId = sendMsgDto.groupId
    message.content = sendMsgDto.content
    message.type = GroupMessageType.Text

    const res = await this.groupMessageRepository.save(message)

    return res
  }

  async sendImageGroupMessage(
    userId: number,
    groupId: number,
    file: Express.Multer.File
  ) {
    await this.checkUserInGroup(userId, groupId)

    const minioFile = await this.fileService.uploadFile({
      file,
      fileType: FileType.Image,
      userId
    })

    const message = new GroupMessageEntity()
    message.userId = userId
    message.groupId = groupId
    message.type = GroupMessageType.Image
    message.fileId = minioFile.id

    const res = await this.groupMessageRepository.save(message)

    return res
  }

  async sendVideoGroupMessage(
    userId: number,
    groupId: number,
    videoFile: Express.Multer.File,
    coverFile: Express.Multer.File
  ) {
    await this.checkUserInGroup(userId, groupId)

    const [minioVideoFile, minioCoverFile] = await Promise.all([
      this.fileService.uploadFile({
        file: videoFile,
        fileType: FileType.Video,
        userId
      }),
      this.fileService.uploadFile({
        file: coverFile,
        fileType: FileType.Cover,
        userId
      })
    ])

    const message = new GroupMessageEntity()
    message.userId = userId
    message.groupId = groupId
    message.type = GroupMessageType.Video
    message.fileId = minioVideoFile.id
    message.coverId = minioCoverFile.id

    const res = await this.groupMessageRepository.save(message)

    return res
  }

  async checkUserInGroup(userId: number, groupId: number) {
    const exist = await this.groupConversationRepository.findOne({
      where: {
        userId,
        groupId
      }
    })
    if (!exist) {
      throw new HttpException(
        'you are not in the group!',
        HttpStatus.NOT_ACCEPTABLE
      )
    }
  }

  findRecentGroupMessage(groupId: number) {
    return this.groupMessageRepository.findOne({
      where: {
        groupId
      },
      order: {
        id: 'DESC'
      },
      relations: ['user']
    })
  }

  findUnreadGroupMessageNum(groupId: number, lastMsgId: number) {
    return this.groupMessageRepository.count({
      where: {
        groupId,
        id: MoreThan(lastMsgId)
      }
    })
  }
}
```

### controller

编写`ConversationController`，直接实现获取用户对话列表，用户消息列表和发送文字、图片、视频消息的接口。

```ts title="apps/server/src/modules/conversation/conversation.controller.ts"
import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  HttpException,
  HttpStatus,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Query,
  Req,
  UploadedFile,
  UploadedFiles,
  UseInterceptors
} from '@nestjs/common'
import { Request } from 'express'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express'
import { GroupMessageListDto, SendMsgDto } from '@ying-chat/shared'
import { ConversationService } from './conversation.service'

@ApiTags('conversation')
@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @ApiOperation({
    summary: 'Get conversation list'
  })
  @Get('list')
  getGroupConversationList(@Req() req: Request) {
    return this.conversationService.getGroupConversationList(req.userId)
  }

  @ApiOperation({
    summary: 'Get group message list'
  })
  @Get('group/message/list')
  getGroupConversationMessageList(
    @Req() req: Request,
    @Query() groupMessageListDto: GroupMessageListDto
  ) {
    return this.conversationService.getGroupConversationMessageList(
      req.userId,
      groupMessageListDto
    )
  }

  @ApiOperation({
    summary: 'Send text message to group'
  })
  @Post('group/message/text')
  sendTextGroupMessage(@Req() req: Request, @Body() sendMsgDto: SendMsgDto) {
    return this.conversationService.sendTextGroupMessage(req.userId, sendMsgDto)
  }

  @ApiOperation({
    summary: 'Send image message to group'
  })
  @Post('group/message/image')
  @UseInterceptors(FileInterceptor('file'))
  sendImageGroupMessage(
    @Req() req: Request,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 10 * 1024 * 1024,
            message: 'size must less than 10MB'
          }),
          new FileTypeValidator({ fileType: /image\/(png|jpeg|jpg)/ })
        ]
      })
    )
    file: Express.Multer.File,
    @Body('groupId') groupId: string
  ) {
    return this.conversationService.sendImageGroupMessage(
      req.userId,
      +groupId,
      file
    )
  }

  @ApiOperation({
    summary: 'Send video message to group'
  })
  @Post('group/message/video')
  @UseInterceptors(AnyFilesInterceptor())
  sendVideoGroupMessage(
    @Req() req: Request,
    @UploadedFiles()
    files: Express.Multer.File[],
    @Body('groupId') groupId: number
  ) {
    const videoFile = files[0]
    const coverFile = files[1]

    if (videoFile.size > 1024 * 1024 * 1024) {
      throw new HttpException(
        'video size must be less than 1GB',
        HttpStatus.NOT_ACCEPTABLE
      )
    }

    if (coverFile.size > 5 * 1024 * 1024) {
      throw new HttpException(
        'cover size must be less than 5MB',
        HttpStatus.NOT_ACCEPTABLE
      )
    }

    return this.conversationService.sendVideoGroupMessage(
      req.userId,
      +groupId,
      videoFile,
      coverFile
    )
  }
}
```

### subscriber

编写`GroupConversationSubscriber`，让用户加载会话时，获取最新的信息和它的消息未读数。

```ts title="apps/server/src/modules/conversation/conversation.subscriber.ts"
import { DataSource, EntitySubscriberInterface, EventSubscriber } from 'typeorm'
import { GroupConversationEntity } from '@/modules/db/entities'
import { ConversationService } from './conversation.service'

@EventSubscriber()
export class GroupConversationSubscriber
  implements EntitySubscriberInterface<GroupConversationEntity>
{
  constructor(
    dataSource: DataSource,
    private conversationService: ConversationService
  ) {
    dataSource.subscribers.push(this)
  }

  listenTo() {
    return GroupConversationEntity
  }

  async afterLoad(entity: GroupConversationEntity) {
    entity.recentMsg = await this.conversationService.findRecentGroupMessage(
      entity.groupId
    )

    if (entity.lastMsgId) {
      entity.unreadNum =
        await this.conversationService.findUnreadGroupMessageNum(
          entity.groupId,
          entity.lastMsgId
        )
    }
  }
}
```

### 加载

创建`ConversationModule`加载`ConversationController`和`ConversationService`。

```ts title="apps/server/src/modules/conversation/conversation.module.ts"
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import {
  GroupEntity,
  GroupConversationEntity,
  GroupMessageEntity
} from '@/modules/db/entities'
import { ConversationService } from './conversation.service'
import { ConversationController } from './conversation.controller'
import { GroupConversationSubscriber } from './conversation.subscriber'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      GroupEntity,
      GroupConversationEntity,
      GroupMessageEntity
    ])
  ],
  controllers: [ConversationController],
  providers: [ConversationService, GroupConversationSubscriber]
})
export class ConversationModule {}
```

最后在`AppModule`里导入。

```ts title="apps/server/src/app.module.ts"
// ...
import { ConversationModule } from '@/modules/conversation/conversation.module'

@Module({
  imports: [
    // ...
    ConversationModule
  ]
  // ...
})
export class AppModule {}
```

那么本节最后就不去调试接口了，在后面一节客户端直接对接一下，本节到此结束。
