---
slug: docusaurus-to-github-pages
date: 2023-9-18
title: 使用ssg框架docusaurus生成站点并部署到GithubPages
authors: [jack]
tags: [docusaurus, react, 前端]
---

## 仓库准备

docusaurus 是一个 react 的 ssg 框架，可以生成静态博客，因此可以部署到许多免费的静态文件托管服务上，如 Github Pages，Vercel。
并且 docusaurus 自带自动推送 githubpages，所以这里用 GithubPages 部署。

### 1. github 创建仓库

![](./img/img1.png)

### 2. 把 docusaurus 项目关联并推送到仓库

```shell
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:JackDeng666/JackDeng666.github.io.git
git push -u origin main
```

如果把仓库命名为 用户名.github.io，即可以通过https://xx.github.io，访问到
