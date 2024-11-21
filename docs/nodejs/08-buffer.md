---
id: buffer
sidebar_label: Buffer 缓冲区
title: Buffer 缓冲区
---

## Buffer 介绍

buffer 是 nodejs 当中除了 process 之外，另外一个非常重要的全局变量，我们一般会称之为叫做 buffer 缓冲区。由于 buffer 的存在，让开发者在 nodejs 平台下，可以直接去使用 js 语言来完成二进制的数据操作，第一个就是二进制数据，然后就是流操作，最后就是 buffer。

起初的 jascript 语言是为了服务于浏览器平台操作而设计的，因此在它的内部其实主要操作的数据类型就是字符串，但是 nodejs 的出现，让我们在服务端也可以直接去使用 js 进行编程，在这种情况下，我们就可以去采用 js 语言来完成具体的 io 操作，例如文件的读写，网络服务中数据的传输等，而在这个过程中，我们就使用到了 buffer。

可为什么 io 操作就跟 buffer 扯上关系了呢？这就要从我们二进制数据来说起了，用户使用软件来获取信息，而开发者使用语言来处理和展示信息，而这个信息其实就是数据，诸如我们在客户端上看到的字符，图片，或者说视频，还有听到的音频等等，那这些数据在工作的时候有存放在客户端的哪个位置，又是以什么样的数据形态在做存储呢？例如我们当前如果想通过微信给朋友去发送一张照片的时候，他又是怎样去送达到对方手机的微信的？我想肯定不太可能是真的有一张照片，然后在时空中去做飞行的传输，因此我们的第一个结论就是，无论我们当前看到的是什么，对于计算机来说，它肯定处理的就是数字，最终就是我们天天所说的二进制，所以我们 io 来 io 去，那其实操作的就是二进制数据。

说完这个之后，我们再来说一说流操作这个词语本身是有一些抽象的，但是也不是不能想象的，首先去说明一下，它并不是 nodejs 里所创造出来的一个概念，对于流操作来说，它本身就已经存在很多年了，我们就将它理解为是一种数据类型，和字符串、数组是有一些相似的，也是能用于存储数据的，但是它可以分段，当我们想要去进行大数据传输的时候，就可以去使用流操作，因为这样的话就可以避免由于操作的数据内存过大而出现的把内存在短时间内占满的情况，当我们去采用流操作，再去配合管道技术，那就可以将流当中的数据一段一段的传给下一个端，这样一来我们就算是完成了大数据的传输，典型的应用场景就是我们现在看视频的时候，其实一般都是边下载边看的这样一个过程，当然这里说的可能过于简单了，但是没有关系，因为 nodejs 当中的流模块，它本身就是我们后续要去强调的内容。

我们在这里说回到 buffer 上来，经过前面的交代，我们知道了程序运行其实就会去进行二进制的数据传输，而这个传输一般都是由 from 到 to 的这样一个过程，也就是说我们会有一个数据的生产者，然后至少会有一个数据的消费者，中间的话我们就会去使用流再加入管道来进行连接，但是这个模型在实际工作的时候也会存在一些问题，比如说数据的生产速度无法满足数据的消费速度，再或者说数据的消费速度比生产的速度呢又慢了许多，总归来讲，不论出现了当前的哪种情况，我们都会去发现这里的数据会有一个等待的过程，那等待的时候那些多出来的数据，或者说那些还不够一次消费的数据，它们被存放在哪里？这个时候就用到了 buffer，所以现在我们再回头去看一下缓冲区这个概念，应该就能够很好地理解了，说到这里，为什么有 buffer，我们就算是交代清楚了，那具体来说在语言层面上，buffer 又是什么呢？简单的说它就是一个内存空间，只不过这个内存空间有一些特殊，因为我们都知道 nodejs 平台下的 js 代码，它最终还是由 v8 引擎来执行完成的，因此按道理来讲，所有的内存消耗应该都是属于 v8 的堆内存，而这个 buffer 它就是 v8 之外的一片空间，对于它的大小来说，是不占据着 v8 堆内存大小的，之前我们去使用 process 的时候，也打印过关于内存消耗的这样一个值，里边是有一个 arrayBuffers 的，所以这里的话我们就要注意了，buffer 的空间申请它不是由 node 来完成的，但是在使用层面上，它的空间分配又是由我们编写的 js 代码来去控制的，因此在空间回收的时候，它还是由 v8 的 gc 来去管理和回收，我们是无法去参与到其中的工作的。

## 创建 Buffer 的常用方式

### alloc

```js
const b = Buffer.alloc(10)
console.log(b) // <Buffer 00 00 00 00 00 00 00 00 00 00>
```

`alloc` 需接收指定一个字节大小的参数。

### allocUnsafe

```js
const b = Buffer.allocUnsafe(10)
console.log(b) // <Buffer 00 08 00 00 00 00 00 00 00 01>
```

`allocUnsafe` 使用跟 `alloc` 差不多，但是申请的内存区域可能会有别人用过的旧数据。

### from

```js
const b1 = Buffer.from('1')
const b2 = Buffer.from('中')
const b3 = Buffer.from([0, 1, 2, 'a'])
const b4 = Buffer.from(b3)
b4[0] = 1
console.log(b1) // <Buffer 31>
console.log(b2) // <Buffer e4 b8 ad>
console.log(b3) // <Buffer 00 01 02 00>
console.log(b4) // <Buffer 01 01 02 00>
```

`from` 可以接收 3 种类型的数据：字符，数组，buffer。

## Buffer 的常用实例方法

### fill 使用数据填充 buffer

```js
const b = Buffer.alloc(6)
b.fill('123')
console.log(b) // <Buffer 31 32 33 31 32 33>
console.log(b.toString()) // 123123
```

`fill` 可以接收 3 个参数，第一个为写入的数据，第二个为填充数据的起始下标，第三个为填充数据的结束下标，如果没有指定起始结束的下标会默认把 buffer 填充满。

### write 向 buffer 中写入数据

```js
const b = Buffer.alloc(6)
b.write('123')
console.log(b) // <Buffer 31 32 33 00 00 00>
console.log(b.toString()) // 123
```

`write` 不会把 buffer 填充满，它可以接收 3 个参数，第一个为写入的数据，第二个为写入数据位置的起始下标，第三个为写入数据的长度。

### toString 从 buffer 中提取数据

```js
const b = Buffer.from('我是中文')
console.log(b) // <Buffer e6 88 91 e6 98 af e4 b8 ad e6 96 87>
console.log(b.toString()) // 我是中文
// 在utf-8 下，一个中文占用3个字节，这里从下标1开始，少了一个字节，导致出现乱码
console.log(b.toString('utf-8', 1)) // ��是中文
console.log(b.toString('utf-8', 3)) // 是中文
console.log(b.toString('utf-8', 3, 9)) // 是中
```

`toString` 它可以接收 3 个参数，第一个字符的编码格式，第二个为提取数据位置的起始下标，第三个为提取数据位置的结束下标。

### subarray 截取 buffer

```js
const b1 = Buffer.from('我是中文')
const b2 = b1.subarray(3, 9)
console.log(b1) // <Buffer e6 88 91 e6 98 af e4 b8 ad e6 96 87>
console.log(b2) // <Buffer e6 98 af e4 b8 ad>
console.log(b2.toString()) // 是中
```

`subarray` 可以接收 2 个参数，分别为截取数据的起始和结束下标，最后会返回一个新的 buffer。

### indexOf 在 buffer 中查找数据

```js
const b1 = Buffer.from('o((>ω< ))o，啊这，哇咔咔，啊6，哇奥')
console.log(b1.indexOf('啊')) // 14
console.log(b1.indexOf('啊', 16)) // 35
console.log(b1.indexOf('啊', 16, 'ascii')) // -1
```

`indexOf` 接收 3 个参数，第一个参数为查找的数据，可以填字符、数字和 buffer 类型，第二个参数为 buffer 的下标位置，表示从哪个位置开始查找，第三个参数可以指定字符编码，最终会返回找到的数据的下标。

### copy 复制 buffer 中的数据

```js
const b1 = Buffer.from('啊这')
const b2 = Buffer.alloc(6)
b1.copy(b2, 3, 3, 6)
console.log(b1) // <Buffer e5 95 8a e8 bf 99>
console.log(b2) // <Buffer 00 00 00 e8 bf 99>
console.log(b1.toString()) // 啊这
console.log(b2.toString()) // 这
```

`copy` 会把当前的 buffer 当成复制的数据源，向第一个参数指定的 buffer 复制数据，第二个参数为目标的起始下标，第三个参数为复制源的的起始下标，第四个参数为复制源的结束下标。
