---
id: global-variable-process
sidebar_label: 全局变量 process
title: 全局变量 process
---

本篇我们来看一下 process 这样的一个模块，我们知道它就是一个全局的变量，为了去清晰地去认识这个模块，我们将它的功能分为两个部分来去进行说明，第一个就是它可以去帮助我们来获取当前正在执行脚本的一些信息，比如说我们当前的进程在工作的时候，对 cpu 或者内存会产生一定的消耗，那我们利用 process 所提供的一些属性或者方法就可以去得到的这两个数据，或者当前的进程在工作的时候我们本地是一个什么样的环境，通过 process 也可以来去进行获取。那第二个就是通过 process 我们可以对当前的进程来执行一些操作，比如说我们可以去监听这个进程，在执行的过程中所存在的一些内置的事件，然后去让两者进行通信，从而来完成更多的操作。

### 查看内存使用

我们可以通过调用 process 上的 `memoryUsage`函数就可以得到一个对象。

```js
console.log(process.memoryUsage())
```

```bash
{
  rss: 41951232,
  heapTotal: 6479872,
  heapUsed: 5736824,
  external: 431454,
  arrayBuffers: 17678
}
```

它的里边有这样的几个键，第一个 `rss` 它就可以认为是我们当前的常驻内存，我们可以理解为是本机是有一个内存条的，但是这个内存条里边的所有空间，并不是完全的来交给我们的应用程序去使用的，所以这时候的话，我们会有一个常驻内存的概念。

第二个 `heapTotal`，我们可以认为是我们当前的这个脚本在执行之初，或者说刚开始的时候，我们所申请的这样一个总的内存大小。

第三个 `heapUsed`，就是我们现在这个脚本呢再去执行的过程中，它实际所使用的这样一个内存大小。

第四个 `external`，我们可以去回想一下我们之前呢所接触到的，关于我们的 nodejs 的一个架构，我们说过我们 js 所编写的代码，它其实是没有办法直接跟我们的底层硬件去进行通信的，所以这一次我们最底层的核心，仍然是我们的 C/C++ 所编写的一些模块，所以说 nodejs 执行或者说环境初始化之初肯定有很多的底层模块默认就已经是生效了，或者说被加载进来了，那因此这个内存的空间大小就专门是用来存放或者说表示我们这个底层 C/C++ 的核心模块所占据的空间大小。

第五个 `arrayBuffers`，这个值是在我们当前的新版本的或者说高版本的 node 这样一个系列里边，去新加进来的，以前这个值也是放在了 `external` 的内存里边，，我们现在只需要知道它其实代表的就是一片独立的空间大小，它不占据我们 v8 所占用的这样一个内存，那这个大小它默认在这也是有一个初始化的数值，或者说在我们看不见初始化我们当前 node 运行环境的时候，我们就已经对 buffer 的这样一个缓冲区域进行了一个内存的使用了。

### 查看 CPU 占用

我们可以通过调用 process 上的 `cpuUsage`函数就可以得到一个对象。

```js
console.log(process.cpuUsage())
```

```bash
{
  user: 15000,
  system: 15000
}
```

有两个键，一个是 `user`，还有一个是 `system`，那这一块其实分别就表示我们用户他在去执行的过程中所占用的 cpu 的时间片段和操作系统去占用的 cpu 的时间片段。

### 查看运行环境

- `cwd()` js 脚本启动时的运行目录
- `platform` 系统平台
- `version` 和 `versions` 查看 node 版本信息
- `arch` cpu 架构
- `env` 用户环境

### 查看运行状态

- `argv` 可以获取启动参数

```js
console.log(process.argv)
```

启动输入示例

```bash
node test.js 参数1 参数2
```

```bash
[
  'E:\\Program\\nvm\\v18.18.2\\node.exe',
  'E:\\MySourceCode\\learn\\nodejs-learn\\test.js',
  '参数1',
  '参数2'
]
```

可以看到输出了一个数组，第一个值是 node 执行器的地址，第二个值是脚本文件的地址，后面的参数都是我们后面以空格分隔添加的自定义参数。

- `pid` 可以获取进程 ID
- `uptime()` 可以获取运行时间的统计

### 进程事件

process 上可以通过 on 来监听进程的退出事件。

```js
process.on('exit', code => {
  console.log('exit ', code)
})

process.on('beforeExit', code => {
  console.log('before exit ', code)
})
```

注意在 `exit` 事件里是只能执行同步代码的，在 `beforeExit` 里才能执行异步代码。

process 可以直接使用 `exit` 函数退出进程，此时是不会触发 `beforeExit` 的事件回调的。

```js
process.exit()
```

### 标准输入、输出

- `process.stdout` 是一个可写流对象，它会把写入的内容输出在控制台。

通过它的 `write` 函数我们可以直接向控制台输出内容。

```js
process.stdout.write('aaa')
```

由于 `process.stdout` 是一个可写流对象，我们也可以用管道给其输入内容。

```js
const fs = require('fs')
fs.createReadStream('text.txt').pipe(process.stdout)
```

- `process.stdin` 是一个可读流对象，它可以读取用户在控制台的输入。

我们可以直接把标准输入流通过管道传递给标准输出流。

```js
process.stdin.pipe(process.stdout)
```

可以通过监听 data 事件来获取标准输入流的值。

```js
process.stdin.on('data', chunk => {
  if (chunk !== null) {
    process.stdout.write('data ' + chunk)
  }
})
```
