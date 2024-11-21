---
id: duplex-transform
sidebar_label: 双工和转换流
title: 双工和转换流
---

本篇来看一下双工流和转换流。

### Duplex

它其实就是一个同时实现了 `Readable` 与 `Writeable` 的流，在管道操作中，它既可以作为上游来生产数据，也可以去作为下游来消费数据，知道了可读可写操作之后，这个应该是很好理解的。

要去自己定义一个双工流，就要完成以下一些核心的步骤。

- 继承 `Duplex` 类
- 重写 `_read` 方法，调用 `push` 生产数据
- 重写 `_write` 方法，调用 `write` 消费数据

```js
const { Duplex } = require('stream')

// 模拟底层数据
const source = ['a', 'b', 'c']

class MyDuplex extends Duplex {
  constructor(source, options) {
    super(options)
    this.source = source
  }

  _read() {
    const data = this.source.shift() || null
    this.push(data)
  }

  _write(chunk, encoding, callback) {
    console.log('_write 数据:', chunk.toString())
    process.nextTick(callback)
  }
}

const myDuplex = new MyDuplex(source)

myDuplex.on('data', chunk => {
  console.log('on data:', chunk.toString())
})

myDuplex.write('测试数据', 'utf-8', () => {
  console.log('测试数据写入')
})
```

从代码中我们可以发现双工流的使用特点，就是既可以监听 `readable`、 `data` 事件来读取数据，也可以去调用 `write` 方法去写入数据。

### Transform

我们再来去看一下转换流，其实它本质上也是一个双工流，它们的区别就是，比如说 `Duplex` 里边的读和写是相互独立的，它的读操作所创建的数据是不能够被写操作来，直接当做数据源去使用的，但是在 `Transform` 当中，这个操作就是可以的，也就是说在转换流的底层是将读写操作进行了联通，除此之外，转换流还可以去对数据执行相应的转换操作，这里的相应就是由我们自己来定义实践。

要去自己定义一个转换流，要完成以下核心操作。

- 继承 `Transform` 类
- 重写 `_transform` 方法，调用 `push` 和 `callback`

```js
const { Transform } = require('stream')

class MyTransform extends Transform {
  constructor(opts) {
    super(opts)
  }

  _transform(chunk, encoding, callback) {
    console.log('_transform:', chunk.toString())
    this.push(chunk.toString().toUpperCase())
    callback(null)
  }
}

const myTransform = new MyTransform()
myTransform.pipe(process.stdout)

myTransform.write('a')
myTransform.write('b')
setTimeout(() => {
  myTransform.write('c')
}, 1000)
```

可以看到在 `_transform` 的内部可以去调用了内部的 `push` 方法，这个操作就会把数据去交给可读流，当然这个过程中我们还可以去对当前的数据进行加工，例如我们当前代码里面就是把 `chunk` 的内容转为大写之后，再去执行 `callback`，做完这些个操作之后。我们又去实例化了一个转换流对象，然后又让它去调了 `pipe` 方法，把转换流通过管道传给了 `process.stdout` 这个可写流，因为它本身是双工的，所以可以直接来调用 `write` 方法来执行数据的写入操作，可以看到输出，每写完一次数据，标准输出就会输出一个经过转换的数据。
