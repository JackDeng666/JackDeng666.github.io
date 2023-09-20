---
id: network
sidebar_label: Docker 网络
title: Docker 网络
---

### 创建网络

```shell
docker network create -d overlay MyOverlayNetwork
docker network create -d bridge MyBridgeNetwork
docker network create -d overlay \
  --subnet=192.168.0.0/16 \
  --subnet=192.170.0.0/16 \
  --gateway=192.168.0.100 \
  --gateway=192.170.0.100 \
  --ip-range=192.168.1.0/24 \
  --aux-address="my-router=192.168.1.5" \
  --aux-address="my-switch=192.168.1.6" \
  --aux-address="my-printer=192.170.1.5" \
  --aux-address="my-nas=192.170.1.6" \
  MyOverlayNetwork
```

### 删除网络

```shell
docker network rm MyOverlayNetwork
```

### 列出网络

```shell
docker network ls
```

### 获取有关网络的信息

```shell
docker network inspect MyOverlayNetwork
```

### 将正在运行的容器连接到网络

```shell
docker network connect MyOverlayNetwork nginx
```

### 启动时将容器连接到网络

```shell
docker run -it -d --network=MyOverlayNetwork nginx
```

### 断开容器与网络的连接

```shell
docker network disconnect MyOverlayNetwork nginx
```
