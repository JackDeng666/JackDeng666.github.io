---
id: docker-container
sidebar_label: 容器
title: Docker 容器
---

### 跑起一个容器

```shell
docker run -p 8088:80 docker/getting-started
```

| 参数            |                                                            作用 |
| :-------------- | --------------------------------------------------------------: |
| `-i`            |               以交互模式运行容器，通常与 -t 同时使用，直接`-it` |
| `-t`            | 启动容器后，为容器分配一个命令行，通常与 -i 同时使用，直接`-it` |
| `-d`            |                                        守护进程，后台运行该容器 |
| `-p`            |    格式：[宿主机端口]:[容器端口] 将宿主机端口映射到容器中的端口 |
| `-P`            |                        把所有容器内部端口随机映射到宿主机的端口 |
| `-v`            |      格式：[宿主机目录]:[容器目录] 将容器目录挂载到宿主机目录。 |
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
