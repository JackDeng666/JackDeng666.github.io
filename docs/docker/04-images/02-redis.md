---
id: redis
sidebar_label: Redis 内存数据库
title: docker 使用 Redis 内存数据库
---

### 命令启动容器

linux 下跑命令

```shell
docker run --name redis-test \
  -p 6379:6379 \
  -v D:/DockerData/ContainerBackup/redis-data:/data \
  -d --restart=always redis --requirepass ying123456
```

如果是在 windows 下使用 cmd 跑命令，把 `\` 换行符改为 `^` 即可。

### docker compose 文件启动容器

```yml
version: '3'
services:
  redis:
    container_name: redis-test
    image: redis
    volumes:
      - D:/DockerData/ContainerBackup/redis-data:/data
    restart: always
    command: --requirepass ying123456
    ports:
      - '6379:6379'
```
