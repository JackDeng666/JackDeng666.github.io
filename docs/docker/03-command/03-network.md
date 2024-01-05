---
id: network
sidebar_label: 网络
title: Docker 网络
---

### 创建网络

```shell
docker network create -d bridge mynet
```

### 删除网络

```shell
docker network rm mynet
```

### 列出网络

```shell
docker network ls
```

### 获取有关网络的信息

```shell
docker network inspect mynet
```

### 将正在运行的容器连接到网络

```shell
docker network connect mynet nginx
```

### 启动时将容器连接到网络

```shell
docker run -it -d --network=mynet nginx
```

### 断开容器与网络的连接

```shell
docker network disconnect mynet nginx
```
