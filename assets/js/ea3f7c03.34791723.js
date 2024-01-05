"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[7806],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var p=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,p)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,p,a=function(e,t){if(null==e)return{};var n,p,a={},r=Object.keys(e);for(p=0;p<r.length;p++)n=r[p],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(p=0;p<r.length;p++)n=r[p],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=p.createContext({}),o=function(e){var t=p.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return p.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},k=p.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=o(n),k=a,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||r;return n?p.createElement(d,l(l({ref:t},c),{},{components:n})):p.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var o=2;o<r;o++)l[o]=n[o];return p.createElement.apply(null,l)}return p.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var p=n(8957),a=(n(9496),n(9613));const r={id:"project-init",sidebar_label:"monorepo \u9879\u76ee\u521d\u59cb\u5316",title:"pnpm monorepo \u9879\u76ee\u521d\u59cb\u5316"},l=void 0,i={unversionedId:"ying-chat/project-init",id:"ying-chat/project-init",title:"pnpm monorepo \u9879\u76ee\u521d\u59cb\u5316",description:"\u672c\u9879\u76ee\u5f00\u53d1\u65f6\u7684 node \u7248\u672c\u548c pnpm \u7248\u672c\u4e3a",source:"@site/docs/ying-chat/01-project-init.md",sourceDirName:"ying-chat",slug:"/ying-chat/project-init",permalink:"/docs/ying-chat/project-init",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"project-init",sidebar_label:"monorepo \u9879\u76ee\u521d\u59cb\u5316",title:"pnpm monorepo \u9879\u76ee\u521d\u59cb\u5316"},sidebar:"yingChat",previous:{title:"\u9879\u76ee\u4ecb\u7ecd",permalink:"/docs/ying-chat"},next:{title:"\u5de5\u7a0b\u5316\u914d\u7f6e",permalink:"/docs/ying-chat/engineering-config"}},s={},o=[{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:3},{value:"\u521b\u5efa nestjs \u670d\u52a1\u7aef\u9879\u76ee",id:"\u521b\u5efa-nestjs-\u670d\u52a1\u7aef\u9879\u76ee",level:3},{value:"\u521b\u5efa vite react \u524d\u7aef\u9879\u76ee",id:"\u521b\u5efa-vite-react-\u524d\u7aef\u9879\u76ee",level:3},{value:"\u914d\u7f6e pnpm \u5de5\u4f5c\u533a",id:"\u914d\u7f6e-pnpm-\u5de5\u4f5c\u533a",level:3},{value:"\u6dfb\u52a0\u542f\u52a8\u547d\u4ee4",id:"\u6dfb\u52a0\u542f\u52a8\u547d\u4ee4",level:3},{value:"\u4e0b\u8f7d\u4f9d\u8d56\u542f\u52a8\u9879\u76ee",id:"\u4e0b\u8f7d\u4f9d\u8d56\u542f\u52a8\u9879\u76ee",level:3},{value:"\u521d\u59cb\u5316 git \u4ed3\u5e93",id:"\u521d\u59cb\u5316-git-\u4ed3\u5e93",level:3}],c={toc:o},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,p.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u9879\u76ee\u5f00\u53d1\u65f6\u7684 node \u7248\u672c\u548c pnpm \u7248\u672c\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"node -v\nv18.18.2\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm -v\n8.9.2\n")),(0,a.kt)("p",null,"\u4f7f\u7528 vscode \u8fdb\u884c\u5f00\u53d1"),(0,a.kt)("h3",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,a.kt)("p",null,"\u9996\u5148\u521b\u5efa\u9879\u76ee\u6839\u6587\u4ef6\u5939\u53eb ",(0,a.kt)("inlineCode",{parentName:"p"},"ying-chat"),"\uff0c\u63a5\u7740\u8fdb\u5165\u5230\u91cc\u9762\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm init")," \u521d\u59cb\u5316\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\uff0c\u7136\u540e\u7ee7\u7eed\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"apps")," \u7684\u6587\u4ef6\u5939\uff0c\u6700\u540e\u8fdb\u5165\u91cc\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir ying-chat\ncd ying-chat\npnpm init\nmkdir apps\ncd apps\n")),(0,a.kt)("h3",{id:"\u521b\u5efa-nestjs-\u670d\u52a1\u7aef\u9879\u76ee"},"\u521b\u5efa nestjs \u670d\u52a1\u7aef\u9879\u76ee"),(0,a.kt)("p",null,"\u76f4\u63a5\u5728 apps \u76ee\u5f55\u4e0b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u521b\u5efa\u4e00\u4e2a nestjs \u9879\u76ee\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="apps"',title:'"apps"'},"nest new server --skip-git --skip-install -p pnpm\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--skip-git")," \u4e0d\u8981\u521d\u59cb\u5316 git \u4ed3\u5e93\uff0c\u7b49\u4f1a\u8981\u5728\u6700\u5916\u5c42\u521b\u5efa git \u4ed3\u5e93"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--skip-install")," \u4e0d\u8981\u81ea\u52a8\u4e0b\u8f7d\u4f9d\u8d56\uff0c\u7b49\u4f1a\u8981\u901a\u8fc7 pnpm \u7edf\u4e00\u4e0b\u8f7d\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-p pnpm")," \u6307\u5b9a\u4f7f\u7528\u7684\u5305\u7ba1\u7406\u5668\u4e3a pnpm"),(0,a.kt)("p",null,"nest \u547d\u4ee4\u9700\u5168\u5c40\u5b89\u88c5 @nestjs/cli"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @nestjs/cli -g\n")),(0,a.kt)("h3",{id:"\u521b\u5efa-vite-react-\u524d\u7aef\u9879\u76ee"},"\u521b\u5efa vite react \u524d\u7aef\u9879\u76ee"),(0,a.kt)("p",null,"\u7ee7\u7eed\u5728 apps \u76ee\u5f55\u4e0b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u521b\u5efa\u4e00\u4e2a vite \u9879\u76ee\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="apps"',title:'"apps"'},"pnpm create vite\n")),(0,a.kt)("p",null,"\u9879\u76ee\u540d\u8f93\u5165\u4e3a client\uff0c\u9009\u62e9 react\uff0c\u9009\u62e9 typescipt\u3002"),(0,a.kt)("p",null,"\u6ca1\u6709\u62a5\u9519\u7684\u8bdd\uff0c\u8fd9\u6837\u524d\u7aef\u9879\u76ee\u4e5f\u521b\u5efa\u597d\u4e86\u3002"),(0,a.kt)("h3",{id:"\u914d\u7f6e-pnpm-\u5de5\u4f5c\u533a"},"\u914d\u7f6e pnpm \u5de5\u4f5c\u533a"),(0,a.kt)("p",null,"\u56de\u5230\u9879\u76ee\u7684\u6839\u76ee\u5f55\uff0c\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml"),"\uff0c\u586b\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},'packages:\n  - "apps/*"\n')),(0,a.kt)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u7684\u4f5c\u7528\u662f\u544a\u8bc9 pnpm \u5f53\u524d\u6587\u4ef6\u5939\u662f\u4e00\u4e2a monorepo \u9879\u76ee\uff0c\u5e76\u4e14\u8be5\u9879\u76ee\u6709\u4e00\u4e2a\u4f4d\u4e8e apps \u6587\u4ef6\u5939\u4e0b\u7684 workspace\uff0c\u4e5f\u5c31\u662f\u8bf4\u8fd9\u4e2a\u6587\u4ef6\u5939\u4e0b\u7684\u5b50\u6587\u4ef6\u5939\u90fd\u662f\u72ec\u7acb\u7684\u9879\u76ee\u3002"),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u542f\u52a8\u547d\u4ee4"},"\u6dfb\u52a0\u542f\u52a8\u547d\u4ee4"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u91cc\u9762\u6dfb\u52a0\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u547d\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  ...\n  "scripts": {\n    "dev": "pnpm -F ./apps/* dev"\n  },\n  ...\n}\n')),(0,a.kt)("p",null,"\u73b0\u5728\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u811a\u672c\uff0cpnpm \u4f1a\u627e\u5230 apps \u4e0b\u7684\u6240\u6709\u5b50\u9879\u76ee\u7684 package.json \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u811a\u672c\u6267\u884c\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u4e00\u6761\u547d\u4ee4\u542f\u52a8\u591a\u4e2a\u9879\u76ee\u4e86\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u73b0\u5728\u670d\u52a1\u7aef\u7684 package.json \u91cc\u5e76\u6ca1\u6709 dev \u547d\u4ee4\uff0c\u73b0\u5728\u9700\u8981\u5728\u91cc\u9762\u52a0\u4e00\u4e0b\uff0c\u5185\u5bb9\u548c\u539f\u6765 nestjs \u9879\u76ee\u7684\u5f00\u53d1\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"start:dev"),"\u4e00\u81f4\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="apps/server/package.json"',title:'"apps/server/package.json"'},'{\n  ...\n  "scripts": {\n    ...\n    "start": "nest start",\n    "dev": "nest start --watch",\n    "start:dev": "nest start --watch",\n    ...\n  }\n  ...\n}\n')),(0,a.kt)("h3",{id:"\u4e0b\u8f7d\u4f9d\u8d56\u542f\u52a8\u9879\u76ee"},"\u4e0b\u8f7d\u4f9d\u8d56\u542f\u52a8\u9879\u76ee"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm i\npnpm dev\n")),(0,a.kt)("p",null,"\u542f\u52a8\u5b8c\u6210\u540e\uff0c\u8bbf\u95ee\u4ee5\u4e0b\u94fe\u63a5\u67e5\u770b\u6548\u679c"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://localhost:5173"},"http://localhost:5173")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")),(0,a.kt)("p",null,"\u6309\u7167\u76ee\u524d\u7684\u914d\u7f6e\uff0c\u5f53\u6539\u52a8 nestjs \u9879\u76ee\u7684\u4ee3\u7801\uff0cnestjs \u7684\u70ed\u66f4\u65b0\u5c06\u4f1a\u91cd\u65b0\u8986\u76d6\u63a7\u5236\u53f0\u5185\u5bb9\uff0c\u524d\u9762\u7684\u5185\u5bb9\u5c31\u770b\u4e0d\u5230\u4e86\uff0c\u5f00\u53d1\u4f53\u9a8c\u5c06\u4f1a\u5f88\u96be\u53d7\uff0c\u6240\u4ee5\u63a5\u4e0b\u6765\u5728 nest start \u65f6\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"--preserveWatchOutput")," \u5373\u53ef\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="apps/server/package.json"',title:'"apps/server/package.json"'},'{\n  ...\n  "scripts": {\n    ...\n    "dev": "nest start --watch --preserveWatchOutput",\n    ...\n  }\n  ...\n}\n')),(0,a.kt)("p",null,"pnpm \u9ed8\u8ba4\u4f1a\u628a\u4e24\u4e2a\u9879\u76ee\u7684\u662f\u8f93\u51fa\u5206\u6210\u4e24\u5757\uff0c\u5982\u679c\u540c\u65f6\u5bf9\u524d\u540e\u7aef\u4ee3\u7801\u4e00\u5757\u4fee\u6539\uff0c\u4f1a\u770b\u5230\u6548\u679c\u6709\u70b9\u602a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3531).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\uff0c\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u547d\u4ee4\u6dfb\u52a0\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"--reporter append-only"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  ...\n  "scripts": {\n    "dev": "pnpm --reporter append-only -F ./apps/* dev"\n  },\n  ...\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--reporter append-only")," \u662f\u8ba9\u542f\u52a8\u7684\u9879\u76ee\u65e5\u5fd7\u6253\u5370\u4e3a\u7d2f\u8ba1\u6dfb\u52a0\uff0c\u4e0d\u4f1a\u5206\u6210\u4e24\u5757\u3002"),(0,a.kt)("p",null,"\u91cd\u65b0\u542f\u52a8\u770b\u770b\u6548\u679c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6748).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,"\u8fd9\u6837\u5c31\u8212\u670d\u591a\u4e86\u3002"),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316-git-\u4ed3\u5e93"},"\u521d\u59cb\u5316 git \u4ed3\u5e93"),(0,a.kt)("p",null,"\u5148\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," \u6587\u4ef6\uff0c\u586b\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".gitignore"',title:'".gitignore"'},"node_modules\ndist\n")),(0,a.kt)("p",null,"\u6700\u540e\u521d\u59cb\u5316\u4e00\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'git init\ngit add .\ngit commit -m "project init"\n')),(0,a.kt)("p",null,"\u90a3\u4e48 monorepo \u9879\u76ee\u7684\u521d\u59cb\u5316\u5c31\u5230\u8fd9\u91cc\u5b8c\u7ed3\u3002"))}u.isMDXComponent=!0},3531:(e,t,n)=>{n.d(t,{Z:()=>p});const p=n.p+"assets/images/01-cfec1e5c64727c233348ae75081a196d.gif"},6748:(e,t,n)=>{n.d(t,{Z:()=>p});const p=n.p+"assets/images/02-0ac38a26b50c933f4f49fe65edaf755f.gif"}}]);