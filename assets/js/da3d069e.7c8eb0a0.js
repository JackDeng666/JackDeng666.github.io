"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[2185],{9613:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>y});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?t.createElement(y,l(l({ref:r},p),{},{components:n})):t.createElement(y,l({ref:r},p))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3809:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=n(8957),o=(n(9496),n(9613));const a={id:"mysql",sidebar_label:"MySQL \u6570\u636e\u5e93",title:"docker \u4f7f\u7528 MySQL \u6570\u636e\u5e93"},l=void 0,i={unversionedId:"docker/images/mysql",id:"docker/images/mysql",title:"docker \u4f7f\u7528 MySQL \u6570\u636e\u5e93",description:"\u4e0b\u8f7d\u955c\u50cf",source:"@site/docs/docker/04-images/01-mysql.md",sourceDirName:"docker/04-images",slug:"/docker/images/mysql",permalink:"/docs/docker/images/mysql",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"mysql",sidebar_label:"MySQL \u6570\u636e\u5e93",title:"docker \u4f7f\u7528 MySQL \u6570\u636e\u5e93"},sidebar:"docker",previous:{title:"\u7f51\u7edc",permalink:"/docs/docker/command/network"},next:{title:"Redis \u5185\u5b58\u6570\u636e\u5e93",permalink:"/docs/docker/images/redis"}},c={},s=[{value:"\u4e0b\u8f7d\u955c\u50cf",id:"\u4e0b\u8f7d\u955c\u50cf",level:3},{value:"\u547d\u4ee4\u8fd0\u884c\u5bb9\u5668",id:"\u547d\u4ee4\u8fd0\u884c\u5bb9\u5668",level:3},{value:"docker compose \u6587\u4ef6\u542f\u52a8\u5bb9\u5668",id:"docker-compose-\u6587\u4ef6\u542f\u52a8\u5bb9\u5668",level:3}],p={toc:s},m="wrapper";function d(e){let{components:r,...n}=e;return(0,o.kt)(m,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4e0b\u8f7d\u955c\u50cf"},"\u4e0b\u8f7d\u955c\u50cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull mysql\n")),(0,o.kt)("h3",{id:"\u547d\u4ee4\u8fd0\u884c\u5bb9\u5668"},"\u547d\u4ee4\u8fd0\u884c\u5bb9\u5668"),(0,o.kt)("p",null,"linux \u4e0b\u8dd1\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --name mysql-test \\\n  -p 3306:3306 \\\n  -v D:/DockerData/ContainerBackup/mysql5.7-data:/var/lib/mysql \\\n  -e MYSQL_ROOT_PASSWORD=ying123456 \\\n  -e TZ=Asia/Shanghai \\\n  -d mysql\n")),(0,o.kt)("p",null,"\u5982\u679c\u662f\u5728 windows \u4e0b\u4f7f\u7528 cmd \u8dd1\u547d\u4ee4\uff0c\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"\\")," \u6362\u884c\u7b26\u6539\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"^")," \u5373\u53ef\u3002"),(0,o.kt)("h3",{id:"docker-compose-\u6587\u4ef6\u542f\u52a8\u5bb9\u5668"},"docker compose \u6587\u4ef6\u542f\u52a8\u5bb9\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3'\nservices:\n  mysql:\n    container_name: mysql-test\n    image: mysql:latest\n    environment:\n      TZ: Asia/Shanghai\n      MYSQL_ROOT_PASSWORD: ying123456\n    volumes:\n      - D:/DockerData/ContainerBackup/mysql-data:/var/lib/mysql\n    ports:\n      - '3306:3306'\n")))}d.isMDXComponent=!0}}]);