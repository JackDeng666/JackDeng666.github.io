---
id: http
sidebar_label: HTTP 协议
title: HTTP 协议
---

本篇来看下 nodejs 里的 http 协议，它是我们在日常工作中接触最多的一个协议。

### 通过 net 模块响应 http 协议

我们依旧通过 net 模块去创建一个服务。

```js
const net = require('net')

const server = net.createServer()

server.listen(1234, () => {
  console.log('服务启动了')
})

server.on('connection', socket => {
  socket.on('data', chunk => {
    console.log(chunk.toString())
  })
})
```

直接从浏览器访问 `localhost:1234`，此时浏览器会一直在转不会显示内容，可以看到 `data` 事件输出了以下内容。

```bash
服务启动了
GET / HTTP/1.1
Host: localhost:1234
Connection: keep-alive
sec-ch-ua: "Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: vi,zh-CN;q=0.9,zh-TW;q=0.8,zh;q=0.7,en;q=0.6
Cookie: ying-lng=en


```

在我们的 tcp 的基础之上，我们这个浏览器就会基于我们的 http 协议，来往我们的服务端去发送一些内容，也就是上面的数据，可以看到包含了请求行，它的里边就包含了我们的请求方式，以及请求路径和请求的协议和版本号，再往下就是请求头，再往下还会有一个请求的空行，最后在请求空行的下边就是我们的请求体，这个是空的，因为我们现在发送的是一个 get 请求，所以这里边我们并没有什么请求体的数据。

现在浏览器一直没有内容是因为我们没有响应数据回去，那接下来我们可以试下直接返回一个响应体的内容。

```js
server.on('connection', socket => {
  socket.on('data', chunk => {
    // console.log(chunk.toString());

    socket.write(`HTTP/1.1 200 OK
Date: Wed, 30 Oct 2024 12:49:56 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 11

hello world`)

    socket.end()
  })
})
```

浏览器刷新一下 `localhost:1234`，可以看到 `hello world` 显示在了页面上。

### http 模块

如果我们正常进行 web api 的开发，一般会使用 nodejs 当中的 http 模块。

```js
const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)
  console.log(req.method)

  res.end('hello world')
})

server.listen(1234, () => {
  console.log('服务启动了')
})
```

可以看到使用明显更加的方便，每次有请求进来都会进入回调函数，然后在回调里通过传递过来的两个参数处理业务就好，其中 `req` 代表请求，它是一个可读流，`res` 代表响应，它是一个可写流，可以看到代码中，我也是直接调用可写流的 `end` 方法给响应写入了数据，后续最终的内容就会显示给浏览器了。

### 获取 http 请求体的信息

我这里直接通过 `curl` 发送了一个 POST 请求进行测试，`curl -v -X POST -d "{"a": 123}"  http://localhost:1234`，其中 -d 就是要发送的数据，那接下来就看一下如何获取请求体里面的数据。

```js
const server = http.createServer((req, res) => {
  console.log(req.url)
  console.log(req.method)

  // 获取请求体数据
  let arr = []
  req.on('data', chunk => {
    arr.push(chunk)
  })
  req.on('end', () => {
    console.log(Buffer.concat(arr).toString())
  })

  res.end('hello world')
})
```

可以看到是能拿到 `{a: 123}` 这个数据的。
