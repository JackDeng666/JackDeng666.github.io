---
id: docker-build-deploy
sidebar_label: 使用docker打包整个应用部署
title: 使用docker打包整个应用部署
---

本节来使用 docker 打包整个应用部署。

### 项目准备

因为最终要把前端应用打包的代码放到 server 端运行，所以还需要修改一下代码。

在`main.ts`使用`useStaticAssets`设置 server 项目下`public`文件夹为静态文件。

```ts title="apps/server/src/main.ts"
// ...
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // ...
  app.useStaticAssets('public')
  // ...
}
bootstrap()
```

修改一下`HttpExceptionFilter`，判断 404 时如果路由前缀不是`/api`则返回`public`的`index.html`文件，这样直接刷新前端页面时就不会报 404 了。

```ts title="apps/server/src/common/filter/http-exception.filter.ts"
import {
  // ...
  HttpStatus
} from '@nestjs/common'
// ...
import { createReadStream } from 'fs'
import { join } from 'path'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // ...

    if (
      status === HttpStatus.NOT_FOUND &&
      !request.url.startsWith('/api') &&
      process.env.NODE_ENV === 'prod'
    ) {
      const indexFile = createReadStream(
        join(process.cwd(), 'public/index.html')
      )
      indexFile.pipe(response)
      return
    }

    // ...
  }
}
```

### docker 准备

根目录添加一个`.dockerignore`文件。

```json title=".dockerignore"
.git
.gitignore
*.md
**/node_modules
**/dist
**/public
.vscode
.husky
.dockerignore
Dockerfile
.eslintignore
.eslintrc
.prettierrc
.prettierignore
```

添加`Dockerfile`配置文件。

```dockerfile title="Dockerfile"
FROM node:18-alpine3.14

RUN npm i pnpm@8 -g
RUN npm i pm2@5 -g

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY packages/shared/package.json packages/shared/package.json
COPY apps/client/package.json apps/client/package.json
COPY apps/server/package.json apps/server/package.json

RUN pnpm i

COPY . .

RUN pnpm -r build && cp -r /app/apps/client/dist/ /app/apps/server/public/

WORKDIR /app/apps/server

ENV NODE_ENV prod
ENV SERVER_PORT 3000
EXPOSE 3000

CMD ["pm2-runtime", "start", "dist/main.js"]
```

直接根目录打包即可

```shell title="/"
docker build -t ying-chat:latest .
```

打包完成后启动容器，自行填入各个配置项，`kubernetes.docker.internal`为容器访问我 windows 的本地网络。

```shell
docker run --name ying-chat \
  -p 80:3000 \
  -e SERVER_PORT=3000 \
  -e SERVER_JWT_SECRET=4h4gdsf2ds1f2 \
  -e EMAIl_HOST=smtp.qq.com \
  -e EMAIL_PORT=465 \
  -e EMAIL_USER=jackdeng155@qq.com \
  -e EMAIL_AUTH_CODE=somjvruefdgbided \
  -e DB_HOST=kubernetes.docker.internal \
  -e DB_USER=root \
  -e DB_PORT=3306 \
  -e DB_PASSWORD=ying123456 \
  -e DB_NAME=ying_chat \
  -e REDIS_HOST=kubernetes.docker.internal \
  -e REDIS_PORT=6379 \
  -e MINIO_HOST=kubernetes.docker.internal \
  -e MINIO_PORT=9000 \
  -e MINIO_ACCESS_KEY=Jd86dW5F1aXvfcQroe5e \
  -e MINIO_SECRET_KEY=RlQqCWexfztJAQ8A17VS3bdZAj22WhFrWvJBbBQ6 \
  -d ying-chat:latest
```

看看效果。

![](./img/21/01.gif)

本节到此结束。
