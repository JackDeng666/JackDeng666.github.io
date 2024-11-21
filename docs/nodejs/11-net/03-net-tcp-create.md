---
id: net-tcp-create
sidebar_label: 创建 TCP 通信
title: 创建 TCP 通信
---

知道了 tcp 的一些概念之后，我们就可以去使用 nodejs 所提供的一些内置模块来创建 tcp 的服务端与客户端的实例，然后再去让两者完成通信，这里我们使用的就是 net 模块。它是已经实现了一些用于底层通信的接口，可以直接来创建基于流操作的 TCP 或者说是 IPC 的服务端与客户端。

服务端

```js
const net = require('net')

const PORT = 1234
const HOST = 'localhost'

const server = net.createServer()

server.listen(PORT, HOST)

server.on('listening', () => {
  console.log(`服务端已经开启在 ${HOST}:${PORT}`)
})

server.on('close', () => {
  console.log('服务端关闭了')
})

server.on('error', err => {
  console.log(err)
})

server.on('connection', socket => {
  socket.on('data', chunk => {
    const msg = chunk.toString()
    console.log(msg)

    socket.write(Buffer.from('你好' + msg))
  })

  socket.on('error', err => {
    console.log(err)
    socket.destroy()
  })
})
```

客户端

```js
const net = require('net')

const PORT = 1234
const HOST = 'localhost'

const socket = net.createConnection({
  port: PORT,
  host: HOST
})

socket.on('close', () => {
  console.log('断开连接了')
})

socket.on('error', err => {
  console.log(err)
})

socket.on('connect', () => {
  socket.write('哇咔咔')
})

socket.on('data', chunk => {
  console.log(chunk.toString())
})
```

梳理一下代码的整体过程，首先有一个服务端用于接收客户端发送过来的消息，同时也可以回写消息给客户端，然后我们还有一个客户端用于去发送和接收消息，至此我们就有了两个参与通信的实例。从代码层面上，在 net 的内部就提供了具体的服务事件和方法，参考官网我们可以发现事件以及方法是有很多的，这里的话我们就介绍通信过程中的最核心的几个。

先看服务端通过 `createServer` 创建的 `Server` 实例，通过它监听的第一个就是 `listening` 事件，他在我们去完成 `server.listen` 方法调用之后就会被触发，表示当前服务端已经开启监听了。第二个就是 `close` 事件，每当 server 关闭的时候，会去触发这个事件，如果说当前还有连接是存在的，那么直到所有的链接都结束之后，才会去触发这个事件。第三个就是常见的 `error` 事件，它就是专门用于捕获错误的，例如说我们如果监听了一个已经被使用掉的端口，那么就会去暴出 `address already in use` 这样的错误。最后一个就是最重要的 `connection` 事件，它会在新的链接建立时去被触发，也就是我们每次收到客户端连接的时候，它的参数一般我们会用 `socket` 来进行表示，也就是一个 `Socket` 的对象实例，而它继承自 `Duplex`，所以它是一个双工流。

再看客户端通过 `createConnection` 创建的 `Socket` 实例，这个实例就可以对应着服务端监听 `connection` 事件传递的 `Socket` 实例，我们最终想做的事情是对连接的客户端和服务端都可以向对方进行传输数据，因此 `Socket` 这个双工流上面的事件方法实现，主要常用的就是 `data` 事件和 `write` 方法，每当某一端去调用 `write` 方法来发送数据的时候，那么另一端就可以去通过监听 `data` 事件来接收发来的数据，其实也就是从可读流里边来拿数据的操作，`write` 方法也就是往可写流里写入数据。
