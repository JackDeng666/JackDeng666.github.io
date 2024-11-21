---
id: directory-operation-api
sidebar_label: 目录操作 API
title: 目录操作 API
---

## 常见目录操作 API

### access

判断文件或目录是否具有操作权限

```js
fs.access('text.txt', err => {
  if (err) {
    console.log(err)
  } else {
    console.log('有操作权限')
  }
})
```

### stat

获取目录及文件信息

```js
fs.stat('text.txt', (err, stats) => {
  console.log(stats.size)
  console.log(stats.isFile())
  console.log(stats.isDirectory())
})
```

### mkdir

创建目录

```js
// 默认只会创建传入路径的最后一个部分，如果前面的路径不存在，则会创建失败，如果第二个配置参数的recursive设置为 true，则会递归创建父文件夹
fs.mkdir('a/b', { recursive: true }, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('创建成功')
  }
})
```

### rmdir

删除目录

```js
// 默认只会删除传入路径的最后一个部分，如果路径不存在或者目录非空，则会删除失败。
// 如果第二个配置参数的 recursive 为 true，就算目录非空也会删除目录下所有文件与文件夹，但是这个参数表示已经废弃
fs.rmdir('a', { recursive: true }, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('删除成功')
  }
})
```

### readdir

读取目录中内容

```js
// 默认只会读取传入路径的最后一个部分的目录下的信息，如果第二个配置参数的 recursive 为 true，则会获取包括子目录下的所有信息
fs.readdir('a', { recursive: true }, (err, files) => {
  console.log(files)
})
```
