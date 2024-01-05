"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[2566],{9613:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>g});var a=r(9496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),p=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):d(d({},e),t)),r},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),k=p(r),N=n,g=k["".concat(o,".").concat(N)]||k[N]||c[N]||i;return r?a.createElement(g,d(d({ref:e},m),{},{components:r})):a.createElement(g,d({ref:e},m))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,d=new Array(i);d[0]=N;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[k]="string"==typeof t?t:n,d[1]=l;for(var p=2;p<i;p++)d[p]=r[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}N.displayName="MDXCreateElement"},2062:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(8957),n=(r(9496),r(9613));const i={id:"docker-container",sidebar_label:"\u5bb9\u5668",title:"Docker \u5bb9\u5668"},d=void 0,l={unversionedId:"docker/command/docker-container",id:"docker/command/docker-container",title:"Docker \u5bb9\u5668",description:"\u8dd1\u8d77\u4e00\u4e2a\u5bb9\u5668",source:"@site/docs/docker/03-command/02-container.md",sourceDirName:"docker/03-command",slug:"/docker/command/docker-container",permalink:"/docs/docker/command/docker-container",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docker-container",sidebar_label:"\u5bb9\u5668",title:"Docker \u5bb9\u5668"},sidebar:"docker",previous:{title:"\u955c\u50cf",permalink:"/docs/docker/command/docker-image"},next:{title:"\u7f51\u7edc",permalink:"/docs/docker/command/network"}},o={},p=[{value:"\u8dd1\u8d77\u4e00\u4e2a\u5bb9\u5668",id:"\u8dd1\u8d77\u4e00\u4e2a\u5bb9\u5668",level:3},{value:"\u5217\u51fa\u5bb9\u5668",id:"\u5217\u51fa\u5bb9\u5668",level:3},{value:"\u5bb9\u5668\u5e38\u7528\u547d\u4ee4",id:"\u5bb9\u5668\u5e38\u7528\u547d\u4ee4",level:3}],m={toc:p},k="wrapper";function c(t){let{components:e,...r}=t;return(0,n.kt)(k,(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u8dd1\u8d77\u4e00\u4e2a\u5bb9\u5668"},"\u8dd1\u8d77\u4e00\u4e2a\u5bb9\u5668"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 8088:80 docker/getting-started\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:"right"},"\u4f5c\u7528"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-i")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u4ee5\u4ea4\u4e92\u6a21\u5f0f\u8fd0\u884c\u5bb9\u5668\uff0c\u901a\u5e38\u4e0e -t \u540c\u65f6\u4f7f\u7528\uff0c\u76f4\u63a5",(0,n.kt)("inlineCode",{parentName:"td"},"-it"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-t")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u542f\u52a8\u5bb9\u5668\u540e\uff0c\u4e3a\u5bb9\u5668\u5206\u914d\u4e00\u4e2a\u547d\u4ee4\u884c\uff0c\u901a\u5e38\u4e0e -i \u540c\u65f6\u4f7f\u7528\uff0c\u76f4\u63a5",(0,n.kt)("inlineCode",{parentName:"td"},"-it"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-d")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u5b88\u62a4\u8fdb\u7a0b\uff0c\u540e\u53f0\u8fd0\u884c\u8be5\u5bb9\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-p")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u683c\u5f0f\uff1a<\u5bbf\u4e3b\u673a\u7aef\u53e3>:<\u5bb9\u5668\u7aef\u53e3> \u5c06\u5bbf\u4e3b\u673a\u7aef\u53e3\u6620\u5c04\u5230\u5bb9\u5668\u4e2d\u7684\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-P")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u628a\u6240\u6709\u5bb9\u5668\u5185\u90e8\u7aef\u53e3\u968f\u673a\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u7684\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-v")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u683c\u5f0f\uff1a<\u5bbf\u4e3b\u673a\u76ee\u5f55>:<\u5bb9\u5668\u76ee\u5f55> \u5c06\u5bb9\u5668\u76ee\u5f55\u6302\u8f7d\u5230\u5bbf\u4e3b\u673a\u76ee\u5f55\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"--rm")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u5bb9\u5668\u7ec8\u6b62\u8fd0\u884c\u540e\u81ea\u52a8\u5220\u9664\u5bb9\u5668\u6587\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"--name")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u6307\u5b9a\u5bb9\u5668\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"--network")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u8fde\u63a5\u5230\u7f51\u7edc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-e,--env list")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf")))),(0,n.kt)("h3",{id:"\u5217\u51fa\u5bb9\u5668"},"\u5217\u51fa\u5bb9\u5668"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker ps #\u5217\u51fa\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:"right"},"\u4f5c\u7528"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-a")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u5217\u51fa\u6240\u6709\u5bb9\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-s")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u663e\u793a\u6587\u4ef6\u603b\u5927\u5c0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-f, --filter")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u6839\u636e\u63d0\u4f9b\u7684\u6761\u4ef6\u8fc7\u6ee4\u8f93\u51fa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"--format ")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u4f7f\u7528\u6a21\u677f\u683c\u5f0f\u5316\u663e\u793a\u8f93\u51fa")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"-q, --quiet")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u4ec5\u663e\u793a\u5bb9\u5668 ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"--no-trunc")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u4e0d\u8981\u622a\u65ad\uff0c\u663e\u793a\u5b8c\u6574\u7684\u5bb9\u5668\u4fe1\u606f")))),(0,n.kt)("h3",{id:"\u5bb9\u5668\u5e38\u7528\u547d\u4ee4"},"\u5bb9\u5668\u5e38\u7528\u547d\u4ee4"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u547d\u4ee4"),(0,n.kt)("th",{parentName:"tr",align:"right"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"docker rename <container> <newname>")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u91cd\u547d\u540d\u5bb9\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"docker rm <container>")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u79fb\u9664\u5bb9\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"docker logs <container>")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u663e\u793a\u5bb9\u5668\u7684\u63a7\u5236\u53f0\u65e5\u5fd7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"docker inspect <container>")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u68c0\u67e5\u5bb9\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"docker stop <container>")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u505c\u6b62\u5bb9\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"docker restart <container>")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u91cd\u542f\u4e00\u4e2a\u5bb9\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"docker port <container>")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u663e\u793a\u5bb9\u5668\u7684\u7aef\u53e3\u6620\u5c04")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"docker top <container>")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u5217\u51fa\u8fdb\u7a0b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"docker kill <container>")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u6740\u6b7b\u4e00\u4e2a\u5bb9\u5668")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"docker stats <container>")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u5bb9\u5668\u8d44\u6e90\u4f7f\u7528")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"docker diff <container>")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u5217\u51fa\u5bf9\u5bb9\u5668\u6240\u505a\u7684\u66f4\u6539")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"docker exec -it <container> bash")),(0,n.kt)("td",{parentName:"tr",align:"right"},"\u8fde\u63a5\u5230\u5bb9\u5668")))),(0,n.kt)("p",null,"\u53c2\u6570 ",(0,n.kt)("inlineCode",{parentName:"p"},"<container>")," \u53ef\u4ee5\u662f\u5bb9\u5668 id \u6216\u540d\u79f0"))}c.isMDXComponent=!0}}]);