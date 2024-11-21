"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[1913],{959:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=t(3274),l=t(9128);const r={id:"file-api",sidebar_label:"\u6587\u4ef6\u64cd\u4f5c API",title:"\u6587\u4ef6\u64cd\u4f5c API"},s=void 0,d={id:"nodejs/fs/file-api",title:"\u6587\u4ef6\u64cd\u4f5c API",description:"readFile \u8bfb\u6587\u4ef6",source:"@site/docs/nodejs/09-fs/02-file-api.md",sourceDirName:"nodejs/09-fs",slug:"/nodejs/fs/file-api",permalink:"/docs/nodejs/fs/file-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"file-api",sidebar_label:"\u6587\u4ef6\u64cd\u4f5c API",title:"\u6587\u4ef6\u64cd\u4f5c API"},sidebar:"nodejs",previous:{title:"fs \u6a21\u5757\u4ecb\u7ecd",permalink:"/docs/nodejs/fs/fs-intro"},next:{title:"\u5927\u6587\u4ef6\u64cd\u4f5c",permalink:"/docs/nodejs/fs/large-file-operation"}},a={},c=[{value:"readFile \u8bfb\u6587\u4ef6",id:"readfile-\u8bfb\u6587\u4ef6",level:3},{value:"writeFile \u5199\u6587\u4ef6",id:"writefile-\u5199\u6587\u4ef6",level:3},{value:"appendFile \u8ffd\u52a0\u5185\u5bb9\u5230\u6587\u4ef6\u91cc",id:"appendfile-\u8ffd\u52a0\u5185\u5bb9\u5230\u6587\u4ef6\u91cc",level:3},{value:"copyFile \u590d\u5236\u6587\u4ef6",id:"copyfile-\u590d\u5236\u6587\u4ef6",level:3},{value:"watchFile \u76d1\u63a7\u6587\u4ef6\u53d8\u5316",id:"watchfile-\u76d1\u63a7\u6587\u4ef6\u53d8\u5316",level:3}];function o(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"readfile-\u8bfb\u6587\u4ef6",children:"readFile \u8bfb\u6587\u4ef6"}),"\n",(0,i.jsxs)(n.p,{children:["\u5148\u51c6\u5907\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"text.txt"})," \u6587\u4ef6\uff0c\u7136\u540e\u8fdb\u884c\u8bfb\u53d6\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"fs.readFile('text.txt', 'utf-8', (err, data) => {\n  console.log('\u5f53\u524d\u6587\u4ef6\u5185\u5bb9\uff1a', data)\n})\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u7b2c 1 \u4e2a\u53c2\u6570\u4f20\u5165\u7684\u6587\u4ef6\u8def\u5f84\u4e0d\u5b58\u5728\uff0c\u5219 err \u4f1a\u6709\u503c\u63d0\u793a\u6587\u4ef6\u4e0d\u5b58\u5728\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"writefile-\u5199\u6587\u4ef6",children:"writeFile \u5199\u6587\u4ef6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"fs.writeFile('text.txt', 'hello', err => {\n  console.log(err)\n  if (!err) {\n    fs.readFile('text.txt', 'utf-8', (err, data) => {\n      console.log('\u5f53\u524d\u6587\u4ef6\u5185\u5bb9\uff1a', data)\n    })\n  }\n})\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"writeFile"})," \u64cd\u4f5c\u9ed8\u8ba4\u4f1a\u628a\u5148\u524d\u6587\u4ef6\u7684\u5185\u5bb9\u5168\u90e8\u6e05\u7a7a\uff0c\u518d\u8986\u76d6\u65b0\u5185\u5bb9\u8fdb\u53bb\uff0c\u5e76\u4e14\u5982\u679c\u7b2c\u4e00\u4e2a\u4f20\u5165\u7684\u6587\u4ef6\u8def\u5f84\u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u8fd9\u4e2a\u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"writeFile"})," \u7684\u7b2c 3 \u4e2a\u53c2\u6570\u8fd8\u53ef\u4ee5\u4f20\u4e00\u4e2a\u914d\u7f6e\u9879\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"fs.writeFile(\n  'text.txt',\n  'ads',\n  {\n    mode: 0o666, // \u914d\u7f6e\u6743\u9650\u4f4d\n    flag: 'r+', // \u914d\u7f6e\u6807\u5fd7\u4f4d\uff0c\u6b64\u65f6\u5199\u4e86 r+\uff0c\u90a3\u4e48\u6b64\u65f6\u4e0d\u4f1a\u6e05\u7a7a\u539f\u6765\u7684\u6240\u6709\u5185\u5bb9\uff0c\u800c\u662f\u8986\u76d6\u4e00\u90e8\u5206\u8fdb\u53bb\n    encoding: 'utf-8' // \u914d\u7f6e\u5b57\u7b26\u7f16\u7801\n  },\n  err => {\n    console.log(err)\n    if (!err) {\n      fs.readFile('text.txt', 'utf-8', (err, data) => {\n        console.log('\u5f53\u524d\u6587\u4ef6\u5185\u5bb9\uff1a', data)\n      })\n    }\n  }\n)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"appendfile-\u8ffd\u52a0\u5185\u5bb9\u5230\u6587\u4ef6\u91cc",children:"appendFile \u8ffd\u52a0\u5185\u5bb9\u5230\u6587\u4ef6\u91cc"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"fs.appendFile('text.txt', 'kkakak', err => {\n  if (!err) {\n    fs.readFile('text.txt', 'utf-8', (err, data) => {\n      console.log('\u5f53\u524d\u6587\u4ef6\u5185\u5bb9\uff1a', data)\n    })\n  }\n})\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528\u8fd9\u4e2a api \u53ef\u4ee5\u770b\u5230\u5185\u5bb9\u662f\u6dfb\u52a0\u5728\u4e86\u6587\u4ef6\u7684\u672b\u5c3e\u7684\uff0c\u4e0d\u4f1a\u6e05\u7a7a\u539f\u6765\u7684\u5185\u5bb9\uff0c\u5b9e\u9645\u4e0a ",(0,i.jsx)(n.code,{children:"writeFile"})," \u7684\u914d\u7f6e\u9879\u7684 ",(0,i.jsx)(n.code,{children:"flag"})," \u5199\u6210 ",(0,i.jsx)(n.code,{children:"a"})," \u4e5f\u662f\u4e00\u6837\u7684\u6548\u679c\uff0c\u56e0\u4e3a ",(0,i.jsx)(n.code,{children:"a"})," \u8868\u793a\u8ffd\u52a0\u5185\u5bb9\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"copyfile-\u590d\u5236\u6587\u4ef6",children:"copyFile \u590d\u5236\u6587\u4ef6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"fs.copyFile('text.txt', 'test.txt', err => {\n  if (!err) {\n    fs.readFile('test.txt', 'utf-8', (err, data) => {\n      console.log('\u590d\u5236\u597d\u7684\u6587\u4ef6\u5185\u5bb9\uff1a', data)\n    })\n  }\n})\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u91cc\u8fb9\u6ce8\u610f\u8fd9\u4e2a\u51e0\u4e2a ",(0,i.jsx)(n.code,{children:"readFile"}),"\u3001 ",(0,i.jsx)(n.code,{children:"writeFile"}),"\u3001 ",(0,i.jsx)(n.code,{children:"copyFile"})," api\uff0c\u5b83\u5176\u5b9e\u90fd\u662f\u4e00\u6b21\u6027\u7684\u64cd\u4f5c\uff0c\u5c31\u662f\u6211\u4eec\u5f53\u524d\u7684\u76ee\u6807\u6587\u4ef6\u91cc\u8fb9\uff0c\u5047\u5982\u8bf4\u5462\u6709 100 \u4e2a\u5b57\u8282\u7684\u6570\u636e\uff0c\u90a3\u4e48\u5b83\u5c31\u76f8\u5f53\u4e8e\u662f\u4e00\u6b21\u6027\u5168\u90e8\u62ff\u51fa\u6765\u653e\u5728\u5185\u5b58\u91cc\u8fb9\uff0c\u7136\u540e\u518d\u4ece\u5185\u5b58\u91cc\u8fb9\u628a\u5b83\u4e00\u6b21\u6027\u518d\u5199\u5165\u5230\u53e6\u5916\u4e00\u4e2a\u6587\u4ef6\uff0c\u8fd9\u4e9b\u90fd\u4e0d\u9002\u5408\u4e8e\u53bb\u64cd\u4f5c\u5927\u6587\u4ef6\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"watchfile-\u76d1\u63a7\u6587\u4ef6\u53d8\u5316",children:"watchFile \u76d1\u63a7\u6587\u4ef6\u53d8\u5316"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"fs.watchFile(\n  'text.txt',\n  {\n    interval: 20 // \u6bcf20\u6beb\u79d2\u89c2\u5bdf\u4e00\u4e0b\u6587\u4ef6\u662f\u5426\u53d8\u5316\n  },\n  (cur, prev) => {\n    // \u6587\u4ef6\u53d8\u5316\u4e86\u5c31\u4f1a\u89e6\u53d1\u56de\u8c03\n    // \u8f93\u5165\u5f53\u524d\u6587\u4ef6\u4fe1\u606f\u548c\u4e0a\u4e00\u6b21\u7684\u6587\u4ef6\u4fe1\u606f\n    console.log(cur, prev)\n\n    fs.unwatchFile('text.txt') // \u53d6\u6d88\u76d1\u542c\u6587\u4ef6\n  }\n)\n"})})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},9128:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(9474);const l={},r=i.createContext(l);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);