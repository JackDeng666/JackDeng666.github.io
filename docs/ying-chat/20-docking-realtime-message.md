---
id: docking-realtime-message
sidebar_label: 客户端对接即时通讯
title: 客户端对接即时通讯
---

本节将来客户端使用`socket.io-client`对接即时通信。

## 准备 SocketProvider

先安装依赖依赖。

```shell title="apps/client"
pnpm i socket.io-client
```

在`src`下新建一个`socket`文件夹，添加一个`socket-provider.tsx`。

```tsx title="apps/client/src/socket/socket-provider.tsx"
import React, { createContext, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { useAuthStore, resetAuth } from '@/stores'

type TSocketContext = {
  socket: Socket | undefined
  connected: boolean
}

export const SocketContext = createContext<TSocketContext>({
  socket: undefined,
  connected: false
})

const useSocketIo = () => {
  const [socket, setSocket] = useState<Socket | undefined>()
  const [connected, setConnected] = useState(false)

  const token = useAuthStore(state => state.token)

  useEffect(() => {
    const socket = io({
      extraHeaders: {
        authorization: token
      }
    })

    socket.on('connect', () => {
      setConnected(true)
    })
    socket.on('disconnect', () => {
      setConnected(false)
    })

    socket.on('authFail', () => {
      resetAuth()
    })

    setSocket(socket)

    return () => {
      socket.disconnect()
    }
  }, [token])

  return {
    socket,
    connected
  }
}

type SocketProviderProps = {
  children: React.ReactNode
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const { socket, connected } = useSocketIo()

  return (
    <SocketContext.Provider value={{ socket, connected }}>
      {children}
    </SocketContext.Provider>
  )
}
```

再添加一个`useSocket`hook。

```ts title="apps/client/src/socket/use-socket.ts"
import { useContext } from 'react'
import { SocketContext } from './socket-provider'

export const useSocket = () => {
  return useContext(SocketContext)
}
```

导出。

```ts title="apps/client/src/socket/index.ts"
export * from './socket-provider'
export * from './use-socket'
```

在`AppLayout`里面引入`SocketProvider`。

```tsx title="apps/client/src/components/layout/index.tsx"
// ...
import { SocketProvider } from '@/socket'

export const AppLayout = () => {
  return useAuthRoute(<SocketProvider>{/*  */}</SocketProvider>)
}
```

还得在`vite.config.ts`里配置一下代理。

```ts title="apps/client/vite.config.ts"
// ...
export default defineConfig({
  // ...
  server: {
    proxy: {
      // ...
      '/socket.io': {
        target: 'http://localhost:3000',
        ws: true
      }
    }
  }
})
```

## 对话页面消息列表修改

```tsx title="apps/client/src/pages/conversation/messages/messages.tsx"
import {
  // ...
  RefObject
} from 'react'
// ...
import {
  // ...
  Chip
} from '@nextui-org/react'
// ...
import { useSocket } from '@/socket'
import { ArrowDown } from 'lucide-react'

// ...
const GROUP_MESSAGE_KEY = 'group-message'

// ...

const useRealtimeMessage = (
  scrollBoxRef: RefObject<ScollBoxHandle>,
  addNewMessage: (newMessage: GroupMessageVo) => void
) => {
  const [unreadNum, setUnreadNum] = useState(0)
  const { socket } = useSocket()
  const { groupId } = useParams()

  useEffect(() => {
    if (!groupId || !socket) return

    const handleNewMessage = (message: GroupMessageVo) => {
      const distanceFromBottom = scrollBoxRef.current?.getDistanceFromBottom()
      if (
        scrollBoxRef.current &&
        document.visibilityState === 'visible' &&
        Number(distanceFromBottom) <= 300
      ) {
        scrollBoxRef.current?.keepBottom(() => {
          addNewMessage(message)
        })
      } else {
        addNewMessage(message)
        setUnreadNum(preNum => preNum + 1)
      }
    }

    socket.on(`${GROUP_MESSAGE_KEY}:${groupId}`, handleNewMessage)

    return () => {
      socket.off(`${GROUP_MESSAGE_KEY}:${groupId}`, handleNewMessage)
    }
  }, [socket, scrollBoxRef, groupId, addNewMessage])

  return {
    unreadNum,
    setUnreadNum
  }
}

export const ChatMessages = () => {
  // ...
  const { messages, firstLoaded, loaded, loadPrevMessages, addNewMessage } =
    useMessages()

  const { unreadNum, setUnreadNum } = useRealtimeMessage(
    scrollBoxRef,
    addNewMessage
  )

  // ...

  return (
    <div className="flex-1 h-[1px] relative">
      {unreadNum ? (
        <Chip
          className="absolute top-10 right-5 z-30 cursor-pointer"
          startContent={<ArrowDown />}
          variant="solid"
          color="success"
          onClick={() => {
            scrollBoxRef.current?.scrollToBottom('smooth')
            setUnreadNum(0)
          }}
        >
          {`you have ${unreadNum} new messages`}
        </Chip>
      ) : null}

      {/*  */}
    </div>
  )
}
```

## 对话侧边栏修改

```ts title="apps/client/src/pages/conversation/use-conversation.ts"
import {
  // ...
  useEffect
} from 'react'
// ...
import { ConversationVo, GroupMessageVo } from '@ying-chat/shared'
import { useSocket } from '@/socket'
import { debounce } from '@/utils'

export const useConversationLogic = () => {
  // ...

  const { data, setData } = useApi<ConversationVo[]>({
    func: useCallback(() => conversationApi.getConversationList(), [])
  })

  // ...

  const { socket } = useSocket()

  const updateLastMsgCache = useCallback(
    (messageId: number) => {
      if (!currentConversation || currentConversation.lastMsgId >= messageId)
        return

      socket?.emit('update-last-msg', {
        id: currentConversation.id,
        messageId
      })
    },
    [socket, currentConversation]
  )

  const updateLastMsg = debounce(updateLastMsgCache, 200)

  const handleNewMessage = useCallback(
    (message: GroupMessageVo) => {
      setData(prevData =>
        prevData?.map(el => {
          if (el.groupId === message.groupId) {
            return {
              ...el,
              recentMsg: message,
              unreadNum: el.unreadNum + 1
            }
          }
          return el
        })
      )
    },
    [setData]
  )

  useEffect(() => {
    data?.forEach(el => {
      socket?.on(`group-message:${el.groupId}`, handleNewMessage)
    })

    return () => {
      data?.forEach(el => {
        socket?.off(`group-message:${el.groupId}`, handleNewMessage)
      })
    }
  }, [socket, data, handleNewMessage])

  useEffect(() => {
    const handleUpdateConversation = (conversation: ConversationVo) => {
      setData(prevData =>
        prevData?.map(el => {
          if (el.id === conversation.id) {
            return {
              ...el,
              lastMsgId: conversation.lastMsgId,
              unreadNum: conversation.unreadNum
            }
          }
          return el
        })
      )
    }
    socket?.on('update-last-msg', handleUpdateConversation)

    return () => {
      socket?.off('update-last-msg', handleUpdateConversation)
    }
  }, [socket, setData])

  return {
    // ...
    updateLastMsg
  }
}

type TConversationContext = {
  // ...
  updateLastMsg: (msgId: number) => void
}

export const ConversationContext = createContext<TConversationContext>({
  // ...
  updateLastMsg: () => {}
})

// ...
```

更新一下`ConversationProvider`，添加`updateLastMsg`函数。

```tsx title="apps/client/src/pages/conversation/conversation-provider.tsx"
// ...

export const ConversationProvider: React.FC<ConversationProviderProps> = ({
  children
}) => {
  const {
    // ...
    updateLastMsg
  } = useConversationLogic()

  return (
    <ConversationContext.Provider
      value={{
        // ...,
        updateLastMsg
      }}
    >
      {children}
    </ConversationContext.Provider>
  )
}
```

## 消息组件

通过`IntersectionObserver`监听消息组件是否被用户看到，看到则用`updateLastMsg`函数更新最后一条信息 id。

```tsx title="apps/client/src/pages/conversation/messages/message-item.tsx"
import {
  // ...
  useEffect
} from 'react'
// ...
import { useObserver } from '@/components/scroll-box'
import { useConversation } from '../use-conversation'

// ...

export const ChatMessageItem = ({ message }: ChatMessageItemProps) => {
  const messageItemRef = useRef(null)

  const { observer } = useObserver()
  const { updateLastMsg } = useConversation()

  useEffect(() => {
    if (!observer || !messageItemRef.current) return

    const unObserver = observer(messageItemRef.current, () => {
      updateLastMsg(message.id)
      unObserver()
    })

    return unObserver
  }, [observer, messageItemRef, updateLastMsg, message])

  return <MessageItem ref={messageItemRef} message={message} />
}
```

最后测试一下。

![](./img/20/01.gif)

本节到此结束。
