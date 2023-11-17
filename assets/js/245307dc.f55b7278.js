"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[9426],{9613:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),d=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),k=o,m=p["".concat(i,".").concat(k)]||p[k]||u[k]||a;return t?n.createElement(m,l(l({ref:r},s),{},{components:t})):n.createElement(m,l({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=k;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var d=2;d<a;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1106:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=t(8957),o=(t(9496),t(9613));const a={id:"network",sidebar_label:"Docker \u7f51\u7edc",title:"Docker \u7f51\u7edc"},l=void 0,c={unversionedId:"docker/command/network",id:"docker/command/network",title:"Docker \u7f51\u7edc",description:"\u521b\u5efa\u7f51\u7edc",source:"@site/docs/docker/02-command/02-network.md",sourceDirName:"docker/02-command",slug:"/docker/command/network",permalink:"/docs/docker/command/network",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"network",sidebar_label:"Docker \u7f51\u7edc",title:"Docker \u7f51\u7edc"},sidebar:"docker",previous:{title:"Docker \u955c\u50cf\u548c\u5bb9\u5668",permalink:"/docs/docker/command/image-and-container"},next:{title:"windows",permalink:"/docs/docker/download/windows"}},i={},d=[{value:"\u521b\u5efa\u7f51\u7edc",id:"\u521b\u5efa\u7f51\u7edc",level:3},{value:"\u5220\u9664\u7f51\u7edc",id:"\u5220\u9664\u7f51\u7edc",level:3},{value:"\u5217\u51fa\u7f51\u7edc",id:"\u5217\u51fa\u7f51\u7edc",level:3},{value:"\u83b7\u53d6\u6709\u5173\u7f51\u7edc\u7684\u4fe1\u606f",id:"\u83b7\u53d6\u6709\u5173\u7f51\u7edc\u7684\u4fe1\u606f",level:3},{value:"\u5c06\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc",id:"\u5c06\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc",level:3},{value:"\u542f\u52a8\u65f6\u5c06\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc",id:"\u542f\u52a8\u65f6\u5c06\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc",level:3},{value:"\u65ad\u5f00\u5bb9\u5668\u4e0e\u7f51\u7edc\u7684\u8fde\u63a5",id:"\u65ad\u5f00\u5bb9\u5668\u4e0e\u7f51\u7edc\u7684\u8fde\u63a5",level:3}],s={toc:d},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u521b\u5efa\u7f51\u7edc"},"\u521b\u5efa\u7f51\u7edc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'docker network create -d overlay MyOverlayNetwork\ndocker network create -d bridge MyBridgeNetwork\ndocker network create -d overlay \\\n  --subnet=192.168.0.0/16 \\\n  --subnet=192.170.0.0/16 \\\n  --gateway=192.168.0.100 \\\n  --gateway=192.170.0.100 \\\n  --ip-range=192.168.1.0/24 \\\n  --aux-address="my-router=192.168.1.5" \\\n  --aux-address="my-switch=192.168.1.6" \\\n  --aux-address="my-printer=192.170.1.5" \\\n  --aux-address="my-nas=192.170.1.6" \\\n  MyOverlayNetwork\n')),(0,o.kt)("h3",{id:"\u5220\u9664\u7f51\u7edc"},"\u5220\u9664\u7f51\u7edc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker network rm MyOverlayNetwork\n")),(0,o.kt)("h3",{id:"\u5217\u51fa\u7f51\u7edc"},"\u5217\u51fa\u7f51\u7edc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker network ls\n")),(0,o.kt)("h3",{id:"\u83b7\u53d6\u6709\u5173\u7f51\u7edc\u7684\u4fe1\u606f"},"\u83b7\u53d6\u6709\u5173\u7f51\u7edc\u7684\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker network inspect MyOverlayNetwork\n")),(0,o.kt)("h3",{id:"\u5c06\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc"},"\u5c06\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker network connect MyOverlayNetwork nginx\n")),(0,o.kt)("h3",{id:"\u542f\u52a8\u65f6\u5c06\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc"},"\u542f\u52a8\u65f6\u5c06\u5bb9\u5668\u8fde\u63a5\u5230\u7f51\u7edc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it -d --network=MyOverlayNetwork nginx\n")),(0,o.kt)("h3",{id:"\u65ad\u5f00\u5bb9\u5668\u4e0e\u7f51\u7edc\u7684\u8fde\u63a5"},"\u65ad\u5f00\u5bb9\u5668\u4e0e\u7f51\u7edc\u7684\u8fde\u63a5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker network disconnect MyOverlayNetwork nginx\n")))}u.isMDXComponent=!0}}]);