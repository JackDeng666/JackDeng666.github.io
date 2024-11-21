---
slug: nestjs-stripe
date: 2024-04-05
title: nestjs 接入 stripe webhook 遇到的问题
authors: [jack]
tags: [nestjs, node]
---

nestjs 接入 stripe webhook 时，官方提供的 api `stripe.webhooks.constructEvent` 需要传入原始请求体才能成功解析出数据，而 nestjs 到达 controller 是默认是没把原始请求体返回的，所以需要做一些配置。

<!--truncate-->

### 修改入口文件

把 `NestFactory.create` 的第二个参数的 `rawBody` 设置为 true。

```ts
// ...

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true
  })
  // ...
}
bootstrap()
```

### controller 处获取 rawBody

直接使用 `RawBody` 参数装饰器即可。

```ts
import { Headers, RawBody } from '@nestjs/common'
// ...
export class PayController {
  // ...

  @Post('webhook')
  async webhook(
    @Headers('Stripe-Signature') signature: string,
    @RawBody() rawBody: Buffer
  ) {
    return this.payService.handleWebhook(signature, rawBody)
  }
}
```
