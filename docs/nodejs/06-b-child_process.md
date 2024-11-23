---
id: child_process
sidebar_label: child_process 子进程
title: child_process 子进程
---

子进程是 nodejs 核心 API，如果你会 shell 命令，他会有非常大的帮助，或者你喜欢编写前端工程化工具之类的，他也有很大的用处，以及处理 CPU 密集型应用。

### 创建子进程

nodejs 创建子进程共有 7 个 API Sync 同步 API， 不加是异步 API

- exec 执行命令
- execSync 执行命令 同步执行
- execFile 执行可执行文件
- execFileSync 执行可执行文件 同步执行
- spawn 执行命令
- spawnSync 执行命令 同步执行
- fork 创建 node 子进程

### exec

exec 适合用于执行简单的命令

示例， 获取 nodejs 版本号

```js
const { exec } = require('child_process')

exec('node -v', (err, stdout, stderr) => {
  if (err) {
    return err
  }
  console.log(stdout.toString())
})
```

### execFile

execFile 适合执行可执行文件，例如执行一个 node 脚本，或者 shell 文件，windows 可以编写 cmd 脚本，posix 可以编写 sh 脚本

示例，编写一个 `bat.cmd` 文件。

```cmd
echo '开始'

mkdir test

cd ./test

echo console.log("test") >test.js

echo '结束'

node test.js
```

使用 execFile 执行这个文件。

```js
const { execFile } = require('child_process')
const path = require('path')

execFile(path.resolve(process.cwd(), './bat.cmd'), null, (err, stdout) => {
  console.log(stdout.toString())
})
```

### spawn

spawn 用于执行一些实时获取的信息，因为 spawn 返回的内容有标准输出流，边执行边返回，exec 是返回一个完整的 buffer，buffer 的大小是 200k，如果超出会报错，而 spawn 是无上限的。

标准输出流执行完成后会抛出 close 事件，并返回状态码，通过状态码可以知道子进程是否顺利执行。exec 只能通过返回的 buffer 去识别完成状态，识别起来较为麻烦。

示例，输出网络状态

```js
const { spawn } = require('child_process')

const { stdout } = spawn('netstat', ['-an'], {})

stdout.on('data', steram => {
  console.log(steram.toString())
})
```

> exec 是通过 execFile 实现的， execFile 是通过 spawn 实现的

### fork

场景适合大量的计算，或者容易阻塞主进程操作的一些代码，就适合使用 fork

示例

```js title="index.js"
const { fork } = require('child_process')

const testProcess = fork('./test.js')

testProcess.send('我是主进程')

testProcess.on('message', data => {
  console.log('我是主进程接受消息：', data)
})
```

```js title="test.js"
process.on('message', data => {
  console.log('子进程接受消息：', data)
})

process.send('我是子进程')
```

fork 底层使用的是 IPC 通道进行通讯的。
