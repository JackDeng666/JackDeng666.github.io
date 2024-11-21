---
id: file-api
sidebar_label: 文件操作 API
title: 文件操作 API
---

### readFile 读文件

先准备一个 `text.txt` 文件，然后进行读取。

```js
fs.readFile('text.txt', 'utf-8', (err, data) => {
  console.log('当前文件内容：', data)
})
```

如果第 1 个参数传入的文件路径不存在，则 err 会有值提示文件不存在。

### writeFile 写文件

```js
fs.writeFile('text.txt', 'hello', err => {
  console.log(err)
  if (!err) {
    fs.readFile('text.txt', 'utf-8', (err, data) => {
      console.log('当前文件内容：', data)
    })
  }
})
```

`writeFile` 操作默认会把先前文件的内容全部清空，再覆盖新内容进去，并且如果第一个传入的文件路径不存在，则会自动创建这个文件。

`writeFile` 的第 3 个参数还可以传一个配置项。

```js
fs.writeFile(
  'text.txt',
  'ads',
  {
    mode: 0o666, // 配置权限位
    flag: 'r+', // 配置标志位，此时写了 r+，那么此时不会清空原来的所有内容，而是覆盖一部分进去
    encoding: 'utf-8' // 配置字符编码
  },
  err => {
    console.log(err)
    if (!err) {
      fs.readFile('text.txt', 'utf-8', (err, data) => {
        console.log('当前文件内容：', data)
      })
    }
  }
)
```

### appendFile 追加内容到文件里

```js
fs.appendFile('text.txt', 'kkakak', err => {
  if (!err) {
    fs.readFile('text.txt', 'utf-8', (err, data) => {
      console.log('当前文件内容：', data)
    })
  }
})
```

使用这个 api 可以看到内容是添加在了文件的末尾的，不会清空原来的内容，实际上 `writeFile` 的配置项的 `flag` 写成 `a` 也是一样的效果，因为 `a` 表示追加内容。

### copyFile 复制文件

```js
fs.copyFile('text.txt', 'test.txt', err => {
  if (!err) {
    fs.readFile('test.txt', 'utf-8', (err, data) => {
      console.log('复制好的文件内容：', data)
    })
  }
})
```

这里边注意这个几个 `readFile`、 `writeFile`、 `copyFile` api，它其实都是一次性的操作，就是我们当前的目标文件里边，假如说呢有 100 个字节的数据，那么它就相当于是一次性全部拿出来放在内存里边，然后再从内存里边把它一次性再写入到另外一个文件，这些都不适合于去操作大文件。

### watchFile 监控文件变化

```js
fs.watchFile(
  'text.txt',
  {
    interval: 20 // 每20毫秒观察一下文件是否变化
  },
  (cur, prev) => {
    // 文件变化了就会触发回调
    // 输入当前文件信息和上一次的文件信息
    console.log(cur, prev)

    fs.unwatchFile('text.txt') // 取消监听文件
  }
)
```
