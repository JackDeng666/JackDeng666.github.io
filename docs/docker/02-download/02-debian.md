---
id: debian
sidebar_label: debian
title: debian 下载安装 docker
---

[官方下载资料](https://docs.docker.com/engine/install/debian/)

### 运行以下命令以卸载所有冲突的软件包：

```shell
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

### 使用 Apt 存储库安装

在新主机上首次安装 Docker 引擎之前，您需要 需要设置 Docker Apt 仓库。之后，您可以安装和更新 存储库中的 Docker。

#### 1. 设置 Docker 的 Apt 存储库。

```shell
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

#### 2. 安装最新 Docker 软件包。

```shell
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

#### 3. 通过运行映像验证安装是否成功。

```shell
sudo docker run hello-world
```
