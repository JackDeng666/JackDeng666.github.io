"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[1746],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(9496);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=s,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(8957),s=(n(9496),n(9613));const a={id:"login-and-auth-api",sidebar_label:"\u767b\u5f55\u4e0e\u9274\u6743\u5b9e\u73b0",title:"\u767b\u5f55\u4e0e\u9274\u6743\u5b9e\u73b0"},o=void 0,i={unversionedId:"ying-chat/login-and-auth-api",id:"ying-chat/login-and-auth-api",title:"\u767b\u5f55\u4e0e\u9274\u6743\u5b9e\u73b0",description:"\u672c\u8282\u6211\u4eec\u5c06\u6765\u5b9e\u73b0\u767b\u5f55\u4e0e\u9274\u6743\u7684\u63a5\u53e3\u903b\u8f91\u3002",source:"@site/docs/ying-chat/10-login-and-auth-api.md",sourceDirName:"ying-chat",slug:"/ying-chat/login-and-auth-api",permalink:"/docs/ying-chat/login-and-auth-api",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"login-and-auth-api",sidebar_label:"\u767b\u5f55\u4e0e\u9274\u6743\u5b9e\u73b0",title:"\u767b\u5f55\u4e0e\u9274\u6743\u5b9e\u73b0"},sidebar:"yingChat",previous:{title:"\u5bf9\u63a5\u6ce8\u518c\u63a5\u53e3",permalink:"/docs/ying-chat/docking-register-api"},next:{title:"\u524d\u7aef\u5bf9\u63a5\u767b\u5f55\u63a5\u53e3",permalink:"/docs/ying-chat/docking-login-api"}},l={},p=[{value:"\u767b\u5f55\u63a5\u53e3\u5b9e\u73b0",id:"\u767b\u5f55\u63a5\u53e3\u5b9e\u73b0",level:2},{value:"\u6d41\u7a0b\u56fe",id:"\u6d41\u7a0b\u56fe",level:3},{value:"\u9a8c\u8bc1\u7801\u83b7\u53d6\u63a5\u53e3",id:"\u9a8c\u8bc1\u7801\u83b7\u53d6\u63a5\u53e3",level:3},{value:"\u767b\u5f55\u903b\u8f91\u5b9e\u73b0",id:"\u767b\u5f55\u903b\u8f91\u5b9e\u73b0",level:3},{value:"jwt \u5b9e\u73b0\u9274\u6743",id:"jwt-\u5b9e\u73b0\u9274\u6743",level:2},{value:"\u767b\u5f55\u8fd4\u56de token",id:"\u767b\u5f55\u8fd4\u56de-token",level:3},{value:"\u7981\u6b62\u7528\u6237\u5b9e\u4f53\u8fd4\u56de\u5bc6\u7801",id:"\u7981\u6b62\u7528\u6237\u5b9e\u4f53\u8fd4\u56de\u5bc6\u7801",level:3},{value:"\u6388\u6743\u5b88\u536b\u6dfb\u52a0",id:"\u6388\u6743\u5b88\u536b\u6dfb\u52a0",level:3},{value:"\u7528\u6237\u4fe1\u606f\u63a5\u53e3",id:"\u7528\u6237\u4fe1\u606f\u63a5\u53e3",level:2},{value:"\u9000\u51fa\u767b\u5f55\u63a5\u53e3",id:"\u9000\u51fa\u767b\u5f55\u63a5\u53e3",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u672c\u8282\u6211\u4eec\u5c06\u6765\u5b9e\u73b0\u767b\u5f55\u4e0e\u9274\u6743\u7684\u63a5\u53e3\u903b\u8f91\u3002"),(0,s.kt)("h2",{id:"\u767b\u5f55\u63a5\u53e3\u5b9e\u73b0"},"\u767b\u5f55\u63a5\u53e3\u5b9e\u73b0"),(0,s.kt)("h3",{id:"\u6d41\u7a0b\u56fe"},"\u6d41\u7a0b\u56fe"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(6845).Z,width:"857",height:"710"})),(0,s.kt)("h3",{id:"\u9a8c\u8bc1\u7801\u83b7\u53d6\u63a5\u53e3"},"\u9a8c\u8bc1\u7801\u83b7\u53d6\u63a5\u53e3"),(0,s.kt)("p",null,"\u6839\u636e\u6d41\u7a0b\u56fe\u6211\u4eec\u5148\u8981\u5b9e\u73b0\u4e00\u4e2a\u83b7\u53d6\u9a8c\u8bc1\u7801\u63a5\u53e3\u3002"),(0,s.kt)("p",null,"\u5728\u670d\u52a1\u7aef\u6dfb\u52a0 ",(0,s.kt)("inlineCode",{parentName:"p"},"svg-captcha")," \u4f9d\u8d56\uff0c\u63a5\u4e0b\u6765\u5c06\u7528\u8fd9\u4e2a\u5e93\u6765\u751f\u6210\u9a8c\u8bc1\u7801\u7684 SVG \u56fe\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="apps/server"',title:'"apps/server"'},"pnpm i svg-captcha\n")),(0,s.kt)("p",null,"\u5148\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"redis")," \u6a21\u5757\u52a0\u4e0a\u767b\u5f55\u7801\u7684\u5e38\u91cf"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/redis/constant.ts"',title:'"apps/server/src/modules/redis/constant.ts"'},"// ...\n\nexport const RedisKey = {\n  RegisterCode: 'register-code:',\n  LoginCode: 'login-code:'\n}\n")),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"AuthService")," \u5b9e\u73b0\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"getCaptcha")," \u51fd\u6570\uff0c\u6b64\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"uid")," \u4f5c\u4e3a key \u5b58\u8fdb redis\uff0c\u8fd9\u4e2a uid \u5c06\u662f\u5ba2\u6237\u7aef\u4f20\u8fc7\u6765\u7684\u552f\u4e00\u7801\uff0c\u6700\u540e\u8fd4\u56de\u4e00\u4e2a svg \u7684\u5b57\u7b26\u4e32\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.service.ts"',title:'"apps/server/src/modules/user/auth.service.ts"'},"// ...\nimport { create } from 'svg-captcha'\n\n@Injectable()\nexport class AuthService {\n  // ...\n\n  async getCaptcha(uid: string) {\n    const newCaptcha = create({ width: 100, height: 35, noise: 4 })\n    await this.redisClient.set(RedisKey.LoginCode + uid, newCaptcha.text, {\n      EX: 3 * 60\n    })\n    return newCaptcha.data\n  }\n}\n")),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"AuthController")," \u91cc\u52a0\u4e0a\u9a8c\u8bc1\u7801\u63a5\u53e3\uff0c\u8c03\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"getCaptcha"),"\uff0c \u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"Response")," \u628a svg \u5b57\u7b26\u76f4\u63a5\u4ee5\u6587\u4ef6\u6d41\u7684\u65b9\u5f0f\u8fd4\u56de\u7ed9\u524d\u7aef\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.controller.ts"',title:'"apps/server/src/modules/user/auth.controller.ts"'},"// ...\nimport { Body, Controller, Get, Post, Query, Res } from '@nestjs/common'\nimport { Response } from 'express'\n\n@ApiTags('auth')\n@Controller('auth')\nexport class AuthController {\n  // ...\n\n  @ApiOperation({\n    summary: 'catpcha'\n  })\n  @Get('/catpcha')\n  async getCaptcha(@Query('uid') uid: string, @Res() res: Response) {\n    res.send(await this.authService.getCaptcha(uid))\n  }\n}\n")),(0,s.kt)("h3",{id:"\u767b\u5f55\u903b\u8f91\u5b9e\u73b0"},"\u767b\u5f55\u903b\u8f91\u5b9e\u73b0"),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"shared")," \u5305\u91cc\u6dfb\u52a0\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"LoginDto"),"\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="package/shared/src/dto/auth.dto.ts"',title:'"package/shared/src/dto/auth.dto.ts"'},"// ...\n\nexport class LoginDto {\n  @IsNotEmpty()\n  loginName: string\n\n  @Matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*;',.])/, {\n    message: `password must contain digits, lowercase letters, uppercase letters, and special symbols[!@#$%^&*;',.]`\n  })\n  @IsNotEmpty()\n  password: string\n\n  @Length(4)\n  @IsNotEmpty()\n  code: string\n\n  @IsNotEmpty()\n  uid: string\n}\n")),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"AuthService")," \u91cc\u9762\u6dfb\u52a0 ",(0,s.kt)("inlineCode",{parentName:"p"},"login")," \u51fd\u6570\uff0c\u5b8c\u6210\u767b\u5f55\u7684\u68c0\u9a8c\u903b\u8f91\uff0c\u5269\u4e0b\u7684 token \u751f\u6210\u540e\u9762\u518d\u5199\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.service.ts"',title:'"apps/server/src/modules/user/auth.service.ts"'},"// ...\nimport { LoginDto, RegisterDto } from '@ying-chat/shared'\nimport { comparePass, generatePass } from '@/lib/utils'\n\n@Injectable()\nexport class AuthService {\n  // ...\n\n  compareCode(codeA: string, codeB: string) {\n    return codeA.toLowerCase() === codeB.toLowerCase()\n  }\n\n  async login(loginDto: LoginDto) {\n    const code = await this.redisClient.get(RedisKey.LoginCode + loginDto.uid)\n    if (!code || !this.compareCode(code, loginDto.code)) {\n      throw new HttpException(\n        { message: 'captcha error' },\n        HttpStatus.NOT_ACCEPTABLE\n      )\n    }\n    const user = await this.userRepository.findOne({\n      where: [\n        {\n          username: loginDto.loginName\n        },\n        {\n          email: loginDto.loginName\n        }\n      ]\n    })\n    if (!user) {\n      throw new HttpException(\n        { message: 'account does not exist' },\n        HttpStatus.NOT_ACCEPTABLE\n      )\n    }\n    if (!comparePass(loginDto.password, user.password)) {\n      throw new HttpException(\n        { message: 'wrong password' },\n        HttpStatus.NOT_ACCEPTABLE\n      )\n    }\n  }\n}\n")),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"AuthController")," \u91cc\u52a0\u4e0a\u767b\u5f55\u63a5\u53e3\uff0c\u76f4\u63a5\u8c03\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"login"),"\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.controller.ts"',title:'"apps/server/src/modules/user/auth.controller.ts"'},"// ...\nimport { LoginDto, RegisterDto } from '@ying-chat/shared'\n\n@ApiTags('auth')\n@Controller('auth')\nexport class AuthController {\n  // ...\n\n  @ApiOperation({\n    summary: 'login'\n  })\n  @Post('login')\n  login(@Body() loginDto: LoginDto) {\n    return this.authService.login(loginDto)\n  }\n}\n")),(0,s.kt)("p",null,"\u4f46\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"LoginDto")," \u8fd8\u662f\u5f97\u6253\u5305\u4e00\u4e0b\u624d\u80fd\u5f15\u7528\uff0c\u6bcf\u6b21\u6dfb\u52a0\u90fd\u8981\u6253\u5305\u592a\u9ebb\u70e6\u4e86\uff0c\u5f80",(0,s.kt)("inlineCode",{parentName:"p"},"shared")," \u5305\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"package.json"),"\u52a0\u4e0a\u4e00\u4e2a dev \u547d\u4ee4\uff0c\u8fd9\u4e2a\u547d\u4ee4\u4ee5\u76d1\u542c\u5305\u5185\u6587\u4ef6\u53d8\u5316\u7684\u5f62\u5f0f\u6253\u5305\u7f16\u8bd1 ts \u6587\u4ef6\uff0c\u542f\u52a8\u8fd9\u4e2a\u547d\u4ee4\uff0c\u5c31\u4e0d\u7528\u6bcf\u6b21\u90fd\u91cd\u65b0\u6253\u5305\u4e86\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="packages/shared/package.json"',title:'"packages/shared/package.json"'},'{\n  // ...\n  "scripts": {\n    "dev": "tsc -b -w tsconfig.json --preserveWatchOutput | tsc -b -w tsconfig.esm.json --preserveWatchOutput"\n    // ...\n  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="packages/shared/tsconfig.esm.json"',title:'"packages/shared/tsconfig.esm.json"'},'{\n  // ...\n  "exclude": ["dist"]\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="packages/shared/tsconfig.json"',title:'"packages/shared/tsconfig.json"'},'{\n  // ...\n  "exclude": ["dist"]\n}\n')),(0,s.kt)("p",null,"\u5728\u8fd9\u4e24\u4e2a ts \u914d\u7f6e\u6587\u4ef6\u52a0\u4e0a\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},'"exclude": ["dist"]')," \u5ffd\u7565\u6389 dist \u7684\u53d8\u5316\u3002"),(0,s.kt)("h2",{id:"jwt-\u5b9e\u73b0\u9274\u6743"},"jwt \u5b9e\u73b0\u9274\u6743"),(0,s.kt)("h3",{id:"\u767b\u5f55\u8fd4\u56de-token"},"\u767b\u5f55\u8fd4\u56de token"),(0,s.kt)("p",null,"\u767b\u5f55\u5b8c\u6210\u540e\uff0c\u8fd8\u9700\u8981\u8fd4\u56de\u4e00\u4e2a token \u7ed9\u524d\u7aef\u53bb\u8bf7\u6c42\u5176\u4ed6\u53d7\u4fdd\u62a4\u7684\u63a5\u53e3\uff0c\u5230\u65f6\u4e0d\u9700\u8981 token \u68c0\u9a8c\u7684\u63a5\u53e3\u5c31\u53ea\u6709\u767b\u5f55\u548c\u6ce8\u518c\u76f8\u5173\u7684\u8fd9\u51e0\u4e2a\u3002"),(0,s.kt)("p",null,"\u5148\u5b89\u88c5 ",(0,s.kt)("inlineCode",{parentName:"p"},"@nestjs/jwt")," \u8fd9\u4e2a\u4f9d\u8d56\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="apps/server"',title:'"apps/server"'},"pnpm i @nestjs/jwt\n")),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"UserModule")," \u91cc\u5f15\u5165 ",(0,s.kt)("inlineCode",{parentName:"p"},"JwtModule"),"\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/user.module.ts"',title:'"apps/server/src/modules/user/user.module.ts"'},"// ...\nimport { JwtModule } from '@nestjs/jwt'\n\n@Module({\n  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({})]\n  // ...\n})\nexport class UserModule {}\n")),(0,s.kt)("p",null,"\u5728\u914d\u7f6e\u6587\u4ef6\u7684 api \u91cc\u518d\u52a0\u4e0a\u4e00\u4e2a jwt \u7684\u5bc6\u94a5\u914d\u7f6e\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="apps/server/.env"',title:'"apps/server/.env"'},"# api\n// ...\nSERVER_JWT_SECRET=4h4gdsf2ds1f2\n//...\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/config/api.config.ts"',title:'"apps/server/src/config/api.config.ts"'},"import { registerAs } from '@nestjs/config'\n\nexport const apiConfig = registerAs('apiConfig', () => {\n  return {\n    port: process.env.SERVER_PORT || 3000,\n    jwtSecret: process.env.SERVER_JWT_SECRET || '' // +\n  }\n})\n")),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"AuthService")," \u91cc\u5b8c\u5584 ",(0,s.kt)("inlineCode",{parentName:"p"},"login")," \u51fd\u6570\uff0c\u6821\u9a8c\u5168\u90e8\u901a\u8fc7\u540e\uff0c\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"jwtService"),"\u7b7e\u53d1\u4e00\u4e2a token\uff0c\u7136\u540e\u5b58\u8fdb redis \u91cc\u8bbe\u7f6e 24 \u5c0f\u65f6\u540e\u8fc7\u671f\uff0c\u5220\u9664 LoginCode\uff0c\u6700\u540e\u8fd4\u56de\u7528\u6237\u4fe1\u606f\u548c token\uff0c\u7136\u540e\u518d\u6dfb\u52a0\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"verify")," \u51fd\u6570\u53bb\u9a8c\u8bc1\u4f20\u9012\u7684 token \u662f\u5426\u6b63\u786e\uff0c\u8fd9\u4e2a\u51fd\u6570\u540e\u9762\u6dfb\u52a0\u8def\u7531\u5b88\u536b\u65f6\u518d\u4f7f\u7528\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.service.ts"',title:'"apps/server/src/modules/user/auth.service.ts"'},"// ...\nimport { JwtService } from '@nestjs/jwt'\nimport { ConfigType } from '@nestjs/config'\nimport { apiConfig } from '@/config'\n\n@Injectable()\nexport class AuthService {\n  // ...\n\n  @Inject()\n  private readonly jwtService: JwtService\n\n  @Inject(apiConfig.KEY)\n  private readonly apiConfig: ConfigType<typeof apiConfig>\n\n  // ...\n\n  async login(loginDto: LoginDto) {\n    // ...\n\n    const token = this.jwtService.sign(\n      {\n        id: user.id\n      },\n      {\n        secret: this.apiConfig.jwtSecret\n      }\n    )\n\n    await this.redisClient.set(token, user.id, {\n      EX: 24 * 60 * 60\n    })\n\n    await this.redisClient.del(RedisKey.LoginCode + loginDto.uid)\n\n    return {\n      user,\n      token\n    }\n  }\n\n  verify(token: string) {\n    return this.jwtService.verify(token, { secret: this.apiConfig.jwtSecret })\n  }\n}\n")),(0,s.kt)("p",null,"\u8c03\u8bd5\u4e00\u4e0b\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(7979).Z,width:"1290",height:"1152"})),(0,s.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0\u6700\u540e\u8fd4\u56de\u7684\u7528\u6237\u4fe1\u606f\u91cc\u9762\u628a\u52a0\u5bc6\u540e\u7684\u5bc6\u7801\u90fd\u8fd4\u56de\u51fa\u6765\u4e86\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5148\u628a\u8fd9\u4e2a\u89e3\u51b3\u4e00\u4e0b\u3002"),(0,s.kt)("h3",{id:"\u7981\u6b62\u7528\u6237\u5b9e\u4f53\u8fd4\u56de\u5bc6\u7801"},"\u7981\u6b62\u7528\u6237\u5b9e\u4f53\u8fd4\u56de\u5bc6\u7801"),(0,s.kt)("p",null,"\u4fee\u6539\u4e00\u4e0b ",(0,s.kt)("inlineCode",{parentName:"p"},"UserEntity"),"\uff0c\u5728\u5bc6\u7801\u4e0a\u9762\u6dfb\u52a0\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"class-transformer")," \u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"Exclude")," \u88c5\u9970\u5668\uff0c\u6700\u540e\u6dfb\u52a0\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"toJSON")," \u51fd\u6570\u5373\u53ef\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/db/entities/user.entity.ts"',title:'"apps/server/src/modules/db/entities/user.entity.ts"'},"// ...\nimport { Exclude, instanceToPlain } from 'class-transformer'\n\n@Entity({ name: 'user' })\nexport class UserEntity extends BaseEntity {\n  @Column({\n    length: 32,\n    unique: true\n  })\n  username: string\n\n  @Column({\n    length: 50,\n    unique: true\n  })\n  email: string\n\n  @Column()\n  @Exclude() // ++\n  password: string\n\n  @Column({\n    length: 32,\n    nullable: true\n  })\n  nickname: string\n\n  // ++\n  toJSON() {\n    return instanceToPlain(this)\n  }\n}\n")),(0,s.kt)("p",null,"\u518d\u767b\u5f55\u4e00\u4e0b\u770b\u770b\uff0c\u53d1\u73b0\u5bc6\u7801\u5df2\u7ecf\u6ca1\u4e86\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(9242).Z,width:"627",height:"431"})),(0,s.kt)("h3",{id:"\u6388\u6743\u5b88\u536b\u6dfb\u52a0"},"\u6388\u6743\u5b88\u536b\u6dfb\u52a0"),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"common")," \u76ee\u5f55\uff0c \u65b0\u5efa ",(0,s.kt)("inlineCode",{parentName:"p"},"decorator")," \u6587\u4ef6\u5939\uff0c\u518d\u6dfb\u52a0\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"no-auth.decorator.ts")," \u6587\u4ef6\uff0c\u6211\u4eec\u5728\u91cc\u9762\u6dfb\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"NotRequiredAuth")," \u88c5\u9970\u5668\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/common/decorator/no-auth.decorator.ts"',title:'"apps/server/src/common/decorator/no-auth.decorator.ts"'},"import { SetMetadata } from '@nestjs/common'\n\nexport const NOT_REQUIRED_AUTH = 'notRequiredAuth'\n\nexport const NotRequiredAuth = () => SetMetadata(NOT_REQUIRED_AUTH, true)\n")),(0,s.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a",(0,s.kt)("inlineCode",{parentName:"p"},"index.ts"),"\u5bfc\u51fa\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps\\server\\src\\common\\decorator\\index.ts"',title:'"apps\\server\\src\\common\\decorator\\index.ts"'},"export * from './no-auth.decorator'\n")),(0,s.kt)("p",null,"\u628a ",(0,s.kt)("inlineCode",{parentName:"p"},"NotRequiredAuth")," \u88c5\u9970\u5668\u6dfb\u52a0\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"AuthController")," \u5bf9\u5e94\u7684\u51fd\u6570\u4e0a\uff0c\u8fd9\u6837\u8868\u660e\u8fd9\u4e9b\u63a5\u53e3\u90fd\u662f\u4e0d\u9700\u8981\u6388\u6743\u9a8c\u8bc1\u7684\uff0c\u7136\u540e\u5176\u4ed6\u6240\u6709\u4e0d\u52a0",(0,s.kt)("inlineCode",{parentName:"p"},"NotRequiredAuth")," \u7684\u90fd\u662f\u9700\u8981\u9a8c\u8bc1\u7684\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.controller.ts"',title:'"apps/server/src/modules/user/auth.controller.ts"'},"// ...\nimport { NotRequiredAuth } from '@/common/decorator'\n\n// ...\nexport class AuthController {\n  // ...\n  @NotRequiredAuth()\n  register() {}\n\n  // ...\n  @NotRequiredAuth()\n  sendCode() {}\n\n  // ...\n  @NotRequiredAuth()\n  async getCaptcha() {}\n\n  // ...\n  @NotRequiredAuth()\n  login() {}\n}\n")),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"common")," \u76ee\u5f55\uff0c \u65b0\u5efa ",(0,s.kt)("inlineCode",{parentName:"p"},"guard")," \u6587\u4ef6\u5939\uff0c\u518d\u6dfb\u52a0\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"auth.guard.ts")," \u6587\u4ef6\uff0c\u6211\u4eec\u5728\u91cc\u9762\u5b9e\u73b0\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"AuthGuard")," \u5b88\u536b\u6765\u5bf9\u7528\u6237\u7684 token \u8fdb\u884c\u6821\u9a8c\u3002"),(0,s.kt)("p",null,"\u4e3b\u8981\u903b\u8f91\u4e3a\uff0c\u5982\u679c\u88ab",(0,s.kt)("inlineCode",{parentName:"p"},"NotRequiredAuth"),"\u6807\u8bb0\u8fc7\uff0c\u8bf4\u660e\u63a5\u53e3\u4e0d\u9700\u8981\u68c0\u9a8c\uff0c\u76f4\u63a5\u653e\u884c\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u5219\u4ece redis \u770b\u770b\u7528\u6237\u7684 token \u662f\u5426\u6b63\u786e\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/common/guard/auth.guard.ts"',title:'"apps/server/src/common/guard/auth.guard.ts"'},"import {\n  CanActivate,\n  ExecutionContext,\n  HttpException,\n  HttpStatus,\n  Inject,\n  Injectable\n} from '@nestjs/common'\nimport { Reflector } from '@nestjs/core'\nimport { Request } from 'express'\nimport { RedisClientType } from 'redis'\nimport { AuthService } from '@/modules/user/auth.service'\nimport { NOT_REQUIRED_AUTH } from '@/common/decorator'\nimport { RedisToken } from '@/modules/redis/constant'\n\ndeclare module 'express' {\n  interface Request {\n    userId: number\n  }\n}\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  constructor(\n    private readonly reflector: Reflector,\n    private readonly authService: AuthService,\n    @Inject(RedisToken)\n    private readonly redisClient: RedisClientType\n  ) {}\n\n  async canActivate(context: ExecutionContext): Promise<boolean> {\n    const handler = context.getHandler()\n    const classContext = context.getClass()\n    const isNotRequiredAuth = this.reflector.getAllAndOverride<boolean>(\n      NOT_REQUIRED_AUTH,\n      [handler, classContext]\n    )\n\n    if (isNotRequiredAuth) {\n      return true\n    }\n\n    const request = context.switchToHttp().getRequest<Request>()\n\n    try {\n      const token = request.headers['authorization'].split('Bearer ')[1]\n\n      const verifyData = this.authService.verify(token)\n      const id = Number(await this.redisClient.get(token))\n\n      if (id === verifyData.id) {\n        request.userId = id\n        return true\n      }\n\n      throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED)\n    } catch (error) {\n      throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED)\n    }\n  }\n}\n")),(0,s.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"index.ts")," \u5bfc\u51fa\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/common/guard/index.ts"',title:'"apps/server/src/common/guard/index.ts"'},"export * from './auth.guard'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/app.module.ts"',title:'"apps/server/src/app.module.ts"'},"// ...\nimport { APP_GUARD } from '@nestjs/core'\nimport { AuthGuard } from '@/common/guard'\n\n@Module({\n  // ...\n  providers: [\n    {\n      provide: APP_GUARD,\n      useClass: AuthGuard\n    }\n  ]\n})\nexport class AppModule {}\n")),(0,s.kt)("p",null,"\u6b64\u65f6\u4fdd\u5b58\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a",(0,s.kt)("inlineCode",{parentName:"p"},"AuthGuard"),"\u4f7f\u7528\u5230\u4e86",(0,s.kt)("inlineCode",{parentName:"p"},"UserModule"),"\u91cc\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"AuthService"),"\uff0c\u6240\u4ee5\u8fd8\u8981\u628a",(0,s.kt)("inlineCode",{parentName:"p"},"AuthService"),"\u5bfc\u51fa\u4e00\u4e0b\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/user.module.ts"',title:'"apps/server/src/modules/user/user.module.ts"'},"// ...\n\n@Module({\n  // ...\n  exports: [AuthService]\n})\nexport class UserModule {}\n")),(0,s.kt)("h2",{id:"\u7528\u6237\u4fe1\u606f\u63a5\u53e3"},"\u7528\u6237\u4fe1\u606f\u63a5\u53e3"),(0,s.kt)("p",null,"\u63a5\u4e0b\u6765\u6dfb\u52a0\u4e00\u4e0b\u67e5\u770b\u7528\u6237\u4fe1\u606f\u7684\u63a5\u53e3\u53bb\u8c03\u8bd5\u4e00\u4e0b\u6388\u6743\u68c0\u9a8c\u662f\u5426\u751f\u6548\u3002"),(0,s.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a",(0,s.kt)("inlineCode",{parentName:"p"},"user.service.ts"),"\uff0c\u5b9e\u73b0",(0,s.kt)("inlineCode",{parentName:"p"},"getUserInfo"),"\u51fd\u6570\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/user.service.ts"',title:'"apps/server/src/modules/user/user.service.ts"'},"import { HttpException, HttpStatus, Injectable } from '@nestjs/common'\nimport { InjectRepository } from '@nestjs/typeorm'\nimport { Repository } from 'typeorm'\nimport { UserEntity } from '@/modules/db/entities'\n\n@Injectable()\nexport class UserService {\n  @InjectRepository(UserEntity)\n  private readonly userRepository: Repository<UserEntity>\n\n  async getUserInfo(userId: number) {\n    const user = await this.userRepository.findOne({\n      where: { id: userId }\n    })\n\n    if (!user) {\n      throw new HttpException('user is not exists', HttpStatus.NOT_FOUND)\n    }\n\n    return user\n  }\n}\n")),(0,s.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"user.controller.ts"),"\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/user.controller.ts"',title:'"apps/server/src/modules/user/user.controller.ts"'},"import { Controller, Get, Param } from '@nestjs/common'\nimport { ApiOperation, ApiTags } from '@nestjs/swagger'\nimport { UserService } from './user.service'\n\n@ApiTags('user')\n@Controller('user')\nexport class UserController {\n  constructor(private readonly userService: UserService) {}\n\n  @ApiOperation({\n    summary: 'getUserInfo'\n  })\n  @Get(':id')\n  getUserInfo(@Param('id') id: number) {\n    return this.userService.getUserInfo(id)\n  }\n}\n")),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"UserModule")," \u91cc\u6dfb\u52a0 ",(0,s.kt)("inlineCode",{parentName:"p"},"UserController")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"UserService"),"\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/user.module.ts"',title:'"apps/server/src/modules/user/user.module.ts"'},"// ...\nimport { UserController } from './user.controller'\nimport { UserService } from './user.service'\n\n@Module({\n  // ...\n  controllers: [AuthController, UserController],\n  providers: [AuthService, UserService]\n})\nexport class UserModule {}\n")),(0,s.kt)("p",null,"\u8c03\u8bd5\u4e00\u4e0b\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(6501).Z,width:"1290",height:"1152"})),(0,s.kt)("p",null,"\u8c03\u8bd5\u5b8c\u540e\u628a",(0,s.kt)("inlineCode",{parentName:"p"},"getUserInfo"),"\u6539\u6210\u76f4\u63a5\u8bfb\u53d6\u7528\u6237\u5728\u7ecf\u8fc7\u8def\u7531\u5b88\u536b\u65f6\u6dfb\u52a0\u7684 userId\uff0c\u4e0d\u8981\u8ba9\u5176\u6839\u636e id \u76f4\u63a5\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/user.controller.ts"',title:'"apps/server/src/modules/user/user.controller.ts"'},"import { Controller, Get, Req, Param } from '@nestjs/common'\nimport { ApiOperation, ApiTags } from '@nestjs/swagger'\nimport { Request } from 'express'\nimport { UserService } from './user.service'\n\n@ApiTags('user')\n@Controller('user')\nexport class UserController {\n  constructor(private readonly userService: UserService) {}\n\n  @ApiOperation({\n    summary: 'getUserInfo'\n  })\n  @Get()\n  getUserInfo(@Req() request: Request) {\n    return this.userService.getUserInfo(request.userId)\n  }\n}\n")),(0,s.kt)("h2",{id:"\u9000\u51fa\u767b\u5f55\u63a5\u53e3"},"\u9000\u51fa\u767b\u5f55\u63a5\u53e3"),(0,s.kt)("p",null,"\u5728\u7ed3\u675f\u4e4b\u524d\u518d\u987a\u4fbf\u6dfb\u52a0\u4e00\u4e2a\u9000\u51fa\u767b\u5f55\u63a5\u53e3\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.service.ts"',title:'"apps/server/src/modules/user/auth.service.ts"'},"// ...\n\n@Injectable()\nexport class AuthService {\n  // ...\n\n  async logout(token: string) {\n    await this.redisClient.del(token)\n  }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/server/src/modules/user/auth.controller.ts"',title:'"apps/server/src/modules/user/auth.controller.ts"'},"import {\n  // ...\n  Headers\n} from '@nestjs/common'\n\n@ApiTags('auth')\n@Controller('auth')\nexport class AuthController {\n  // ...\n\n  @ApiOperation({\n    summary: 'logout'\n  })\n  @Get('logout')\n  logout(@Headers('authorization') authorization: string) {\n    return this.authService.logout(authorization.split('Bearer ')[1])\n  }\n}\n")),(0,s.kt)("p",null,"\u90a3\u4e48\u672c\u8282\u5230\u6b64\u7ed3\u675f\u3002"))}d.isMDXComponent=!0},6845:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01-0e517a9f907e0dc3c57956b40362c8a4.png"},7979:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02-764ccef4df34cdb6781c32317ce275d1.gif"},9242:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/03-b29d30af5817b6bc7f2b6e39e786b748.png"},6501:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/04-f7b17e8b441f4aee168b22455956d002.gif"}}]);