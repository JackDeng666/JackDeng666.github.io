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

### Docker Web 管理工具 portainer

```bash
$ docker run -d --name portainer \
  -p 8000:8000 \
  -p 9443:9443 \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $HOME/portainer:/data \
    portainer/portainer-ee:latest
```

### 在线代码编辑器 Code Server

```bash
$ mkdir -p ~/.config
$ docker run -it --name code-server  \
  -p 127.0.0.1:8080:8080 \
  -v "$HOME/.config/code-server:/home/coder/.config" \
  -v "$PWD:/home/coder/project" \
  -u "$(id -u):$(id -g)" \
  -e "DOCKER_USER=$USER" \
    codercom/code-server:latest
```

### MySQL

```bash
$ docker run --name mysql \
  -p 3306:3306 \
  -v $HOME/mysql/conf.d:/etc/mysql/conf.d \
  -v $HOME/mysql/data:/var/lib/mysql \
  -v /etc/localtime:/etc/localtime:ro \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -d mysql:5.7.23
```

### Redis

```bash
$ docker run -d --name myredis \
  -v $HOME/redis/conf:/usr/local/etc/redis \
  -v /etc/localtime:/etc/localtime:ro \
    redis redis-server /usr/local/etc/redis/redis.conf
```

### Nginx

```bash
$ docker run --name my-nginx \
  -v "$HOME/nginx/nginx.conf:/etc/nginx/nginx.conf:ro" \
  -v "$HOME/nginx/html:/usr/share/nginx/html:ro" \
  -p 8080:80 \
  -d nginx
```

### PostgreSQL

```bash
$ docker run --name my-postgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -e PGDATA=/var/lib/postgresql/data/pgdata \
  -v $HOME/nginx/mount:/var/lib/postgresql/data \
  -d postgres
```

### 媒体管理工具 Dim

```bash
$ docker run --name my-dim \
   -p 8000:8000/tcp \
   -v $HOME/.config/dim:/opt/dim/config \
   -v $HOME/dim/media:/media:ro \
   -d ghcr.io/dusk-labs/dim:dev
```

[Github](https://github.com/Dusk-Labs/dim)

### Gitlab

```bash
$ docker run -d --name gitlab \
  --hostname gitlab.example.com \
  --publish 8443:443 --publish 8081:80 -p 2222:22 \
  --restart always \
  --volume $HOME/gitlab/config:/etc/gitlab \
  --volume $HOME/gitlab/logs:/var/log/gitlab \
  --volume $HOME/gitlab/data:/var/opt/gitlab \
  -v /etc/localtime:/etc/localtime \
  --shm-size 256m \
    gitlab/gitlab-ce:latest
``` -->

## 参考资料

- [Docker 官方入门教程](https://docs.docker.com/get-started/)
- [Docker 入门学习笔记](https://jaywcjlove.github.io/docker-tutorial)
