---
slug: docusaurus-to-github-pages
date: 2023-9-18
title: 使用ssg框架docusaurus生成站点并部署到GithubPages
authors: [jack]
tags: [docusaurus, react, 前端]
---

## github 仓库准备

docusaurus 是一个 react 的 ssg 框架，可以生成静态博客，因此可以部署到许多免费的静态文件托管服务上，如 Github Pages，Vercel。
并且 docusaurus 自带自动推送 githubpages，所以这里用 GithubPages 部署。

<!--truncate-->

### 1. github 创建仓库

![](./img/img1.png)

### 2. 把 docusaurus 项目推送到仓库

```shell
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:JackDeng666/JackDeng666.github.io.git
git push -u origin main
```

### 3. 新建分支 gh-pages

![](./img/img2.png)

### 4. 设置部署分支

![](./img/img3.png)

因为仓库命名为 用户名.github.io，即可以通过 https://用户.github.io 的根目录，访问到当前项目的 readme.md 文件。

如果项目名称不是 用户名.github.io, 那将通过 https://用户.github.io/其他名称 访问到 Github Pages。

## 部署

### 1. 修改 docusaurus.config.js

```js title="docusaurus.config.js"
const config = {
  ...
  url: 'https://JackDeng666.github.io',
  baseUrl: '/',

  organizationName: 'JackDeng666', // 填写用户名
  projectName: 'JackDeng666.github.io', // 填写项目名
  deploymentBranch: 'gh-pages', // 填写分支为gh-pages
  ...
}
```

### 2. 部署检查

观察 package.json

```js title="package.json"
{
  ...
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    ...
  },
  ...
}
```

在本地先打包，部署检查，会发现许多问题，自行解决：

```shell
npm run build
npm run serve
```

### 3. 执行部署

```shell
npm run deploy
```

等那么一会会（一般 1-2min），浏览器输入 https://用户名.github.io/ 网址就可以看到效果了，如[我的地址](https://JackDeng666.github.io)。
