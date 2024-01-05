---
id: group-api
sidebar_label: 群组相关api实现
title: 群组相关api实现
---

本节来实现群组相关的所有 api。

### 添加一个`GroupRoleType`枚举

```ts title="packages/shared/src/enum/group.enum.ts"
export enum GroupRoleType {
  Owner,
  Member
}
```

导出。

```ts title="packages/shared/src/enum/index.ts"
// ...
export * from './group.enum'
```

### 群实体添加

先添加一个`GroupConversationEntity`作为用户和群之前的中间表。

```ts title="apps/server/src/modules/db/entities/group-conversation.entity.ts"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { GroupRoleType } from '@ying-chat/shared'
import { BaseEntity } from './base.entity'
import { UserEntity } from './user.entity'
import { GroupEntity } from './group.entity'

@Entity({ name: 'group_conversation' })
export class GroupConversationEntity extends BaseEntity {
  @Column({
    type: 'enum',
    enum: GroupRoleType,
    comment: '0 Owner; 1 Member;'
  })
  userRole: GroupRoleType

  @Column({
    nullable: true
  })
  lastMsgId: number

  unreadNum?: number

  @PrimaryColumn()
  userId: number

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity

  @PrimaryColumn()
  groupId: number

  @ManyToOne(() => GroupEntity)
  @JoinColumn()
  group: GroupEntity
}
```

再添加一下`GroupEntity`，关联上面的中间表。

```ts title="apps/server/src/modules/db/entities/group.entity.ts"
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne
} from 'typeorm'
import { UserEntity } from './user.entity'
import { FileEntity } from './file.entity'
import { BaseEntity } from './base.entity'

@Entity({ name: 'group' })
export class GroupEntity extends BaseEntity {
  @Column({
    length: 32
  })
  name: string

  @Column({
    length: 100,
    nullable: true
  })
  description: string

  @Column({
    length: 32,
    unique: true
  })
  inviteCode: string

  @Column()
  coverId: number

  @OneToOne(() => FileEntity)
  @JoinColumn()
  cover: FileEntity

  @Column()
  createById: number

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  createBy: UserEntity

  @ManyToMany(() => UserEntity)
  @JoinTable({
    name: 'group_conversation',
    synchronize: false
  })
  users: UserEntity[]
}
```

修改一下`UserEntity`，关联上面的中间表。

```ts title="apps/server/src/modules/db/entities/user.entity.ts"
// ...
import {
  // ...
  ManyToMany
} from 'typeorm'
import { GroupEntity } from './group.entity'

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  // ...

  @ManyToMany(() => GroupEntity)
  groups: GroupEntity[]

  // ...
}
```

这时候服务端会报错，后面添加好`GroupModule`加载好群实体后就不会报错了。

### DTO 准备

```ts title="packages/shared/src/dto/create-group.dto.ts"
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MaxLength,
  MinLength
} from 'class-validator'

export class CreateGroupDto {
  @MinLength(2)
  @MaxLength(32)
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  coverId: number

  @MinLength(2)
  @MaxLength(100)
  @IsOptional()
  description?: string
}
```

导出。

```ts title="packages/shared/src/dto/index.ts"
// ...
export * from './create-group.dto'
```

### 实现所需要的所有群接口

新建一个`group`文件夹，然后创建`GroupService`，在里面一次性实现创建群组，上传群封面，加入群组，获取用户群组列表，获取群详情的所有函数。

```ts title="apps/server/src/modules/group/group.service.ts"
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { nanoid } from 'nanoid'
import { GroupEntity, GroupConversationEntity } from '@/modules/db/entities'
import { FileService } from '@/modules/file/file.service'
import { CreateGroupDto, FileType, GroupRoleType } from '@ying-chat/shared'

@Injectable()
export class GroupService {
  @InjectRepository(GroupEntity)
  private readonly groupRepository: Repository<GroupEntity>

  @InjectRepository(GroupConversationEntity)
  private readonly groupConversationRepository: Repository<GroupConversationEntity>

  @Inject()
  private readonly fileService: FileService

  async create(createGroupDto: CreateGroupDto, userId: number) {
    const newGroup = new GroupEntity()
    newGroup.name = createGroupDto.name
    newGroup.description = createGroupDto.description
    newGroup.coverId = createGroupDto.coverId
    newGroup.createById = userId
    newGroup.inviteCode = nanoid()

    const group = await this.groupRepository.save(newGroup)

    const newGroupConversation = new GroupConversationEntity()
    newGroupConversation.userId = userId
    newGroupConversation.groupId = group.id
    newGroupConversation.userRole = GroupRoleType.Owner

    await this.groupConversationRepository.save(newGroupConversation)

    return group
  }

  async uploadGroupCover(file: Express.Multer.File, userId: number) {
    const minioFile = await this.fileService.uploadFile({
      file,
      fileType: FileType.Cover,
      userId
    })

    return minioFile
  }

  async joinGroup(userId: number, inviteCode: string) {
    const group = await this.groupRepository.findOne({
      where: {
        inviteCode
      }
    })
    if (!group) {
      throw new HttpException('invite code invalid', HttpStatus.NOT_ACCEPTABLE)
    }
    const conversationExists = await this.groupConversationRepository.findOne({
      where: {
        userId,
        groupId: group.id
      }
    })
    if (conversationExists) {
      throw new HttpException(
        'you have already in the group',
        HttpStatus.NOT_ACCEPTABLE
      )
    }

    const newGroupConversation = new GroupConversationEntity()
    newGroupConversation.userId = userId
    newGroupConversation.groupId = group.id
    newGroupConversation.userRole = GroupRoleType.Member
    await this.groupConversationRepository.save(newGroupConversation)
  }

  async getUserGroupList(userId: number) {
    const groups = await this.groupConversationRepository.find({
      where: { userId },
      relations: ['group', 'group.cover']
    })

    return {
      owner: groups
        .filter(g => g.userRole === GroupRoleType.Owner)
        .map(g => ({
          ...g.group,
          inviteCode: undefined
        })),
      member: groups
        .filter(g => g.userRole === GroupRoleType.Member)
        .map(g => ({
          ...g.group,
          inviteCode: undefined
        }))
    }
  }

  async getGroupDetail(id: number, userId: number) {
    const group = await this.groupRepository.findOne({
      where: { id },
      select: ['users'],
      relations: ['cover', 'users', 'users.avatar']
    })

    if (userId !== group.createById) {
      delete group.inviteCode
    }

    return group
  }
}
```

把接口都加上。

```ts title="apps/server/src/modules/group/group.controller.ts"
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator
} from '@nestjs/common'
import { Request } from 'express'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { FileInterceptor } from '@nestjs/platform-express'
import { CreateGroupDto } from '@ying-chat/shared'
import { GroupService } from './group.service'

@ApiTags('group')
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @ApiOperation({
    summary: 'Create group'
  })
  @Post()
  create(@Body() createGroupDto: CreateGroupDto, @Req() req: Request) {
    return this.groupService.create(createGroupDto, req.userId)
  }

  @ApiOperation({
    summary: 'Upload group cover'
  })
  @Post('cover')
  @UseInterceptors(FileInterceptor('file'))
  uploadUserAvatar(
    @Req() req: Request,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 5 * 1024 * 1024,
            message: 'size must less than 5MB'
          }),
          new FileTypeValidator({ fileType: /image\/(png|jpeg|jpg)/ })
        ]
      })
    )
    file: Express.Multer.File
  ) {
    return this.groupService.uploadGroupCover(file, req.userId)
  }

  @ApiOperation({
    summary: 'Join group'
  })
  @Get('join/:code')
  joinGroup(@Req() req: Request, @Param('code') code: string) {
    return this.groupService.joinGroup(req.userId, code)
  }

  @ApiOperation({
    summary: 'Get user group list'
  })
  @Get('list')
  getUserGroupList(@Req() req: Request) {
    return this.groupService.getUserGroupList(req.userId)
  }

  @ApiOperation({
    summary: 'Get group info'
  })
  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    return this.groupService.getGroupDetail(+id, req.userId)
  }
}
```

添加`GroupModule`模块。

```ts title="apps/server/src/modules/group/group.module.ts"
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GroupEntity, GroupConversationEntity } from '@/modules/db/entities'
import { GroupController } from './group.controller'
import { GroupService } from './group.service'

@Module({
  imports: [TypeOrmModule.forFeature([GroupEntity, GroupConversationEntity])],
  controllers: [GroupController],
  providers: [GroupService]
})
export class GroupModule {}
```

把`GroupModule`加载到`AppModule`里。

```ts title="apps/server/src/app.module.ts"
// ...
import { GroupModule } from '@/modules/group/group.module'

@Module({
  imports: [
    // ...
    GroupModule
  ]
  // ...
})
export class AppModule {}
```

这时候就不会报错了，那么本节最后就不去调试接口了，在后面一节客户端直接对接一下，本节到此结束。
