---
id: readable
sidebar_label: 可读流
title: 可读流
---

可读流就是一个专门用于生产供程序消费数据的流，其实也就是读取磁盘文件，或者说读取网络请求里的内容。

```js
const rs = fs.createReadStream('text.txt')
rs.pipe(process.stdout)
```

例如当前我们所看到的这段代码，它就是通过 fs 先去调用 createStream 创建了一个可读流，这里之所以能够去进行这样的操作是因为 fs 这个模块本身是已经实现了 ReadStream 的具体接口，而当前生产数据的方式，其实就是读取指定路径上的磁盘文件内容，最后我们就得到了一个数据源，也就是我们所谓的可读流。我们再去利用 pipe 这样的一个管道操作，把当前所获取到的数据再传递给 process.stdout，在 nodejs 中，标准的输出它本身就是一个可写流，所以最终的代码执行之后，就会在控制台里面去打印出当前的文本文件中所对应的内容。

知道了可读流在使用时就相当于是一个数据源之后，我们就再来看一下如何去自定义一个可读流。

### 自定义可读流

- 继承 stream 模块里的 Readable 包类
- 重写 \_read 方法调用 push 产出数据

Readable 类已经把可读流要做的很多工作都提前已经实现了，因此我们只需要来去继承它就可以了，下面的话我们就自己来实现一个可读流的操作。

```js
const { Readable } = require('stream')

// 模拟底层数据
let source = ['aa', 'bb', 'ccc']

class MyReadable extends Readable {
  constructor(source) {
    super()
    this.source = source
  }

  _read() {
    let data = this.source.shift() || null
    this.push(data)
  }
}

let myReadable = new MyReadable(source)

myReadable.on('readable', () => {
  console.log('on readable 触发了')
  const data = myReadable.read() // 消费数据，会把缓冲区的数据清掉
  console.log('on readable 的数据：', data?.toString())
})

myReadable.on('data', data => {
  console.log('on data 触发了：', data.toString())
})

myReadable.on('end', () => {
  console.log('on end 触发了')
})
```

输出内容

```bash
on readable 触发了
on data 触发了： aabb
on readable 的数据： aabb
on readable 触发了
on data 触发了： ccc
on readable 的数据： ccc
on readable 触发了
on readable 的数据： undefined
on end 触发了
```

我们可以看到核心的操作其实就是创建一个 `source` 数组，用它去模拟用底层的数据，之后再去定一个 `MyReadable`，那么让他去继承 `Readable`，在自定义的构造函数里边，我们需要去重写 `_read` 方法，然后在这个方法里边，我们再去调用 `push` 来完成数据的添加，他就会去把这个数据添加到一个缓存中，然后等待着消费者去读取数据，当然这个过程中还会有很多的细节，例如说 `_read` 的方法的触发时机，以及 `push` 操作可添加的数据类型，再或者说暂停模式与流模式之间的切换，而这些内容我们当前就不再去具体分析了，一方面是因为它的内部已经有了一套成熟的实现机制，另一方面我们在使用 nodejs 流操作的时候，更多的其实就是使用 fs 与网络模块，或者说是其他已经继承了流操作的模块，他们就像是一个功能齐全的黑盒，我们可以直接在开发的时候去进行使用，在这里的话，我们主要还是想在使用黑盒操作之前，去理解一下可读流的工作原理。

那接下来我们再去说一下 `readable` 与 `data` 事件，`Readable` 准备两个事件来消费我们可读流中的数据主要还是为了去满足不同的数据使用场景，有些时候我们可能只是需要按需的去读取一定量的数据，而有些时候我们可能需要去源源不断地将底层数据全部读出，基于这样的需求，在 `Readable` 的内部实现上就存在着两种模式，一种就是流动模式，一种是暂停模式，而对于使用者来说，两者的区别其实就在于消费数据的时候，是否需要主动的调用 `read` 方法来读取数据。这两个操作如果和之后遇到的 `pipe` 方法去对比的话，就更像是一个白盒的操作，我们可以自主的拿到每一个数据，然后再去对他们做一些我们想要的操作，而 `pipe` 则是对整体的数据进行处理。

首先我们来说一下 `readable` 事件，它会在缓存区准备好之后，去被触发，直白的说就是可以从流中来读取数据了，因此我们需要自己主动的调用 `read` 方法来消费数据，在这个过程中还有可能会触发 `_read`，从而去继续读取底层数据，然后再到缓存区，再去到应用程序，直到消费者拿到，那之后就意味着底层的数据也被读取完成了，这个时候它就会去停下来。

而 `data` 事件被监听之后，就意味着可读流是处于流动模式的，这个时候数据就会被尽可能快地传递，底层的数据被读取出之后，甚至于都不会去调用 `push` 来进入缓存区，而直接就被消费掉了，同样的话也是读取到 null 之后，消费的行为才会会停下来，除了这两个操作之外，还有一个常用的 `end` 的事件，从字面意思来理解就是结束，因此它会在数据全部被消费完成之后被触发。
