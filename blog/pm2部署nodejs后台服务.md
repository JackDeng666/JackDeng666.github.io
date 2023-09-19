---
slug: pm2-deploying-node-services
date: 2021-11-08
title: pm2部署nodejs后台服务
authors: [jack]
tags: [pm2, node]
---

### 全局安装 pm2

```shell
npm install -g pm2
```

### 启动应用

进入对应项目里文件夹

```shell
pm2 start server.js
```

<!--truncate-->

### 列出所有应用

```shell
pm2 list
```

### 查看资源消耗

```shell
pm2 monit
```

### 查看某一个应用状态

```shell
pm2 describe [app id]
```

### 显示所有应用程序的日志

```shell
pm2 logs
```

### 显示指定应用程序的日志

```shell
pm2 logs [app-name]
```

### 清空所有日志文件

```shell
pm2 flush
```

### 重启应用

```shell
pm2 restart [app id]
```

### 停止应用

```shell
pm2 stop [app id]
```
