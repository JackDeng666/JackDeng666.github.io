---
id: api-init
sidebar_label: 接口初始化
title: 接口初始化
---

## 添加 api 配置

```shell
pnpm i @nestjs/config
```

写入配置文件

```json title="apps/server/.env"
# api
SERVER_PORT=3000
SERVER_PREFIX=/api
```

```json title=".gitignore"
// ...
.env
```

```ts title="apps/server/src/config/api.config.ts"
import { registerAs } from '@nestjs/config'

export const apiConfig = registerAs('apiConfig', () => {
  return {
    port: process.env.SERVER_PORT || 3000,
    prefix: process.env.SERVER_PREFIX || 'api'
  }
})
```

```ts title="apps/server/src/config/index.ts"
export * from './api.config'
```

```ts title="apps/server/src/app.module.ts"
import { Module } from '@nestjs/common'
import { UserModule } from './modules/user/user.module'
import { ConfigModule } from '@nestjs/config'
import { apiConfig } from '@/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [apiConfig]
    }),
    UserModule
  ]
})
export class AppModule {}
```

```ts title="apps/server/src/main.ts"
// ...
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const apiConf = app.get<ConfigType<typeof apiConfig>>(apiConfig.KEY)
  app.setGlobalPrefix(apiConf.prefix)
  await app.listen(apiConf.port)
  Logger.log(
    `Application running on: http://localhost:${apiConf.port}${apiConf.prefix}`,
    'Main'
  )
}
bootstrap()
```

## 引入 mysql

先启动 docker mysql，创建表 ying_chat

```shell
CREATE SCHEMA ying_chat DEFAULT CHARACTER SET utf8mb4;
```

```shell
pnpm i @nestjs/typeorm typeorm mysql2
```

写入配置文件

```json title="apps/server/.env"
// ...
# mysql配置
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=jd123456789
DB_NAME=ying_chat
```

```shell title="apps/server/src/config/db.config.ts"
import { registerAs } from '@nestjs/config'

export const dbConfig = registerAs('dbConfig', () => {
  if (!process.env.DB_HOST) {
    throw new Error('DB_HOST is not exist')
  }
  if (!process.env.DB_PORT) {
    throw new Error('DB_PORT is not exist')
  }
  if (!process.env.DB_USER) {
    throw new Error('DB_USER is not exist')
  }
  if (!process.env.DB_PASSWORD) {
    throw new Error('DB_PASSWORD is not exist')
  }
  if (!process.env.DB_NAME) {
    throw new Error('DB_NAME is not exist')
  }
  return {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
})
```

```ts title="apps/server/src/config/index.ts"
export * from './api.config'
export * from './db.config'
```

```ts title="apps/server/src/modules/db/db.module.ts"
import { Global, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigType } from '@nestjs/config'
import { dbConfig } from '@/config'

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (dbConf: ConfigType<typeof dbConfig>) => {
        return {
          charset: 'utf8mb4',
          type: 'mysql',
          host: dbConf.host,
          port: dbConf.port,
          username: dbConf.username,
          password: dbConf.password,
          database: dbConf.database,
          synchronize: true,
          autoLoadEntities: true,
          logging: true
        }
      },
      inject: [dbConfig.KEY]
    })
  ]
})
export class DbModule {}
```

```ts title="apps/server/src/app.module.ts"
import { Module } from '@nestjs/common'
import { UserModule } from './modules/user/user.module'
import { ConfigModule } from '@nestjs/config'
import { apiConfig, dbConfig } from '@/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [apiConfig, dbConfig]
    }),
    UserModule
  ]
})
export class AppModule {}
```

## 用户模块添加

```ts title="apps/server/src/modules/user/entities/user.entity.ts"
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 32,
    comment: '用户名',
    unique: true
  })
  username: string

  @Column({
    length: 50,
    comment: '邮箱',
    unique: true
  })
  email: string

  @Column({
    comment: '密码'
  })
  password: string

  @Column({
    length: 32,
    comment: '昵称',
    nullable: true
  })
  nickname: string

  @Column({
    length: 50,
    comment: '头像',
    nullable: true
  })
  avatar: string

  @CreateDateColumn({
    comment: '创建时间'
  })
  createAt: Date

  @UpdateDateColumn({
    comment: '更新时间'
  })
  updateAt: Date
}
```

id 列是主键、自动递增。

username、 password、avatar，都是 VARCHAR。

createAt 是创建时间，updateAt 是更新时间。

这里的 @CreateDateColumn 和 @UpdateDateColumn 都是 datetime 类型。

@CreateDateColumn 会在第一次保存的时候设置一个时间戳，之后一直不变。

而 @UpdateDateColumn 则是每次更新都会修改这个时间戳。

用来保存创建时间和更新时间很方便。

可以看到打印了 create table 的建表 sql 语句。

然后我们在 UserModule 引入 TypeOrm.forFeature 动态模块，传入 User 的 entity。

```ts title="apps/server/src/modules/user/user.module.ts"
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { User } from './entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class UserModule {}
```

这样模块内的 UserService 就可以注入 User 对应的 Repository 了

```ts title="apps/server/src/modules/user/auth.service.ts"
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class AuthService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>
}
```

然后就可以通过 userRepository 方便地对 User 增删改查。

我们在 UserController 里添加两个方法。

```ts title="apps/server/src/modules/user/auth.controller.ts"
import { Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login() {}

  @Post('register')
  register() {}
}
```

## 统一过滤器

```ts =title="apps/server/src/common/filter/http-exception.filter.ts"
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException
} from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()

    const status = exception.getStatus()
    const exceptionRes = exception.getResponse()

    const error =
      typeof response === 'string'
        ? { message: exceptionRes }
        : (exceptionRes as object)

    response.status(status).json({
      status,
      timestamp: new Date().toISOString(),
      path: request.url,
      ...error
    })
  }
}
```

```ts title="apps/server/src/common/filter/index.ts"
export * from './http-exception.filter'
```

```ts title="apps/server/src/main.ts"
// ...
async function bootstrap() {
  // ...
  app.setGlobalPrefix(apiConf.prefix)
  app.useGlobalFilters(new HttpExceptionFilter())
  // ..
}
bootstrap()
```

## 统一拦截器

```ts title="apps/server/src/common/interceptor/process-time.interceptor.ts"
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Logger
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class ProcessTimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const { method, path } = context.switchToHttp().getRequest()
    const now = Date.now()
    return next.handle().pipe(
      tap(() => {
        const useTime = Date.now() - now
        if (useTime > 1000) {
          Logger.warn(
            `processing \x1B[36m${method} ${path}\x1B[0m \x1B[31muse ${useTime}ms\x1B[0m`,
            ProcessTimeInterceptor.name
          )
        } else {
          Logger.log(
            `processing \x1B[36m${method} ${path}\x1B[0m \x1B[33muse ${useTime}ms\x1B[0m`,
            ProcessTimeInterceptor.name
          )
        }
      })
    )
  }
}
```

```ts title="apps/server/src/common/interceptor/response-wrap.interceptor.ts"
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

type ResponseWrap<T> = {
  status: number
  data: T
  message: string
}

@Injectable()
export class ResponseWrapInterceptor<T> implements NestInterceptor<T> {
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<ResponseWrap<T>> {
    return next.handle().pipe(
      map((data) => {
        return { status: 0, data, message: 'success' }
      })
    )
  }
}
```

```ts title="apps/server/src/common/interceptor/index.ts"
export * from './process-time.interceptor'
export * from './response-wrap.interceptor'
```

```ts title="apps/server/src/main.ts"
// ...
import { HttpExceptionFilter } from '@/common/filter'
import {
  ProcessTimeInterceptor,
  ResponseWrapInterceptor
} from '@/common/interceptor'
// ...
async function bootstrap() {
  // ...
  app.setGlobalPrefix(apiConf.prefix)
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new ProcessTimeInterceptor())
  app.useGlobalInterceptors(new ResponseWrapInterceptor())
  // ..
}
bootstrap()
```
