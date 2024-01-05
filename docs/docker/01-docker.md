---
id: docker-intro
slug: /docker
sidebar_label: Docker
title: Docker 备忘录
---

### 本文档主要用于记录 docker 的各种基本操作

<!-- ### 构建镜像

```shell
$ docker build .
$ docker build github.com/creack/docker-firefox
$ docker build - < Dockerfile
$ docker build - < context.tar.gz
$ docker build -t eon/nginx-server .
$ docker build -f myOtherDockerfile .
$ curl example.com/remote/Dockerfile | docker build -f - .
```

### 批量清除

| 实例                                | 说明         |
| ----------------------------------- | ------------ |
| `docker stop -f $(docker ps -a -q)` | 停止所有容器 |
| `docker rm -f $(docker ps -a -q)`   | 删除所有容器 |
| `docker rmi -f $(docker images -q)` | 删除所有镜像 |

### 卷 volume

检查卷

```shell
$ docker volume ls
```

清理未使用的卷

```shell
$ docker volume prune
```

### Docker Compose

| 操作                                            | 作用                                            |
| :---------------------------------------------- | :---------------------------------------------- |
| `docker-compose up`                             | 创建和启动容器                                  |
| `docker-compose up -d`                          | 以分离模式创建和启动容器                        |
| `docker-compose down`                           | 停止和删除容器、网络、映像和卷                  |
| `docker-compose logs`                           | 查看容器的输出                                  |
| `docker-compose restart`                        | 重启所有服务                                    |
| `docker-compose pull`                           | 拉取所有服务的镜像                              |
| `docker-compose build`                          | 构建所有服务的镜像                              |
| `docker-compose config`                         | 验证并查看 Compose 文件                         |
| `docker-compose scale <service_name>=<replica>` | 为服务指定容器个数                              |
| `docker-compose top`                            | 显示正在运行的进程                              |
| `docker-compose run -rm -p 2022:22 web bash`    | 启动 Web 服务并运行 bash 作为其命令，删除旧容器 |

### Docker Services

| :-                                                  | :-               |
| :-------------------------------------------------- | :--------------- |
| `docker service create <options> <image> <command>` | 创建新服务       |
| `docker service inspect --pretty <service_name>`    | 显示详细信息服务 |
| `docker service ls`                                 | 列出服务         |
| `docker service ps`                                 | 列出服务的任务   |
| `docker service scale <service_name>=<replica>`     | 规模特殊服务     |
| `docker service update <options> <service_name>`    | 更新服务选项     |

### Docker Stack

| :-                                               | :-                                         |
| :----------------------------------------------- | :----------------------------------------- |
| `docker stack ls`                                | 列出此 Docker 主机上所有正在运行的应用程序 |
| `docker stack deploy -c <composefile> <appname>` | 运行指定的 Compose 文件                    |
| `docker stack services <appname>`                | 列出与应用关联的服务                       |
| `docker stack ps <appname>`                      | 列出与应用关联的正在运行的容器             |
| `docker stack rm <appname>`                      | 拆掉一个应用程序                           |
``` -->

## 参考资料

- [Docker 官方入门教程](https://docs.docker.com/get-started/)
- [Docker 入门学习笔记](https://jaywcjlove.github.io/docker-tutorial)
