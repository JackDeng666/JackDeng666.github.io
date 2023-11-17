"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[2808],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(9496);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=s,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(8957),s=(n(9496),n(9613));const o={id:"login-and-auth-api",sidebar_label:"\u767b\u5f55\u4e0e\u9274\u6743\u5b9e\u73b0",title:"\u767b\u5f55\u4e0e\u9274\u6743\u5b9e\u73b0"},a=void 0,i={unversionedId:"ying-chat/login-and-auth-api",id:"ying-chat/login-and-auth-api",title:"\u767b\u5f55\u4e0e\u9274\u6743\u5b9e\u73b0",description:"\u9a8c\u8bc1\u7801\u83b7\u53d6\u63a5\u53e3",source:"@site/docs/ying-chat/10-login-api.md",sourceDirName:"ying-chat",slug:"/ying-chat/login-and-auth-api",permalink:"/docs/ying-chat/login-and-auth-api",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"login-and-auth-api",sidebar_label:"\u767b\u5f55\u4e0e\u9274\u6743\u5b9e\u73b0",title:"\u767b\u5f55\u4e0e\u9274\u6743\u5b9e\u73b0"},sidebar:"yingChat",previous:{title:"validation \u9a8c\u8bc1 \u548c api \u6587\u6863",permalink:"/docs/ying-chat/validation-and-api-doc"},next:{title:"\u524d\u7aef\u5bf9\u63a5\u767b\u5f55\u6ce8\u518c",permalink:"/docs/ying-chat/client-docking-login-register"}},p={},l=[{value:"\u9a8c\u8bc1\u7801\u83b7\u53d6\u63a5\u53e3",id:"\u9a8c\u8bc1\u7801\u83b7\u53d6\u63a5\u53e3",level:3},{value:"\u767b\u5f55\u63a5\u53e3",id:"\u767b\u5f55\u63a5\u53e3",level:3},{value:"\u4fee\u6539\u7528\u6237\u4fe1\u606f\u63a5\u53e3",id:"\u4fee\u6539\u7528\u6237\u4fe1\u606f\u63a5\u53e3",level:3},{value:"jwt \u5b9e\u73b0\u9274\u6743",id:"jwt-\u5b9e\u73b0\u9274\u6743",level:3}],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"\u9a8c\u8bc1\u7801\u83b7\u53d6\u63a5\u53e3"},"\u9a8c\u8bc1\u7801\u83b7\u53d6\u63a5\u53e3"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm i svg-captcha\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.controller.ts"',title:'"apps/server/src/modules/user/auth.controller.ts"'},"// ...\n\n@ApiTags('auth')\n@Controller('auth')\nexport class AuthController {\n  // ...\n\n  @ApiOperation({\n    summary: 'catpcha'\n  })\n  @Get('/catpcha')\n  async getCaptcha(@Query('uid') uid: string, @Res() res: Response) {\n    res.send(await this.authService.getCaptcha(uid))\n  }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/redis/contants.ts"',title:'"apps/server/src/modules/redis/contants.ts"'},"// ...\n\nexport const RedisKey = {\n  RegisterCode: 'register-code:',\n  LoginCode: 'login-code:'\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.service.ts"',title:'"apps/server/src/modules/user/auth.service.ts"'},"// ...\n\n@Injectable()\nexport class AuthService {\n  // ...\n\n  async getCaptcha(uid: string) {\n    const newCaptcha = create({ width: 100, height: 35, noise: 4 })\n    await this.redisClient.set(RedisKey.LoginCode + uid, newCaptcha.text, {\n      EX: 3 * 60\n    })\n    return newCaptcha.data\n  }\n}\n")),(0,s.kt)("h3",{id:"\u767b\u5f55\u63a5\u53e3"},"\u767b\u5f55\u63a5\u53e3"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/sr/modules/user/dto/auth.dto.ts"',title:'"apps/server/sr/modules/user/dto/auth.dto.ts"'},"// ...\n\nexport class LoginDto {\n  @IsNotEmpty()\n  loginName: string\n\n  @ApiProperty({\n    description: `password must contain digits, lowercase letters, uppercase letters, and special symbols[!@#$%^&*;',.]`\n  })\n  @Matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*;',.])/, {\n    message: `password must contain digits, lowercase letters, uppercase letters, and special symbols[!@#$%^&*;',.]`\n  })\n  @IsNotEmpty()\n  password: string\n\n  @Length(4)\n  @IsNotEmpty()\n  code: string\n\n  @IsNotEmpty()\n  uid: string\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.controller.ts"',title:'"apps/server/src/modules/user/auth.controller.ts"'},"// ...\n\n@ApiTags('auth')\n@Controller('auth')\nexport class AuthController {\n  // ...\n\n  @ApiOperation({\n    summary: 'login'\n  })\n  @Post('login')\n  login(@Body() loginDto: LoginDto) {\n    return this.authService.login(loginDto)\n  }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.service.ts"',title:'"apps/server/src/modules/user/auth.service.ts"'},"// ...\n\n@Injectable()\nexport class AuthService {\n  // ...\n\n  compareCode(codeA: string, codeB: string) {\n    return codeA.toLowerCase() === codeB.toLowerCase()\n  }\n\n  async login(loginDto: LoginDto) {\n    const code = await this.redisClient.get(RedisKey.LoginCode + loginDto.uid)\n    if (!code || !this.compareCode(code, loginDto.code)) {\n      throw new HttpException(\n        { message: 'captcha error' },\n        HttpStatus.NOT_ACCEPTABLE\n      )\n    }\n    const user = await this.userRepository.findOne({\n      where: [\n        {\n          username: loginDto.loginName\n        },\n        {\n          email: loginDto.loginName\n        }\n      ]\n    })\n    if (!user) {\n      throw new HttpException(\n        { message: 'account does not exist' },\n        HttpStatus.NOT_ACCEPTABLE\n      )\n    }\n    if (!comparePass(loginDto.password, user.password)) {\n      throw new HttpException(\n        { message: 'wrong password' },\n        HttpStatus.NOT_ACCEPTABLE\n      )\n    }\n  }\n}\n")),(0,s.kt)("h3",{id:"\u4fee\u6539\u7528\u6237\u4fe1\u606f\u63a5\u53e3"},"\u4fee\u6539\u7528\u6237\u4fe1\u606f\u63a5\u53e3"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/user.controller.ts"',title:'"apps/server/src/modules/user/user.controller.ts"'},"import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'\nimport { ApiOperation, ApiTags } from '@nestjs/swagger'\nimport { Request } from 'express'\nimport { UpdateUserDto } from './dto/user.dto'\nimport { UserService } from './user.service'\n\n@ApiTags('user')\n@Controller('user')\nexport class UserController {\n  constructor(private readonly userService: UserService) {}\n\n  @ApiOperation({\n    summary: 'getUserInfo'\n  })\n  @Get(':id')\n  getUserInfo(@Param('id') id: number) {\n    return this.userService.getUserInfo(id)\n  }\n\n  @ApiOperation({\n    summary: 'updateUserInfo'\n  })\n  @Post()\n  updateUserInfo(\n    @Req() request: Request,\n    @Body() updateUserDto: UpdateUserDto\n  ) {\n    return this.userService.updateUserInfo(request.userId, updateUserDto)\n  }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/user.service.ts"',title:'"apps/server/src/modules/user/user.service.ts"'},"import { HttpException, HttpStatus, Injectable } from '@nestjs/common'\nimport { InjectRepository } from '@nestjs/typeorm'\nimport { Repository } from 'typeorm'\nimport { UpdateUserDto } from './dto/user.dto'\nimport { User } from './entities/user.entity'\n\n@Injectable()\nexport class UserService {\n  @InjectRepository(User)\n  private readonly userRepository: Repository<User>\n\n  async getUserInfo(userId: number) {\n    const user = await this.userRepository.findOne({\n      where: { id: userId }\n    })\n\n    if (!user) {\n      throw new HttpException('user is not exists', HttpStatus.NOT_FOUND)\n    }\n\n    delete user.password\n\n    return user\n  }\n\n  async updateUserInfo(userId: number, updateUserDto: UpdateUserDto) {\n    if (updateUserDto.username) {\n      const user = await this.userRepository.findOne({\n        where: { username: updateUserDto.username }\n      })\n      if (user) {\n        throw new HttpException(\n          'username already exists',\n          HttpStatus.NOT_ACCEPTABLE\n        )\n      }\n    }\n\n    await this.userRepository.update({ id: userId }, updateUserDto)\n  }\n}\n")),(0,s.kt)("h3",{id:"jwt-\u5b9e\u73b0\u9274\u6743"},"jwt \u5b9e\u73b0\u9274\u6743"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm i @nestjs/jwt\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/user.module.ts"',title:'"apps/server/src/modules/user/user.module.ts"'},"// ...\n@Module({\n  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({})],\n  controllers: [AuthController],\n  providers: [AuthService]\n})\nexport class UserModule {}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.service.ts"',title:'"apps/server/src/modules/user/auth.service.ts"'},"// ...\n\n@Injectable()\nexport class AuthService {\n  // ...\n\n  @Inject()\n  private readonly jwtService: JwtService\n\n  @Inject(apiConfig.KEY)\n  private readonly apiConfig: ConfigType<typeof apiConfig>\n\n  // ...\n\n  async login(loginDto: LoginDto) {\n    // ...\n    if (!comparePass(loginDto.password, user.password)) {\n      throw new HttpException(\n        { message: 'wrong password' },\n        HttpStatus.NOT_ACCEPTABLE\n      )\n    }\n\n    delete user.password\n\n    const token = this.jwtService.sign(\n      {\n        id: user.id\n      },\n      {\n        secret: this.apiConfig.jwtSecret\n      }\n    )\n\n    await this.redisClient.set(token, user.id, {\n      EX: 24 * 60 * 60\n    })\n\n    await this.redisClient.sAdd('user:' + user.id, token)\n\n    return {\n      user,\n      token\n    }\n  }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/common/decorator/no-auth.decorator.ts"',title:'"apps/server/src/common/decorator/no-auth.decorator.ts"'},"import { SetMetadata } from '@nestjs/common'\n\nexport const NOT_REQUIRED_AUTH = 'notRequiredAuth'\n\nexport const NotRequiredAuth = () => SetMetadata(NOT_REQUIRED_AUTH, true)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.controller.ts"',title:'"apps/server/src/modules/user/auth.controller.ts"'},"// ...\n\n@ApiTags('auth')\n@Controller('auth')\n@NotRequiredAuth()\nexport class AuthController {\n  // ...\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/common/guard/auth.guard.ts"',title:'"apps/server/src/common/guard/auth.guard.ts"'},"import {\n  CanActivate,\n  ExecutionContext,\n  HttpException,\n  HttpStatus,\n  Inject,\n  Injectable\n} from '@nestjs/common'\nimport { Reflector } from '@nestjs/core'\nimport { Request } from 'express'\nimport { RedisClientType } from 'redis'\nimport { AuthService } from '@/modules/user/auth.service'\nimport { NOT_REQUIRED_AUTH } from '@/common/decorator'\nimport { RedisToken } from '@/modules/redis/contants'\n\ndeclare module 'express' {\n  interface Request {\n    userId: number\n  }\n}\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  constructor(\n    private readonly reflector: Reflector,\n    private readonly authService: AuthService,\n    @Inject(RedisToken)\n    private readonly redisClient: RedisClientType\n  ) {}\n\n  async canActivate(context: ExecutionContext): Promise<boolean> {\n    const handler = context.getHandler()\n    const classContext = context.getClass()\n    const isNotRequiredAuth = this.reflector.getAllAndOverride<boolean>(\n      NOT_REQUIRED_AUTH,\n      [handler, classContext]\n    )\n\n    if (isNotRequiredAuth) {\n      return true\n    }\n\n    const request = context.switchToHttp().getRequest<Request>()\n\n    try {\n      const token = request.headers['authorization'].split('Bearer ')[1]\n\n      const verifyData = this.authService.verify(token)\n      const id = Number(await this.redisClient.get(token))\n\n      if (id === verifyData.id) {\n        request.userId = id\n        return true\n      }\n\n      throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED)\n    } catch (error) {\n      throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED)\n    }\n  }\n}\n")))}d.isMDXComponent=!0}}]);