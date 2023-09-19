---
sidebar_label: 手册
title: 3R教室使用手册
hide_title: true
pagination_next: null
pagination_prev: null
sidebar_position: 1
---

# 3R 教室使用手册

:::success
为了更好的使用 3R 教室，请仔细阅读本手册
:::

在 3R 教室成立一周年之际，我们把社区整体重建，重新出发，感谢一路有你陪伴！

## 🐙 社区

:::success

除以下两者外，我们还提供了一个可选的社交工具: [telegram 地址](https://t.me/to3rcd)

:::

:::info

如果有问题请尽量去 discord，站长和其他管理员以及助教会在 discord 轮值在线。请不要在微信群艾特，这可能无法得到回复！

:::

### 💬 微信群

在付费后，请及时添加站长微信`iampincman`，站长会拉你进微信群，普通交流请在微信群. 另外，在这里会有一些其他会员的内推岗位(有远程或者坐班)，请注意关注！

:::note
后续所有内推岗位 3R 教室不再运营,请自行在群里招聘或求职,也可以去其它平台用我们淘金课的方法求职.3R 教室只对教学以及工作室承接的外包和开发者负责.
:::

![](https://img.pincman.com/media/202308082022939.png)

### ⚡️Discord

站长和助教等其他管理员一般不会在微信回答课程问题，发布外包等信息，微信群只用于日常交流和招聘求职...

1. 首先请用浏览器打开我们的 discord 社区[discord.3rcd.com](https://discord.3rcd.com)(此处需要你自行解决魔法问题，否则上不去)
2. 使用邮箱注册一个账户，不要用手机号，国内手机号一般收不到验证（请尽量使用[gmail](https://gmail.com)）
3. 把你在我们的 Discord 社区 - 3RCD 社区中的 ID，改成"**地区-技术栈/招聘/外包/创业/自由职业/投资人/管理员(仅 3R 团队)-名称**"（不强制）
4. 通知站长升级成"**VIP**"，然后才可以正常使用这个社区的所有服务

![](https://img.pincman.com/media/202308231509830.png)

## 📚 课程

### 📎 安装 git

macos 系统下，请打开`terminal`或者`iterm2`执行以下命令安装

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" # 安装brew
brew install git # 通过brew安装git
git --version
```

linux 下，请执行以下命令

```bash
sudo apt-get update && sudo apt-get upgrade -y
sudo apt-get install -y git
# redhat系,fadora/centos等
# sudo yum update && sudo yum upgrade -y
# sudo yum install -y git

# arch系,manjaro/arch等
# sudo pacman -Syy
# sudo pacman -S yay
# yay Syu
# yay -S git
```

windows 下，直接通过[git 官网](https://git-scm.com/downloads)下载安装即可

### 🗂 克隆仓库

一、生成 ssh key

打开命令窗口，执行以下命令，不停按回车生成

> 如果是 windows，因为前面安装 git 时自带了一个 gitbash，可以通过桌面快捷方式找到并打开

```bash
ssh-keygen -t rsa -C "随意填一个邮箱地址"
```

二、添加密钥

打开刚才生成的密钥，位置在`~/.ssh/id_rsa.pub`

可以通过`cat`命令来输出内容，并复制

```bash
cat ~/.ssh/id_rsa.pub
```

然后使用站长给你提供的账户及密码登录我们自建的[git 代码托管平台](https://git.3rcd.com/)，点[这个链接](https://git.3rcd.com/user/settings/keys)，点"增加密钥"，把刚才复制的 key 内容添加进去（名称随意填写或默认即可）并添加

![image-20230808144905396](https://img.pincman.com/media/202308081449490.png)

三、克隆文档

打开命令窗口，使用以下命令克隆文档

```bash
git clone git@git.3rcd.com:classroom/courses.git
```

后续请关注[discord](https://discord.3rcd.com)社区的[教室通知](https://discord.com/channels/1090189427608915990/1115165661518381116)频道，如果频道中有更新消息，请到你克隆的文档目录下通过以下命令更新

```bash
cd ~/courses && git pull origin main
```

![image-20230808194310976](https://img.pincman.com/media/202308081943849.png)

### 📒 启动文档

首先，我们下载[docker desktop](https://www.docker.com/products/docker-desktop/)并安装

然后打开命令行窗口，定位到文档目录，并用以下命令启动

```bash
cd ~/courses
docker-compose up -d
```

然后用浏览器打开[localhost:3333](http://localhost:3333)就能看到文档了

![image-20230808152551116](https://img.pincman.com/media/202308081525546.png)

## 🎓 学习

关于课程的详细内容，请自行点击左侧栏到每个课程的页面查看，手册不再赘述

### 📄 课程内容

3R 教室目前提供或不久的将来即将提供的课程如下

- TS 全栈开发实战『`@pincman`』 - 包含 Typescript,React,Nextjs,Node.js,Nestjs,Linux 服务器运维,CICD 自动化等内容
- PHP 全栈开发实战『`@pincman`』 - 包含 React+Laravel,Wordpress 等内容
- 数字游民实践『`@pincman`』 - 包含远程工作求职指导，海外外包渠道拓展指导，自由职业与独立开发者实践，被动收入实践等内容

目前我们在策划中，将来会发布的课程如下

> 以下课程不能确保全部会出，具体看后续策划 ~

- Emacs+Haskell 趣味编程『`@pincman`』
- Rust+Tauri 桌面应用开发实战『`@pincman`』
- Elctron+React 桌面应用开发实战『`@pincman`』
- Golang 与微服务开发实战『讲师招募中』
- .Net7 全栈开发实战『讲师招募中』
- React Native 移动应用开发实战『讲师招募中』
- Swift 移动应用开发实战『讲师招募中』

### ✏️ 资料获取

> 远程淘金课不是技术课，没有文档只有视频

一、所有课程的文档资料集成在本文档里

二、每个课程的代码都在这个课程的主页顶部，请自行查看

三、所有课程的视频（强烈不建议作为技术课主要学习途径，适合放松的时候看看）

所有视频均在百度网盘下载

百度网盘[点击下载](https://pan.baidu.com/s/1pOYOI5xVPY9yuLsfJmFr-w?pwd=aaeq)

![](https://img.pincman.com/media/202306210948288.png)

### 🔎 课程问答

在学习课程的时候（除淘金课），遇到问题，请在 discord 社区的[问答频道](https://discord.com/channels/1090189427608915990/1090611046093435020)发帖提问。**如果问题需要加紧处理，则在帖子中`@愧怍`或者`@cloneable`两位助教!**

对于帖子的问题，我们一般会在 24 小时内进行答复

![](https://img.pincman.com/media/202308231511558.png)

### 🗝 学习方法

:::danger

我们花了大量的时间在文档上，因为站长认为看文档才是最好的学习方法，这可以拓展思维以及在实践中获取更稳固的经验。而看视频学个基础就要浪费大把时间，看完后可能仍然是一知半解的小白，所以我们视频更新会比较慢，并且作用主要是用于在自媒体平台推广而已！

:::

新课的学习方法比较简单，没有太大的心智负担！

查看你要学习的课程的文档，跟着文档一步步走，如果不懂的地方可以看一下配套视频或者在[问答频道](https://discord.com/channels/1090189427608915990/1090611046093435020)中发帖提问即可。

**每个课的学习方法迥异，具体请查看每个课程的页面！**

### 📝 实践方案

在学习课程的同时，如果你已经会一部分了，不妨下载我们的商业项目代码。因为商业代码是属于共享协议的，所以一般不直接开放。如果需要学习，可以查看我们的[外包项目](https://discord.com/channels/1090189427608915990/1135031871315640362)频道或者[3R 工作室](https://3rcd.com/workroom)页面(这个页面可能更新会比较慢会过时，很多新项目不会显示，建议前者)，看到你喜欢并想学习的项目，可以联系`@cloneable`帮助开通！

这些商业项目，可进行更改后用于作为你求职或者接单的案例，会非常有帮助！

### 🇬🇧 英语教室

:::caution

英语教室并非 3R 教室内置服务，属合作方，需要额外支付费用，**并且购买英语教室服务的前提是必须已经成为 3R 教师会员，谢绝非会员报名！**

:::

英语教室由 3R 投资人之一，来自意大利威尼斯的**@慧敏**同学开办！慧敏同学毕业于哈工大，目前在欧洲旅居，雅思 7.5，对于口语教学由比较丰富的经验。

对有未来有移民需求，考雅思，或者从事纯英语环境的远程工作有需求的同学可以了解咨询一下，

本项目目前收费`899元`，有需要请自行联系她！

## 📦 外包项目

外包项目目前倒在[项目组队](https://discord.com/channels/1090189427608915990/1135031871315640362)频道，由我们[3R 工作室](https://3rcd.com/workroom)承接外包

:::tip

**请注意: 我们承接的外包必须是 442 付款，一般不签合同与开票，如必须要可商量！**

:::

对于发包者

- 无论是否会员均需先联系**@pincman**(微信`iampincman`)接单，我们有专业的[3R 工作室](https://3rcd.com/workroom)承接各种技术栈和类型的外包项目
- 如[3R 工作室](https://3rcd.com/workroom)拒绝或无法承接，则请自行发布到[项目组队](https://discord.com/channels/1090189427608915990/1135031871315640362)频道，这时，可留联系方式
- [3R 工作室](https://3rcd.com/workroom)承接项目后会给你找到最适合的开发人员和设计师组队开发，然后可以进入我们的企业微信以及 notion 开始我们的合作

![](https://img.pincman.com/media/202308231515442.png)

对于接单者

- 请多关注[项目组队](https://discord.com/channels/1090189427608915990/1135031871315640362)中的信息，如果看到有适合你参与开发的项目，请联系 pincman
- 项目一旦确认，并且成为我们的开发人员并成功合作第一次后，可以加入[3R 工作室](https://3rcd.com/workroom)，后续有同类型的项目，只要你时间够久直接找你开发

![image-20230808201251563](https://img.pincman.com/media/202308082012059.png)

### 🪄 自由职业与创业

会员朋友如果处于失业/待业状态，又或者有创业的想法，可以联系站长**@pincman**提供一些资源和指导（非会员勿扰），或者介绍一些投资者朋友，或者帮忙推广一下你的产品与服务，尽力给你起步期争取第一桶金！

## 🪐 投资

3R 教室目前已售卖分红 15%，并且处于 A 轮融资中...

但是由于 A 轮投资者跟我们的理念有所冲突（其更倾向于迅速扩展上市，并且派驻财务等乱七八糟的无法接受的行为，而站长及其他股东更倾向于稳打稳扎慢慢推广扩展），所以可能最终会拒绝融资。这也就是我们可以持续出售我们的分红的原因！

:::success

我们的融资并不是传统意义上的融资，只是简单的售卖永久分红，无法开票以及签署协议（仅仅只是一个收据），所以我们融资仅限 3R 内部会员，请不要介绍外部投资人！

:::

分红方式：目前，3R 教室可售卖分红为`5%`，每`1%`售价为`10w`，分红为每个季度一次，金额 = 100%纯利润(扣除成本) x 占股比例

盈利收益：我们 5,6,7 月的盈利为每月`16w`，相信我们后续盈利规模相信会不断扩大，

盈利来源：会员费/外包差价/猎头中介费/移民中介提成等等

资金用途：招聘远程工作者开发社区，制作更多优秀课程，投放广告让更多人知道我们等等

如有需要投资可联系`@pincman`
