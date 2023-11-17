---
id: login-and-auth-api
sidebar_label: 登录与鉴权实现
title: 登录与鉴权实现
---

### 验证码获取接口

```shell
pnpm i svg-captcha
```

```ts title="apps/server/src/modules/user/auth.controller.ts"
// ...

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  // ...

  @ApiOperation({
    summary: 'catpcha'
  })
  @Get('/catpcha')
  async getCaptcha(@Query('uid') uid: string, @Res() res: Response) {
    res.send(await this.authService.getCaptcha(uid))
  }
}
```

```ts title="apps/server/src/modules/redis/contants.ts"
// ...

export const RedisKey = {
  RegisterCode: 'register-code:',
  LoginCode: 'login-code:'
}
```

```ts title="apps/server/src/modules/user/auth.service.ts"
// ...

@Injectable()
export class AuthService {
  // ...

  async getCaptcha(uid: string) {
    const newCaptcha = create({ width: 100, height: 35, noise: 4 })
    await this.redisClient.set(RedisKey.LoginCode + uid, newCaptcha.text, {
      EX: 3 * 60
    })
    return newCaptcha.data
  }
}
```

### 登录接口

```ts title="apps/server/sr/modules/user/dto/auth.dto.ts"
// ...

export class LoginDto {
  @IsNotEmpty()
  loginName: string

  @ApiProperty({
    description: `password must contain digits, lowercase letters, uppercase letters, and special symbols[!@#$%^&*;',.]`
  })
  @Matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*;',.])/, {
    message: `password must contain digits, lowercase letters, uppercase letters, and special symbols[!@#$%^&*;',.]`
  })
  @IsNotEmpty()
  password: string

  @Length(4)
  @IsNotEmpty()
  code: string

  @IsNotEmpty()
  uid: string
}
```

```ts title="apps/server/src/modules/user/auth.controller.ts"
// ...

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  // ...

  @ApiOperation({
    summary: 'login'
  })
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }
}
```

```ts title="apps/server/src/modules/user/auth.service.ts"
// ...

@Injectable()
export class AuthService {
  // ...

  compareCode(codeA: string, codeB: string) {
    return codeA.toLowerCase() === codeB.toLowerCase()
  }

  async login(loginDto: LoginDto) {
    const code = await this.redisClient.get(RedisKey.LoginCode + loginDto.uid)
    if (!code || !this.compareCode(code, loginDto.code)) {
      throw new HttpException(
        { message: 'captcha error' },
        HttpStatus.NOT_ACCEPTABLE
      )
    }
    const user = await this.userRepository.findOne({
      where: [
        {
          username: loginDto.loginName
        },
        {
          email: loginDto.loginName
        }
      ]
    })
    if (!user) {
      throw new HttpException(
        { message: 'account does not exist' },
        HttpStatus.NOT_ACCEPTABLE
      )
    }
    if (!comparePass(loginDto.password, user.password)) {
      throw new HttpException(
        { message: 'wrong password' },
        HttpStatus.NOT_ACCEPTABLE
      )
    }
  }
}
```

### 修改用户信息接口

```ts title="apps/server/src/modules/user/user.controller.ts"
import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Request } from 'express'
import { UpdateUserDto } from './dto/user.dto'
import { UserService } from './user.service'

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'getUserInfo'
  })
  @Get(':id')
  getUserInfo(@Param('id') id: number) {
    return this.userService.getUserInfo(id)
  }

  @ApiOperation({
    summary: 'updateUserInfo'
  })
  @Post()
  updateUserInfo(
    @Req() request: Request,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.updateUserInfo(request.userId, updateUserDto)
  }
}
```

```ts title="apps/server/src/modules/user/user.service.ts"
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateUserDto } from './dto/user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>

  async getUserInfo(userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId }
    })

    if (!user) {
      throw new HttpException('user is not exists', HttpStatus.NOT_FOUND)
    }

    delete user.password

    return user
  }

  async updateUserInfo(userId: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.username) {
      const user = await this.userRepository.findOne({
        where: { username: updateUserDto.username }
      })
      if (user) {
        throw new HttpException(
          'username already exists',
          HttpStatus.NOT_ACCEPTABLE
        )
      }
    }

    await this.userRepository.update({ id: userId }, updateUserDto)
  }
}
```

### jwt 实现鉴权

```shell
pnpm i @nestjs/jwt
```

```ts title="apps/server/src/modules/user/user.module.ts"
// ...
@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService]
})
export class UserModule {}
```

```ts title="apps/server/src/modules/user/auth.service.ts"
// ...

@Injectable()
export class AuthService {
  // ...

  @Inject()
  private readonly jwtService: JwtService

  @Inject(apiConfig.KEY)
  private readonly apiConfig: ConfigType<typeof apiConfig>

  // ...

  async login(loginDto: LoginDto) {
    // ...
    if (!comparePass(loginDto.password, user.password)) {
      throw new HttpException(
        { message: 'wrong password' },
        HttpStatus.NOT_ACCEPTABLE
      )
    }

    delete user.password

    const token = this.jwtService.sign(
      {
        id: user.id
      },
      {
        secret: this.apiConfig.jwtSecret
      }
    )

    await this.redisClient.set(token, user.id, {
      EX: 24 * 60 * 60
    })

    await this.redisClient.sAdd('user:' + user.id, token)

    return {
      user,
      token
    }
  }
}
```

```ts title="apps/server/src/common/decorator/no-auth.decorator.ts"
import { SetMetadata } from '@nestjs/common'

export const NOT_REQUIRED_AUTH = 'notRequiredAuth'

export const NotRequiredAuth = () => SetMetadata(NOT_REQUIRED_AUTH, true)
```

```ts title="apps/server/src/modules/user/auth.controller.ts"
// ...

@ApiTags('auth')
@Controller('auth')
@NotRequiredAuth()
export class AuthController {
  // ...
}
```

```ts title="apps/server/src/common/guard/auth.guard.ts"
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  Injectable
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Request } from 'express'
import { RedisClientType } from 'redis'
import { AuthService } from '@/modules/user/auth.service'
import { NOT_REQUIRED_AUTH } from '@/common/decorator'
import { RedisToken } from '@/modules/redis/contants'

declare module 'express' {
  interface Request {
    userId: number
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly authService: AuthService,
    @Inject(RedisToken)
    private readonly redisClient: RedisClientType
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const handler = context.getHandler()
    const classContext = context.getClass()
    const isNotRequiredAuth = this.reflector.getAllAndOverride<boolean>(
      NOT_REQUIRED_AUTH,
      [handler, classContext]
    )

    if (isNotRequiredAuth) {
      return true
    }

    const request = context.switchToHttp().getRequest<Request>()

    try {
      const token = request.headers['authorization'].split('Bearer ')[1]

      const verifyData = this.authService.verify(token)
      const id = Number(await this.redisClient.get(token))

      if (id === verifyData.id) {
        request.userId = id
        return true
      }

      throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED)
    } catch (error) {
      throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED)
    }
  }
}
```
