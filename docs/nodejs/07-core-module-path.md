---
id: core-module-path
sidebar_label: 核心模块 path
title: 核心模块 path
---

path 模块它是 nodejs 里面一个内置的模块，我们可以去使用 require 将它导入到当前的脚本中进行使用，而它的主要作用就是用来处理文件或者说目录的路径，比如说我们可以去使用 path 来提取某一个文件的路径，或者说它的后缀，完成这些操作我们只需要去调用不同的方法就可以了，我们可以把它当做是一个工具箱，而我们要做的就是掌握这个箱子里边所存放的不同工具。

### `basename()` 获取路径中的基础名称

```js
console.log(path.basename('/a/b/test.js')) // test.js
console.log(path.basename('/a/b/test.js', '.js')) // test
console.log(path.basename('/a/b/test.js', '.css')) // test.js
console.log(path.basename('/a/b')) // b
console.log(path.basename('/a/b/')) // b
```

`basename()` 返回的是路径中的最后一部分，第二个参数表示扩展名，如果说没有设置则返回完整的文件名称加后缀，设置了但没有匹配到，也会忽略，处理目录路径的时候，结尾处有路径分隔符，也会被忽略。

### `dirname()` 获取路径中的目录的路径

```js
console.log(path.dirname('/a/b/c/test.js')) // /a/b/c
console.log(path.dirname('/a/b/c')) // /a/b
console.log(path.dirname('/a/b/c/')) // /a/b
```

`dirname()` 返回的是路径中最后一部分的上一层目录所在路径，处理目录路径的时候，结尾处有路径分隔符，也会被忽略。

### `extname()` 获取路径中文件的扩展名称

```js
console.log(path.extname('/a/b/test.js')) // .js
console.log(path.extname('/a/b')) // 输出空字符
```

### `parse()` 解析路径

可以获取根路径，目录名、后缀名等信息

```js
console.log(path.parse('/a/b/test.js'))
```

```bash
{
  root: '/',
  dir: '/a/b',
  base: 'test.js',
  ext: '.js',
  name: 'test'
}
```

### `format()` 序列化路径

跟 `parse()` 是相反的行为

### `normalize()` 规范化路径

```js
console.log(path.normalize('')) // .
console.log(path.normalize('/a/b/c')) // \a\b\c
console.log(path.normalize('/a///b../c')) // \a\b..\c
console.log(path.normalize('/a//\\b/c')) // \a\b\c
console.log(path.normalize('/a//\b/c')) // \a\c
```

### `isAbsolute()` 获取路径是否为绝对路径

```js
console.log(path.isAbsolute('test')) // false
console.log(path.isAbsolute('/test')) // true
console.log(path.isAbsolute('')) // false
console.log(path.isAbsolute('.')) // false
```

### `join()` 拼接多个路径片段，还原成一个可用的路径

```js
console.log(path.join('a/b', 'c', 'test.js')) // a\b\c\test.js
console.log(path.join('a/b', 'c', '../', 'test.js')) // a\b\test.js
console.log(path.join('/a/b', 'c', './', 'test.js')) // \a\b\c\test.js
console.log(path.join('/a/b', 'c', '', 'test.js')) // \a\b\c\test.js
console.log(path.join('')) // .
```

### `resolve()` 拼接多个路径片段，返回一个绝对路径

```js
console.log(path.resolve()) // E:\MySourceCode\learn\nodejs-learn
console.log(path.resolve('a/b', 'c')) // E:\MySourceCode\learn\nodejs-learn\a\b\c
console.log(path.resolve('a', '/b')) // E:\b
console.log(path.resolve('/a', 'b')) // E:\a\b
console.log(path.resolve('/a', '/b')) // E:\b
console.log(path.resolve('a', '../b')) // E:\MySourceCode\learn\nodejs-learn\b
console.log(path.resolve('../a')) // E:\MySourceCode\learn\a
console.log(path.resolve('../a', '../b')) // E:\MySourceCode\learn\b
```
