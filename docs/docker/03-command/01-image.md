---
id: docker-image
sidebar_label: 镜像
title: Docker 镜像
---

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
