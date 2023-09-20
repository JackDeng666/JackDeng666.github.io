---
id: image-and-container
sidebar_label: Docker 镜像和容器
title: Docker 镜像和容器
---

## 镜像管理

### 搜索镜像

```shell
docker search [image_name]
```

| 参数                  |                 作用 |
| :-------------------- | -------------------: |
| `-f, --filter filter` | 基于给定条件过滤输出 |
| `--format string`     |       格式化搜索结果 |
| `--limit int`         |   设置最大搜索结果数 |
| `--no-trunc`          |   显示完整的镜像描述 |

### 下载镜像

```shell
docker pull [image_name]
```

| 参数                      |                    作用 |
| :------------------------ | ----------------------: |
| `-a`                      |    拉取所有 tagged 镜像 |
| `--disable-content-trust` | 忽略镜像的校验,默认开启 |

### 删除镜像

### 查看已下载的镜像

```shell
docker images
```

| 参数           |                             作用 |
| :------------- | -------------------------------: |
| `-a, --all`    | 显示所有镜像（默认隐藏中间镜像） |
| `--digests`    |                         显示摘要 |
| `--format`     |           使用模板格式化显示输出 |
| `--no-trunc`   |     不要截断，显示完整的镜像信息 |
| `-f, --filter` |           根据提供的条件过滤输出 |
| `-q, --quiet`  |                    仅显示镜像 ID |

### format 的使用例子

```shell
docker images --format "{{.Repository}}:{{.Tag}}"
```

| 参数            |                 描述 |
| :-------------- | -------------------: |
| `.ID`           |              镜像 ID |
| `.Repository`   |             镜像仓库 |
| `.Tag`          |             镜像标签 |
| `.Digest`       |             镜像摘要 |
| `.CreatedSince` | 创建映像后经过的时间 |
| `.CreatedAt`    |       创建镜像的时间 |
| `.Size`         |             镜像大小 |

### 删除镜像

```shell
docker rmi [image_id]
```

| 参数         |                             作用 |
| :----------- | -------------------------------: |
| `-f`         |                         强制删除 |
| `--no-prune` | 不移除该镜像的过程镜像，默认移除 |

### 其他镜像操作

| 命令                                   |                   描述 |
| :------------------------------------- | ---------------------: |
| `docker save busybox > ubuntu.tar`     |  将镜像保存到 tar 存档 |
| `docker load < ubuntu.tar.gz`          | 加载一个 tarred 存储库 |
| `docker load --input ubuntu.tar`       | 加载一个 tarred 存储库 |
| `docker history <image>`               |         显示镜像的历史 |
| `docker commit <container> <image>`    |       将容器另存为镜像 |
| `docker tag <image> <image>:<tagname>` |               标记镜像 |
| `docker push <user>/<image>`           |               推送镜像 |

## 容器管理

### 跑起一个容器

```shell
docker run -p 8088:80 docker/getting-started
```

| 参数            |                                                            作用 |
| :-------------- | --------------------------------------------------------------: |
| `-i`            |               以交互模式运行容器，通常与 -t 同时使用，直接`-it` |
| `-t`            | 启动容器后，为容器分配一个命令行，通常与 -i 同时使用，直接`-it` |
| `-d`            |                                        守护进程，后台运行该容器 |
| `-p`            |    格式：<宿主机端口>:<容器端口> 将宿主机端口映射到容器中的端口 |
| `-P`            |                        把所有容器内部端口随机映射到宿主机的端口 |
| `-v`            |      格式：<宿主机目录>:<容器目录> 将容器目录挂载到宿主机目录。 |
| `--rm`          |                                  容器终止运行后自动删除容器文件 |
| `--name`        |                                                    指定容器名称 |
| `--network`     |                                                      连接到网络 |
| `-e,--env list` |                                                    设置环境变量 |

### 列出容器

```shell
docker ps #列出正在运行的容器
```

| 参数           |                         作用 |
| :------------- | ---------------------------: |
| `-a`           |                 列出所有容器 |
| `-s`           |               显示文件总大小 |
| `-f, --filter` |       根据提供的条件过滤输出 |
| `--format `    |       使用模板格式化显示输出 |
| `-q, --quiet`  |                仅显示容器 ID |
| `--no-trunc`   | 不要截断，显示完整的容器信息 |

### 容器常用命令

| 命令                                  |                 描述 |
| :------------------------------------ | -------------------: |
| `docker rename <container> <newname>` |           重命名容器 |
| `docker rm <container>`               |             移除容器 |
| `docker logs <container>`             | 显示容器的控制台日志 |
| `docker inspect <container>`          |             检查容器 |
| `docker stop <container>`             |             停止容器 |
| `docker restart <container>`          |         重启一个容器 |
| `docker port <container>`             |   显示容器的端口映射 |
| `docker top <container>`              |             列出进程 |
| `docker kill <container>`             |         杀死一个容器 |
| `docker stats <container>`            |         容器资源使用 |
| `docker diff <container>`             | 列出对容器所做的更改 |
| `docker exec -it <container> bash`    |           连接到容器 |

参数 `<container>` 可以是容器 id 或名称
