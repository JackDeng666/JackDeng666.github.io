---
id: realtime-message-and-socket.io
sidebar_label: 使用socket.io实现即时通讯
title: 使用socket.io实现即时通讯
---

本节来实现服务端的即时通讯 api。

### 准备

服务端安装依赖

```shell title="apps/server"
pnpm i @nestjs/websockets @nestjs/platform-socket.io socket.io
```

先在 `redis` 里添加一个`GroupUsers`的 key，到时群里用户的 id 将存到这里，这样每次发送消息时就不用查询数据库了。

```ts title="apps/server/src/modules/redis/constant.ts"
// ...
export const RedisKey = {
  // ...
  GroupUsers: 'group_users:'
}
```

### ConversationGateway 添加

添加一个`ConversationGateway`文件。

```ts title="apps/server/src/modules/conversation/conversation.gateway.ts"
import { Inject } from '@nestjs/common'
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets'
import { RedisClientType } from 'redis'
import { Server, Socket } from 'socket.io'
import { Repository } from 'typeorm'
import { RedisKey, RedisToken } from '@/modules/redis/constant'
import { AuthService } from '@/modules/user/auth.service'
import { InjectRepository } from '@nestjs/typeorm'
import {
  GroupEntity,
  GroupConversationEntity,
  GroupMessageEntity
} from '@/modules/db/entities'

declare module 'socket.io' {
  interface Socket {
    userId: number
  }
}

@WebSocketGateway()
export class ConversationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @Inject()
  private readonly authService: AuthService
  @Inject(RedisToken)
  private readonly redisClient: RedisClientType

  @InjectRepository(GroupEntity)
  private readonly groupRepository: Repository<GroupEntity>
  @InjectRepository(GroupConversationEntity)
  private readonly groupConversationRepository: Repository<GroupConversationEntity>

  @WebSocketServer() server: Server

  private userClientMap: Map<number, string> = new Map()

  afterInit() {
    this.initGroupMap()
  }

  async initGroupMap() {
    const groups = await this.groupRepository.find({
      relations: ['users']
    })
    groups.forEach(group => {
      group.users.forEach(user => {
        this.redisClient.sAdd(`${RedisKey.GroupUsers}${group.id}`, user.id + '')
      })
    })
  }

  async handleConnection(client: Socket) {
    const token = client.handshake.headers.authorization

    try {
      const verifyData = this.authService.verify(token)
      const id = Number(await this.redisClient.get(token))

      if (id === verifyData.id) {
        client.userId = id
        this.userClientMap.set(client.userId, client.id)
        return
      }
      this.authFail(client)
    } catch {
      this.authFail(client)
    }
  }

  handleDisconnect(client: Socket) {
    this.userClientMap.delete(client.userId)
  }

  authFail(client: Socket) {
    client.emit('authFail')
    client.disconnect(true)
  }

  @SubscribeMessage('update-last-msg')
  async updateLastMsg(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { id: number; messageId: number }
  ) {
    await this.groupConversationRepository.update(
      { id: data.id, userId: client.userId },
      { lastMsgId: data.messageId }
    )

    const groupConversation = await this.groupConversationRepository.findOne({
      where: { id: data.id, userId: client.userId }
    })

    return {
      event: 'update-last-msg',
      data: groupConversation
    }
  }

  async sendMsgToGroup(groupMsg: GroupMessageEntity) {
    const userIds = await this.redisClient.sMembers(
      `${RedisKey.GroupUsers}${groupMsg.groupId}`
    )

    userIds.forEach(userId => {
      const clientId = this.userClientMap.get(+userId)
      if (clientId) {
        this.server
          .to(clientId)
          .emit(`group-message:${groupMsg.groupId}`, groupMsg)
      }
    })
  }
}
```

websocket 连接是由 http 请求 upgrade 成功后创建，对应于 gateway 的 handleConnection 方法，而 nest 的 guard 本身也适用于 gateway，但不幸的是只作用于@SubscribeMessage 装饰的方法，连接的生命周期事件不受影响，所以需要在 handleConnection 中单独做鉴权，其他 @SubscribeMessage 方法可以通过 guard 统一处理。

在`ConversationModule`里引入一下，因为`ConversationGateway`使用到了`AuthService`，所以还要把`UserModule`引入一下。

```ts title="apps/server/src/modules/conversation/conversation.module.ts"
// ...
import { ConversationGateway } from './conversation.gateway'
import { UserModule } from '@/modules/user/user.module'

@Module({
  imports: [
    //...
    UserModule
  ],
  // ...
  providers: [
    // ...
    ConversationGateway
  ]
})
export class ConversationModule {}
```

### ConversationService 修改

修改一下`ConversationService`，让所有发送消息的接口发送完后通知 socket 去发送到当前连接的用户。

```ts title="apps/server/src/modules/conversation/conversation.service.ts"
// ...
import { ConversationGateway } from './conversation.gateway'

@Injectable()
export class ConversationService {
  // ...

  @Inject()
  private readonly conversationGateway: ConversationGateway

  // ...

  async sendTextGroupMessage() {
    // ...
    const res = await this.groupMessageRepository.save(message)

    this.sendMsgToGroup(res.id) // +

    return res
  }

  async sendImageGroupMessage() {
    // ...

    const res = await this.groupMessageRepository.save(message)

    this.sendMsgToGroup(res.id) // +

    return res
  }

  async sendVideoGroupMessage() {
    // ...

    const res = await this.groupMessageRepository.save(message)

    this.sendMsgToGroup(res.id) // +

    return res
  }

  // ...

  async sendMsgToGroup(id: number) {
    const newMessage = await this.groupMessageRepository.findOne({
      where: { id },
      relations: ['user', 'user.avatar', 'file', 'cover']
    })

    this.conversationGateway.sendMsgToGroup(newMessage)
  }
}
```

### GroupService 修改

最后再修改一下`GroupService`，让建群和加群时`redis`上的群用户 id 能更新。

```ts title="apps/server/src/modules/group/group.service.ts"
// ...
import { RedisClientType } from 'redis'
import { RedisKey, RedisToken } from '@/modules/redis/constant'

@Injectable()
export class GroupService {
  // ...

  @Inject(RedisToken)
  private readonly redisClient: RedisClientType

  async create(createGroupDto: CreateGroupDto, userId: number) {
    // ...
    await this.redisClient.sAdd(
      `${RedisKey.GroupUsers}${group.id}`,
      userId + ''
    )

    return group
  }
  // ...

  async joinGroup(userId: number, inviteCode: string) {
    // ...
    await this.redisClient.sAdd(
      `${RedisKey.GroupUsers}${group.id}`,
      userId + ''
    )
  }
  // ...
}
```

那么本节到此结束，下节将在客户端对接即时通信。
