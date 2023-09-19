---
slug: convert-file-into-base64-and-blobUrl
date: 2021-11-15
title: 把文件转成base64数据和blobUrl
authors: [jack]
tags: [js, 前端]
---

### 1. 转为 blobUrl

```js
export function createBlobURL(file) {
  if (typeof window === 'undefined') {
    new Error('非浏览器环境')
  }
  if (window.URL) {
    return window.URL.createObjectURL(file)
  } else if (window.webkitURL) {
    return window.webkitURL.createObjectURL(file)
  } else {
    return ''
  }
}
```

<!--truncate-->

### 2. 转为 base64 数据

```js
export function createDataURL(file) {
  return new Promise((resovle, reject) => {
    try {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = function (e) {
        resovle(e.target.result) // Data URL
      }
      // reader.onprogress = function (e) {
      //   const { lengthComputable, loaded, total } = e
      //   if (lengthComputable) {
      //     console.log(`总结字节数：${total}, 已经加载字节数：${loaded}`)
      //   }
      // }
    } catch (error) {
      reject(error)
    }
  })
}
```
