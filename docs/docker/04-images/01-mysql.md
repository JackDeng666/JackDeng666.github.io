---
id: mysql
sidebar_label: MySQL 数据库
title: docker 使用 MySQL 数据库
---

### 下载镜像

```shell
docker pull mysql
```

### 运行容器

```shell
docker run --name mysql \
  -p 3306:3306 \
  -v D:/docker-backup/mysqlconf.d:/etc/mysql/conf.d \
  -v D:/docker-backup/mysql-data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -d mysql
```

- `--name mysql`：容器名字为 `mysql`
- `-p 3306:3306`：将容器的 3306 端口映射到主机的 3306 端口
- `-v D:/docker-backup/mysqlconf.d:/etc/mysql/conf.d`：将主机当前目录下的 `D:/docker-backup/mysqlconf.d` 挂载到容器的 `/etc/mysql/conf.d` ，这个是挂载配置目录
- `-v D:/docker-backup/mysql-data:/var/lib/mysql`：将主机当前目录下的 `D:/docker-backup/mysql-data` 挂载到容器的 `/var/lib/mysql` ，这个是数据文件存放目录
- `-e MYSQL_ROOT_PASSWORD=123456`：初始化 root 用户的密码

### 查看日志

docker exec 命令允许您在 Docker 容器内运行命令。 以下命令行将在 mysql 容器中为您提供一个 bash shell：

```shell
docker exec -it mysql bash
```

MySQL 日志可通过 Docker 的容器日志获得：

```shell
docker logs mysql
```
