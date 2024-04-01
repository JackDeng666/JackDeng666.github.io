---
id: install-drone
sidebar_label: 安装 drone 的 server 和 runner
title: 安装 drone 的 server 和 runner
---

## 安装 Drone Server

直接在服务器上通过 docker 启动 Drone Server。

### `docker-compose.yml` 文件示例

```yml
version: '3'

services:
  drone:
    image: drone/drone:2
    container_name: drone-server
    volumes:
      - /data/drone:/data
    restart: always
    ports:
      - 1688:80
    environment:
      - DRONE_GITEA_SERVER={Gitea的URL地址}
      - DRONE_GITEA_CLIENT_ID={Gitea客户端ID}
      - DRONE_GITEA_CLIENT_SECRET={Gitea客户端秘钥}
      - DRONE_RPC_SECRET={与drone runner通信的秘钥}
      - DRONE_SERVER_HOST={drone server的url地址}
      - DRONE_SERVER_PROTO=http
      - DRONE_TLS_AUTOCERT=false
      - DRONE_USER_CREATE=username:{Gitea的超管用户名},admin:true
```

### 变量说明

Drone Server 是一个轻量级的 Docker 容器，使用 SQLite 作为默认数据库，支持通过环境变量动态设定运行参数。

- DRONE_GITEA_CLIENT_ID Gitea OAuth 客户端 ID
- DRONE_GITEA_CLIENT_SECRET Gitea OAuth 客户端密钥
- DRONE_GITEA_SERVER Gitea 服务器地址，例如 `http://git.xxx.com`。注意填写准确的 http(s) 协议，否则您会看到来自 Gitea 的错误报告：unsupported protocol scheme。
- DRONE_RPC_SECRET 共享密钥。这个密钥用于验证 Drone Server 和 Runner 之间的 RPC 连接。因此，在 Server 和 Runner 上都必须使用相同的密钥。
- DRONE_SERVER_HOST 您访问 Drone 时所用的域名或 IP 地址。如果使用 IP 地址，还应该包含端口。 例如 `http://ci.xxx.com`。
- DRONE_SERVER_PROTO 设置服务器的协议，使用：http 或 https。 如果您已经配置 ssl 或 acme，此字段默认为 https。
- DRONE_USER_CREATE 指定某个用户为管理员，例如：`username:john,admin:true`。参考文档 [Administrators](https://docs.drone.io/server/user/admin/)，管理员有权管理其他帐户、编辑仓库库详细信息、编辑仓库信任标志、访问受限制的 API。

## 安装 Drone Runner

在准备用来跑 CI 的本地机器安装 Drone Runner。

### `docker-compose.yml` 文件示例

```yml
version: '3'

services:
  drone-runner:
    image: drone/drone-runner-docker:1
    container_name: drone-runner
    restart: always
    ports:
      - 3222:3000
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - DRONE_RPC_PROTO=http
      - DRONE_RPC_HOST={drone server的url地址}
      - DRONE_RPC_SECRET={与drone server通信的秘钥}
      - DRONE_LIMIT_TRUSTED=false
      - DRONE_RUNNER_CAPACITY=2
      - DRONE_RUNNER_NAME=drone-cli
```

### 变量说明

Drone Server 管理 CI/CD 系统的调度，而 Drone Runner 则是 CI/CD 流水线的执行者。

- DRONE_RPC_HOST 填写 Drone Server 的主机名（以及可选填的端口号）。基于 PRC 协议连接 Runner 与 Server，接收流水线任务。
- DRONE_RPC_PROTO 传输协议：http 或 https
- DRONE_RPC_SECRET 与 Drone Server 共享的密钥
- DRONE_RUNNER_CAPACITY Runner 可以并发执行的流水线数量，默认：2
- DRONE_RUNNER_NAME 自定义 Runner 名称

检查 Drone Runner 是否和 Drone Server 连通。

```shell
docker logs drone-runner
```

显示下方内容即表示连接成功。

```shell
starting the server
successfully pinged the remote server
```

此时可以登录 Drone 网页面板，例如 `http://ci.xxx.com`，点击 continue 跳转到 Gitea 授权页面，点击应用授权，然后填写一下注册信息即可登录上去了。
