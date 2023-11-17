"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[1156],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3318:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(8957),a=(t(9496),t(9613));const o={id:"react-router-dom",sidebar_label:"\u5f15\u5165 react-router-dom",title:"\u5f15\u5165 react-router-dom"},i=void 0,s={unversionedId:"ying-chat/react-router-dom",id:"ying-chat/react-router-dom",title:"\u5f15\u5165 react-router-dom",description:"\u4e0b\u8f7d\u4f9d\u8d56",source:"@site/docs/ying-chat/04-react-router-dom.md",sourceDirName:"ying-chat",slug:"/ying-chat/react-router-dom",permalink:"/docs/ying-chat/react-router-dom",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"react-router-dom",sidebar_label:"\u5f15\u5165 react-router-dom",title:"\u5f15\u5165 react-router-dom"},sidebar:"yingChat",previous:{title:"\u5f15\u5165 tailwindcss \u548c antd",permalink:"/docs/ying-chat/tailwindcss-antd"},next:{title:"\u767b\u5f55\u6ce8\u518c\u9875\u9762\u6837\u5f0f",permalink:"/docs/ying-chat/login-register-style"}},p={},l=[{value:"\u4e0b\u8f7d\u4f9d\u8d56",id:"\u4e0b\u8f7d\u4f9d\u8d56",level:3}],c={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u4e0b\u8f7d\u4f9d\u8d56"},"\u4e0b\u8f7d\u4f9d\u8d56"),(0,a.kt)("p",null,"\u5728 client \u76ee\u5f55\u4e0b\u4e0b\u8f7d\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm i react-router-dom\n")),(0,a.kt)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u66f4\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="apps/client/tsconfig.json"',title:'"apps/client/tsconfig.json"'},'{\n  "compilerOptions": {\n    // ...\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["./src/*"]\n    }\n    // ...\n  }\n}\n')),(0,a.kt)("p",null,"\u7136\u540e\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"vite.config.ts")," \u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/client/vite.config.ts"',title:'"apps/client/vite.config.ts"'},"import path from 'path'\nimport react from '@vitejs/plugin-react'\nimport { defineConfig } from 'vite'\n\nexport default defineConfig({\n  plugins: [react()],\n  resolve: {\n    alias: {\n      '@': path.resolve(__dirname, './src')\n    }\n  }\n})\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u9879\u76ee\u5c31\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"@")," \u524d\u7f00\u4ee3\u8868 src \u5f15\u5165\u4e86\u3002"),(0,a.kt)("p",null,"\u5199\u5165\u4ee5\u4e0b\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="apps/client/src/router/index.tsx"',title:'"apps/client/src/router/index.tsx"'},"import { createBrowserRouter } from 'react-router-dom'\nimport { AppLayout } from '@/components/layout'\nimport { MenuType, MenuTypeMsgMap } from '@/components/layout/constants'\nimport { Message } from '@/pages/message'\nimport { Login } from '@/pages/login'\n\nexport const router = createBrowserRouter([\n  {\n    path: '/',\n    element: <AppLayout />,\n    children: [\n      {\n        path: `${MenuTypeMsgMap[MenuType.friend]}/:id`,\n        element: <Message />\n      },\n      {\n        path: `${MenuTypeMsgMap[MenuType.group]}/:id`,\n        element: <Message />\n      }\n    ]\n  },\n  {\n    path: '/login',\n    element: <Login />\n  }\n])\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="apps/client/src/App.tsx"',title:'"apps/client/src/App.tsx"'},"import { RouterProvider } from 'react-router-dom'\nimport { router } from './router'\n\nfunction App() {\n  return <RouterProvider router={router}></RouterProvider>\n}\n\nexport default App\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="apps/client/src/pages/account/login.tsx"',title:'"apps/client/src/pages/account/login.tsx"'},"export const Login = () => {\n  return <div>Login</div>\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="apps/client/src/components/layout/constants.ts"',title:'"apps/client/src/components/layout/constants.ts"'},"export enum MenuType {\n  friend,\n  group\n}\n\nexport const MenuTypeMsgMap = {\n  [MenuType.friend]: 'friend-msg',\n  [MenuType.group]: 'group-msg'\n}\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e4b\u524d\u6dfb\u52a0\u4e00\u4e2a cn \u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm i clsx tailwind-merge\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="apps/client/src/lib/utils.ts"',title:'"apps/client/src/lib/utils.ts"'},"import { type ClassValue, clsx } from 'clsx'\nimport { twMerge } from 'tailwind-merge'\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="apps/client/src/components/layout/index.tsx"',title:'"apps/client/src/components/layout/index.tsx"'},"import { Outlet } from 'react-router-dom'\nimport { useState } from 'react'\nimport { RoomSidebar } from './room-sidebar'\nimport { MenuType } from './constants'\nimport { cn } from '@/lib/utils'\n\nexport const AppLayout = () => {\n  const [menuType, setMenuType] = useState(MenuType.friend)\n\n  return (\n    <div className=\"h-full flex\">\n      <div className=\"h-full w-[60px]\">\n        <div>\n          <div\n            className=\"cursor-pointer\"\n            onClick={() => {\n              setMenuType(MenuType.friend)\n            }}\n          >\n            friend\n          </div>\n          <div\n            className=\"cursor-pointer\"\n            onClick={() => {\n              setMenuType(MenuType.group)\n            }}\n          >\n            group\n          </div>\n        </div>\n      </div>\n\n      <div\n        className={cn('h-full w-60', menuType !== MenuType.friend && 'hidden')}\n      >\n        <RoomSidebar type={MenuType.friend} />\n      </div>\n\n      <div\n        className={cn('h-full w-60', menuType !== MenuType.group && 'hidden')}\n      >\n        <RoomSidebar type={MenuType.group} />\n      </div>\n\n      <main className=\"h-full flex-1\">\n        <Outlet />\n      </main>\n    </div>\n  )\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="apps/client/src/components/layout/room-sidebar.tsx"',title:'"apps/client/src/components/layout/room-sidebar.tsx"'},"import { MenuType, MenuTypeMsgMap } from './constants'\nimport { useNavigate } from 'react-router-dom'\n\ntype RoomSidebarProps = {\n  type: MenuType\n}\n\nexport const RoomSidebar = ({ type }: RoomSidebarProps) => {\n  const navigate = useNavigate()\n\n  function toMessage(id: number) {\n    navigate(`${MenuTypeMsgMap[type]}/${id}`)\n  }\n\n  return (\n    <div>\n      <input />\n      <div>{type === MenuType.friend ? '\u597d\u53cb\u5217\u8868' : '\u7fa4\u7ec4\u5217\u8868'}</div>\n      {new Array(10).fill(0).map((el, index) => (\n        <div\n          key={index}\n          className=\"cursor-pointer\"\n          onClick={() => {\n            toMessage(index)\n          }}\n        >\n          name-{index}\n        </div>\n      ))}\n    </div>\n  )\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="apps/client/src/pages/message.tsx"',title:'"apps/client/src/pages/message.tsx"'},"import { useParams } from 'react-router-dom'\n\nexport const Message = () => {\n  const { id } = useParams()\n\n  return <div>Message: {id}</div>\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="apps/client/src/index.css"',title:'"apps/client/src/index.css"'},"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml,\nbody,\n#root {\n    height: 100%;\n}\n")))}m.isMDXComponent=!0}}]);