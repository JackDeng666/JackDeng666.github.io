---
id: file-readable
sidebar_label: 文件可读流
title: 文件可读流
---

本篇来看一下文件的可读流操作，它其实就是一个继承了 `Readable` 与 `EventEmitter` 类的内置 api，可以去通过 fs 来创建使用，当前要做的就是知道如何来使用它去创建和消费数据，以及他身上常见的事件。

### data 事件读数据

```js
const fs = require('fs')

let rs = fs.createReadStream('text.txt', {
  flags: 'r',
  encoding: null, // 默认为null，表示当前会以 buffer 的类型进行读取
  fd: null,
  mode: 0o666,
  autoClose: true,
  start: 0, // 从哪个位置开始读
  end: 6, // 从哪个位置结束
  highWaterMark: 2 // 表示缓冲区的大小
})

rs.on('data', chunk => {
  console.log(chunk.toString())
  rs.pause() // 每次读完暂停一下
  setTimeout(() => {
    rs.resume() // 1秒后重新启动继续读
  }, 1000)
})
```

### readable 事件读数据

```js
const fs = require('fs')

let rs = fs.createReadStream('text.txt', {
  flags: 'r',
  encoding: null, // 默认为null，表示当前会以 buffer 的类型进行读取
  fd: null,
  mode: 0o666,
  autoClose: true,
  start: 0, // 从哪个位置开始读
  end: 6, // 从哪个位置结束
  highWaterMark: 2 // 表示每次要读多少字节的数据
})

rs.on('readable', () => {
  const chunk = rs.read()
  if (chunk !== null) {
    console.log(chunk.toString())
  }
})
```

可以看到使用基本和前几章的自定义 `Readable` 是一样。
