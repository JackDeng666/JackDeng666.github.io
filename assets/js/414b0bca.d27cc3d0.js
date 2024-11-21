"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[3570],{6361:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(3274),s=t(9128);const c={id:"writeable",sidebar_label:"\u53ef\u5199\u6d41",title:"\u53ef\u5199\u6d41"},i=void 0,o={id:"nodejs/stream/writeable",title:"\u53ef\u5199\u6d41",description:"\u672c\u7bc7\u6765\u8bf4\u4e00\u4e0b\u53ef\u5199\u6d41\uff0c\u4e4b\u524d\u7684\u53ef\u8bfb\u6d41\u5c31\u662f\u4e3a\u4e86\u751f\u4ea7\u6570\u636e\uff0c\u5904\u4e8e\u7ed3\u6784\u7684\u4e0a\u6e38\uff0c\u800c\u53ef\u5199\u6d41\u5c31\u662f\u7528\u4e8e\u6d88\u8d39\u6570\u636e\u5904\u4e8e\u7ed3\u6784\u4e0b\u6e38\uff0c\u901a\u8fc7\u53ef\u5199\u6d41\u5c31\u80fd\u591f\u53bb\u628a\u6570\u636e\u5199\u5165\u5230\u6307\u5b9a\u7684\u5730\u65b9\uff0c\u5e38\u89c1\u7684\u64cd\u4f5c\u5c31\u662f\u5f80\u78c1\u76d8\u6587\u4ef6\u4e2d\u5199\u5165\u5185\u5bb9\uff0c\u6216\u8005\u5bf9 tcp \u4ee5\u53ca http \u7684\u7f51\u7edc\u54cd\u5e94\u53bb\u8fdb\u884c\u64cd\u4f5c\uff0c\u6ce8\u610f\u8fd9\u91cc\u6211\u4eec\u6240\u8bf4\u7684\u662f\u54cd\u5e94\uff0c\u800c\u8bf7\u6c42\u4e00\u822c\u90fd\u662f\u53ef\u8bfb\u6d41\uff0c\u540c\u6837\u6211\u4eec\u8fd8\u662f\u5148\u53bb\u901a\u8fc7\u4e24\u4e2a\u4ee3\u7801\u7247\u6bb5\u6765\u770b\u4e00\u4e0b\u53ef\u5199\u6d41\u7684\u57fa\u672c\u4f7f\u7528\u3002",source:"@site/docs/nodejs/10-stream/03-writeable.md",sourceDirName:"nodejs/10-stream",slug:"/nodejs/stream/writeable",permalink:"/docs/nodejs/stream/writeable",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"writeable",sidebar_label:"\u53ef\u5199\u6d41",title:"\u53ef\u5199\u6d41"},sidebar:"nodejs",previous:{title:"\u53ef\u8bfb\u6d41",permalink:"/docs/nodejs/stream/readable"},next:{title:"\u53cc\u5de5\u548c\u8f6c\u6362\u6d41",permalink:"/docs/nodejs/stream/duplex-transform"}},a={},l=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u672c\u7bc7\u6765\u8bf4\u4e00\u4e0b\u53ef\u5199\u6d41\uff0c\u4e4b\u524d\u7684\u53ef\u8bfb\u6d41\u5c31\u662f\u4e3a\u4e86\u751f\u4ea7\u6570\u636e\uff0c\u5904\u4e8e\u7ed3\u6784\u7684\u4e0a\u6e38\uff0c\u800c\u53ef\u5199\u6d41\u5c31\u662f\u7528\u4e8e\u6d88\u8d39\u6570\u636e\u5904\u4e8e\u7ed3\u6784\u4e0b\u6e38\uff0c\u901a\u8fc7\u53ef\u5199\u6d41\u5c31\u80fd\u591f\u53bb\u628a\u6570\u636e\u5199\u5165\u5230\u6307\u5b9a\u7684\u5730\u65b9\uff0c\u5e38\u89c1\u7684\u64cd\u4f5c\u5c31\u662f\u5f80\u78c1\u76d8\u6587\u4ef6\u4e2d\u5199\u5165\u5185\u5bb9\uff0c\u6216\u8005\u5bf9 tcp \u4ee5\u53ca http \u7684\u7f51\u7edc\u54cd\u5e94\u53bb\u8fdb\u884c\u64cd\u4f5c\uff0c\u6ce8\u610f\u8fd9\u91cc\u6211\u4eec\u6240\u8bf4\u7684\u662f\u54cd\u5e94\uff0c\u800c\u8bf7\u6c42\u4e00\u822c\u90fd\u662f\u53ef\u8bfb\u6d41\uff0c\u540c\u6837\u6211\u4eec\u8fd8\u662f\u5148\u53bb\u901a\u8fc7\u4e24\u4e2a\u4ee3\u7801\u7247\u6bb5\u6765\u770b\u4e00\u4e0b\u53ef\u5199\u6d41\u7684\u57fa\u672c\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const rs = fs.createReadStream('text1.txt')\nconst ws = fs.createWriteStream('text2.txt')\nrs.pipe(ws)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const rs = fs.createReadStream('text1.txt')\nconst ws = fs.createWriteStream('text2.txt')\nrs.on('data', chunk => {\n  ws.write(chunk)\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e24\u6bb5\u4ee3\u7801\u5b9e\u73b0\u7684\u6548\u679c\u90fd\u662f\u590d\u5236 ",(0,r.jsx)(n.code,{children:"text1.txt"})," \u6587\u4ef6\u7684\u5185\u5bb9\u5230 ",(0,r.jsx)(n.code,{children:"text2.txt"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u53ef\u5199\u6d41\u7684\u5236\u5b9a\u5b9e\u73b0\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const fs = require('fs')\nconst { Writable } = require('stream')\nclass MyWriteable extends Writable {\n  constructor() {\n    super()\n  }\n\n  _write(chunk, encoding, callback) {\n    console.log('\u6a21\u62df\u5199\u5165\u6570\u636e: ', chunk.toString())\n    // \u5199\u5165\u5b8c\u6210\u540e\u8c03\u7528 callback\n    process.nextTick(callback)\n  }\n}\n\nlet myWriteable = new MyWriteable()\n\nmyWriteable.write('\u54c7\u5494\u5494', () => {\n  console.log('\u54c7\u5494\u5494\u5199\u5165\u5b8c\u6210')\n})\n\nmyWriteable.on('pipe', () => {\n  console.log('on pipe')\n})\n\nmyWriteable.on('drain', () => {\n  console.log('on drain')\n})\n\nconst rs = fs.createReadStream('text1.txt')\nrs.pipe(myWriteable)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u5b9e\u77e5\u9053\u4e86\u53ef\u8bfb\u6d41\u7684\u5de5\u4f5c\u6d41\u7a0b\u4ee5\u53ca\u5b9e\u73b0\u4e4b\u540e\uff0c\u5176\u4ed6\u4e09\u79cd\u6d41\u7684\u64cd\u4f5c\u90fd\u4f1a\u5f88\u597d\u7406\u89e3\uff0c\u6bd4\u5982\u8bf4\u5f53\u524d\u6211\u4eec\u5c31\u7c7b\u6bd4\u53ef\u8bfb\u6d41\u5c31\u4f1a\u77e5\u9053\uff0c\u5982\u679c\u60f3\u8981\u53bb\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u53ef\u5199\u6d41\uff0c\u540c\u6837\u6211\u4eec\u4e5f\u8981\u53bb\u5b8c\u6210\u4e24\u4e2a\u6838\u5fc3\u7684\u64cd\u4f5c\uff0c\u7b2c\u4e00\u4e2a\u5c31\u662f\u6211\u4eec\u8981\u53bb\u7ee7\u627f stream \u91cc\u9762\u7684 ",(0,r.jsx)(n.code,{children:"Writeable"}),"\uff0c\u7b2c\u4e8c\u4e2a\u5c31\u662f\u53bb\u91cd\u5199\u5b83\u91cc\u8fb9\u7684 ",(0,r.jsx)(n.code,{children:"_write"})," \u65b9\u6cd5\u3002\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e0b\u5e38\u89c1\u7684\u4e8b\u4ef6\u64cd\u4f5c\uff0c\u5b9e\u9645\u5f00\u53d1\u4e2d\u7ecf\u5e38\u89c1\u5230\u7684\u5c31\u5e94\u8be5\u662f pipe \u4e8b\u4ef6\u7684\u4f7f\u7528\uff0c\u5f53\u53ef\u8bfb\u6d41\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"pipe"})," \u65b9\u6cd5\u5411\u53ef\u5199\u6d41\u4f20\u8f93\u6570\u636e\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u53bb\u89e6\u53d1\u53ef\u5199\u6d41\u7684 ",(0,r.jsx)(n.code,{children:"pipe"})," \u4e8b\u4ef6\uff0c\u4ece\u800c\u53bb\u5b8c\u6210\u6700\u7ec8\u7684\u6570\u636e\u5199\u5165\u64cd\u4f5c\uff0c\u8fd8\u6709\u4e00\u4e2a\u5c31\u662f ",(0,r.jsx)(n.code,{children:"unpipe"})," \u4e8b\u4ef6\uff0c\u4ed6\u4f1a\u5728\u53ef\u8bfb\u6d41\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"unpipe"})," \u65b9\u6cd5\u7684\u65f6\u5019\u88ab\u89e6\u53d1\uff0c\u5982\u679c\u8bf4 ",(0,r.jsx)(n.code,{children:"pipe"})," \u662f\u6570\u636e\u7684\u5230\u6765\uff0c\u90a3\u4e48 ",(0,r.jsx)(n.code,{children:"unpipe"})," \u5c31\u662f\u6570\u636e\u7684\u5207\u65ad\uff0c\u4e00\u822c\u6765\u8bf4\u8fd9\u4e2a\u64cd\u4f5c\u5b83\u4e0d\u662f\u7279\u522b\u7684\u5e38\u7528\uff0c\u518d\u6709\u4e00\u4e2a\u5c31\u662f ",(0,r.jsx)(n.code,{children:"drain"})," \u4e8b\u4ef6\uff0c\u5b57\u9762\u7684\u610f\u601d\u5c31\u662f\u62bd\u5e72\uff0c\u5b83\u4f1a\u5728 ",(0,r.jsx)(n.code,{children:"write"})," \u65b9\u6cd5\u8fd4\u56de false\uff0c\u7136\u540e\u6570\u636e\u53c8\u53ef\u4ee5\u7ee7\u7eed\u5199\u5165\u7684\u65f6\u5019\u88ab\u89e6\u53d1\uff0c\u8fd9\u4e2a\u8fd8\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u6211\u4eec\u63d0\u5230\u8fc7\u4f7f\u7528\u6d41\u64cd\u4f5c\u6570\u636e\u7684\u597d\u5904\u4e4b\u4e00\u5c31\u5728\u4e8e\u4e0d\u4f1a\u6491\u7206\u5185\u5b58\uff0c\u90a3\u5b83\u662f\u5982\u4f55\u5b9e\u73b0\u7684\u5462\uff1f\u5927\u81f4\u7684\u539f\u7406\u5c31\u662f ",(0,r.jsx)(n.code,{children:"write"})," \u65b9\u6cd5\u5728\u6267\u884c\u7684\u65f6\u5019\uff0c\u4f1a\u5224\u65ad\u4e00\u4e0b\u5f53\u524d\u60f3\u8981\u5199\u5165\u7684\u6570\u636e\u91cf\uff0c\u662f\u5426\u5c0f\u4e8e\u5f53\u524d\u6d41\u4e2d\u6240\u8bbe\u7f6e\u7684\u7f13\u5b58\u5927\u5c0f\u4e0a\u9650\uff0c\u5982\u679c\u662f\u5c0f\u4e8e\u7684\uff0c\u5219\u6b63\u5e38\u6267\u884c\u5199\u5165\uff0c write \u65b9\u6cd5\u5c31\u4f1a\u8fd4\u56de\u4e00\u4e2a true\uff0c\u4f46\u662f\u5047\u8bbe\u6211\u4eec\u8981\u60f3\u53bb\u5199\u5165 100 \u4e2a\u5b57\u8282\uff0c\u53ef\u662f\u6d41\u4e2d\u7684\u7f13\u5b58\u4e0a\u9650\u624d 10 \u4e2a\u5b57\u8282\uff0c\u90a3\u8fd9\u6837\u7684\u8bdd\u5c31\u4e0d\u80fd\u518d\u6267\u884c\u4e00\u6b21\u6027\u5730\u5199\u5165\u4e86\uff0c\u5c31\u9700\u8981\u5148\u53bb\u7ecf\u8fc7\u6162\u6162\u7684\u6d88\u5316\u5904\u7406\u4e4b\u540e\uff0c\u7136\u540e\u518d\u53bb\u7ee7\u7eed\u6267\u884c\u7684\u5199\u5165\u65b0\u7684\u6570\u636e\uff0c\u800c\u8fd9\u4e2a ",(0,r.jsx)(n.code,{children:"drain"})," \u5c31\u662f\u60f3\u8981\u62bd\u5e72\u9700\u8981\u53bb\u88ab\u5199\u5165\u7684\u6570\u636e\uff0c\u5177\u4f53\u5982\u679c\u5b9e\u73b0\u540e\u9762\u518d\u6765\u4ecb\u7ecd\u3002\u5f53\u7136\u8fd8\u6709 ",(0,r.jsx)(n.code,{children:"end"}),"\u3001 ",(0,r.jsx)(n.code,{children:"error"})," \u8fd9\u6837\u7684\u4e00\u4e9b\u5fc5\u5907\u4e8b\u4ef6\uff0c\u8fd9\u91cc\u5c31\u4e0d\u53bb\u4e00\u4e00\u5217\u4e3e\u4e86\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9128:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(9474);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);