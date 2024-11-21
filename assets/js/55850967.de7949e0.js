"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[9152],{4170:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var t=s(3274),c=s(9128);const d={id:"tcp",sidebar_label:"TCP\u534f\u8bae",title:"TCP\u534f\u8bae"},i=void 0,r={id:"nodejs/net/tcp",title:"TCP\u534f\u8bae",description:"\u672c\u7bc7\u6211\u4eec\u6765\u770b\u4e00\u4e0b TCP \u534f\u8bae\u7684\u4e00\u4e9b\u5185\u5bb9\uff0c\u5728\u7f51\u7edc\u5206\u5c42\u5f53\u4e2d\uff0c\u5b83\u662f\u5b58\u5728\u4e8e\u4f20\u8f93\u5c42\u91cc\u7684\u4e00\u4e2a\u534f\u8bae\uff0c\u662f\u76f4\u63a5\u9762\u5411\u8fde\u63a5\u7684\u7f51\u7edc\u534f\u8bae\uff0c\u4e00\u822c\u5b83\u7528\u4e8e\u53bb\u5904\u7406\u5b9e\u65f6\u7684\u901a\u4fe1\uff0c\u4e5f\u6b63\u662f\u56e0\u4e3a\u5982\u6b64\uff0c\u6240\u4ee5\u5b83\u5177\u6709\u6570\u636e\u4f20\u8f93\u53ef\u9760\u6027\u9ad8\u7684\u8fd9\u6837\u4e00\u4e2a\u7279\u70b9\uff0c\u4f46\u5177\u6709\u4e86\u5b9e\u65f6\u7684\u8fd9\u6837\u4e00\u4e2a\u7279\u70b9\u4e4b\u540e\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u5728\u4f20\u8f93\u6548\u7387\u4e0a\u76f8\u5bf9\u4e8e UDP \u6765\u8bf4\u5c31\u4f1a\u4f4e\u4e00\u4e9b\u3002",source:"@site/docs/nodejs/11-net/02-tcp.md",sourceDirName:"nodejs/11-net",slug:"/nodejs/net/tcp",permalink:"/docs/nodejs/net/tcp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"tcp",sidebar_label:"TCP\u534f\u8bae",title:"TCP\u534f\u8bae"},sidebar:"nodejs",previous:{title:"\u7f51\u7edc\u901a\u8baf\u539f\u7406",permalink:"/docs/nodejs/net/net-intro"},next:{title:"\u521b\u5efa TCP \u901a\u4fe1",permalink:"/docs/nodejs/net/net-tcp-create"}},o={},l=[{value:"\u4e09\u6b21\u63e1\u624b\u4e0e",id:"\u4e09\u6b21\u63e1\u624b\u4e0e",level:3},{value:"\u56db\u6b21\u6325\u624b",id:"\u56db\u6b21\u6325\u624b",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u672c\u7bc7\u6211\u4eec\u6765\u770b\u4e00\u4e0b TCP \u534f\u8bae\u7684\u4e00\u4e9b\u5185\u5bb9\uff0c\u5728\u7f51\u7edc\u5206\u5c42\u5f53\u4e2d\uff0c\u5b83\u662f\u5b58\u5728\u4e8e\u4f20\u8f93\u5c42\u91cc\u7684\u4e00\u4e2a\u534f\u8bae\uff0c\u662f\u76f4\u63a5\u9762\u5411\u8fde\u63a5\u7684\u7f51\u7edc\u534f\u8bae\uff0c\u4e00\u822c\u5b83\u7528\u4e8e\u53bb\u5904\u7406\u5b9e\u65f6\u7684\u901a\u4fe1\uff0c\u4e5f\u6b63\u662f\u56e0\u4e3a\u5982\u6b64\uff0c\u6240\u4ee5\u5b83\u5177\u6709\u6570\u636e\u4f20\u8f93\u53ef\u9760\u6027\u9ad8\u7684\u8fd9\u6837\u4e00\u4e2a\u7279\u70b9\uff0c\u4f46\u5177\u6709\u4e86\u5b9e\u65f6\u7684\u8fd9\u6837\u4e00\u4e2a\u7279\u70b9\u4e4b\u540e\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u5728\u4f20\u8f93\u6548\u7387\u4e0a\u76f8\u5bf9\u4e8e UDP \u6765\u8bf4\u5c31\u4f1a\u4f4e\u4e00\u4e9b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u90a3\u5728\u8fd9\u4e0b\u9762\u7684\u56fe\u91cc\u9762\uff0c\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e0b\u5b83\u7684\u62a5\u6587\u7ed3\u6784\u3002"}),"\n",(0,t.jsx)("p",{class:"text--center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(9082).A+"",width:"693",height:"542"})})}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u7ed9\u51fa\u4e86\u4e00\u4e2a\u5b8c\u6574\u7684 tcp \u534f\u8bae\u62a5\u6587\u5e94\u8be5\u5177\u6709\u7684\u4fe1\u606f\uff0c\u800c\u5bf9\u4e8e\u6211\u4eec\u6765\u8bf4\uff0c\u53ea\u9700\u8981\u53bb\u4e86\u89e3\u7aef\u53e3\u548c\u51e0\u4e2a\u5e38\u89c1\u63a7\u5236\u5b57\u6bb5\u7684\u610f\u601d\u5c31\u53ef\u4ee5\u4e86\uff0c\u9996\u5148\u7aef\u53e3\u7684\u4f5c\u7528\u5c31\u662f\u4e3a\u4e86\u6807\u660e\u81ea\u5df1\u548c\u76ee\u6807\u5e94\u7528\u8fdb\u7a0b\uff0c\u800c\u5728\u63a7\u5236\u5b57\u6bb5\u4e2d\uff0c",(0,t.jsx)(n.code,{children:"SYN=1"})," \u7684\u65f6\u5019\u5c31\u8868\u793a\u5f53\u524d\u4e3b\u673a\u8981\u8bf7\u6c42\u5efa\u7acb\u4e00\u4e2a\u8fde\u63a5\uff0c",(0,t.jsx)(n.code,{children:"FIN=1"})," \u7684\u65f6\u5019\u5c31\u8868\u793a\u8981\u53bb\u8bf7\u6c42\u65ad\u5f00\u8fde\u63a5\uff0c ",(0,t.jsx)(n.code,{children:"ACK=1"})," \u7684\u65f6\u5019\u5c31\u8868\u793a\u6570\u636e\u4fe1\u606f\u7684\u786e\u8ba4\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4e09\u6b21\u63e1\u624b\u4e0e",children:"\u4e09\u6b21\u63e1\u624b\u4e0e"}),"\n",(0,t.jsx)(n.p,{children:"\u90a3\u660e\u786e\u4e86\u8fd9\u4e9b\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u53bb\u770b\u4e00\u4e0b\u4e09\u6b21\u63e1\u624b\u7684\u5efa\u7acb\u8fc7\u7a0b\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u9996\u5148\u5efa\u7acb\u63e1\u624b\u5f88\u660e\u663e\u7684\u662f\u4e24\u4e2a\u4eba\u7684\u4e8b\u60c5\uff0c\u6240\u4ee5\u8fd9\u91cc\u6211\u4eec\u5c31\u4ee5 cs \u7f51\u7edc\u67b6\u6784\u4e3a\u4f8b\uff0c\u90a3\u5de6\u4fa7\u6211\u4eec\u5c31\u8868\u793a\u5ba2\u6237\u7aef\uff0c\u53f3\u4fa7\u6211\u4eec\u5c31\u8868\u793a\u670d\u52a1\u7aef\uff0c\u7b2c\u4e00\u6b21\u7684\u65f6\u5019\uff0c\u5ba2\u6237\u7aef\u8981\u5411\u670d\u52a1\u7aef\u53d1\u9001\u4e00\u4e2a\u5efa\u7acb\u8fde\u63a5\u7684\u8bf7\u6c42\uff0c\u6211\u4eec\u5c31\u7528 ",(0,t.jsx)(n.code,{children:"SYN=1"})," \u6765\u8fdb\u884c\u8868\u793a\uff0c\u7136\u540e\u670d\u52a1\u7aef\u63a5\u6536\u5230\u4e86\u8fd9\u4e2a\u8bf7\u6c42\u4e4b\u540e\uff0c\u5c31\u4f1a\u56de\u9001\u4e00\u6761\u6d88\u606f\uff0c\u8868\u793a\u786e\u8ba4\u63a5\u6536\u5230\u4e86\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\uff0c\u6211\u4eec\u5c31\u53bb\u7528 ",(0,t.jsx)(n.code,{children:"ACK=1"})," \u6765\u8fdb\u884c\u8868\u793a\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4efb\u4f55\u4e00\u6b21\u5b8c\u6574\u7684\u901a\u4fe1\u90fd\u662f\u6709\u6765\u6709\u56de\u7684\uff0c\u8fd9\u4e24\u6b21\u8bf7\u6c42\u548c\u56de\u9001\u5b8c\u6210\u4e4b\u540e\uff0c\u5c31\u76f8\u5f53\u4e8e\u662f\u5efa\u7acb\u4e86\u4e00\u6761\u7531\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u53d1\u9001\u6570\u636e\u7684\u901a\u9053\uff0c\u6ce8\u610f\u53ea\u662f\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\uff0c\u6240\u4ee5\u670d\u52a1\u7aef\u5982\u679c\u60f3\u8981\u53bb\u53d1\u9001\u6d88\u606f\u7ed9\u5ba2\u6237\u7aef\uff0c\u4ed6\u8fd8\u9700\u8981\u518d\u53bb\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\u7ed9\u5ba2\u6237\u7aef\uff0c\u8868\u793a\u4ed6\u4e5f\u60f3\u53bb\u5efa\u7acb\u4e00\u4e2a\u8fde\u63a5\uff0c\u90a3\u6211\u4eec\u4e5f\u7528 ",(0,t.jsx)(n.code,{children:"SYN=1"})," \u6765\u8fdb\u884c\u8868\u793a\uff0c\u540c\u6837\u5ba2\u6237\u7aef\u4e5f\u9700\u8981\u53bb\u56de\u9001\u4e00\u4e2a\u786e\u8ba4\u6d88\u606f\u7ed9\u670d\u52a1\u7aef\uff0c\u8868\u793a\u63a5\u6536\u5230\u4e86\u8fd9\u4e2a\u8bf7\u6c42\uff0c\u6211\u4eec\u540c\u6837\u662f\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"ACK=1"})," \u6765\u8fdb\u884c\u8868\u793a\uff0c\u81f3\u6b64\u5c31\u5efa\u7acb\u4e86\u4e00\u6761\u7531\u670d\u52a1\u7aef\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u6570\u636e\u7684\u901a\u9053\u3002"]}),"\n",(0,t.jsx)("p",{class:"text--center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8915).A+"",width:"560",height:"495"})})}),"\n",(0,t.jsxs)(n.p,{children:["\u6240\u4ee5\u8fd9\u56db\u6b21\u8fde\u63a5\u53d1\u751f\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u6709\u4e86\u4e00\u4e2a\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u4e4b\u95f4\uff0c\u53bb\u8fdb\u884c\u6570\u636e\u901a\u4fe1\u7684\u4e00\u4e2a\u53cc\u5411\u901a\u9053\u3002\u4e0d\u8fc7\u6211\u4eec\u8fd9\u91cc\u770b\u8d77\u6765\u662f\u56db\u6b21\u63e1\u624b\uff0c\u800c\u4e0d\u662f\u4e09\u6b21\uff0c\u672c\u8eab\u6765\u8bf4\u5c31\u5e94\u8be5\u662f\u56db\u6b21\u63e1\u624b\uff0c\u53ea\u4e0d\u8fc7\u5728\u5b9e\u9645\u5904\u7406\u7684\u65f6\u5019\uff0c\u670d\u52a1\u7aef\u4f1a\u5728\u56de\u590d\u5ba2\u6237\u7aef ",(0,t.jsx)(n.code,{children:"ACK=1"})," \u7684\u65f6\u5019\uff0c\u540c\u65f6\u518d\u53bb\u53d1\u9001\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"SYN=1"}),"\uff0c\u4e5f\u5c31\u662f\u8bf4\u4ed6\u4f1a\u53bb\u5c06\u8fd9\u4e24\u6b21\u63e1\u624b\u8fdb\u884c\u5408\u5e76\uff0c\u90a3\u8fd9\u6837\u6700\u7ec8\u7684\u5c31\u662f\u4e09\u6b21\u63e1\u624b\u3002"]}),"\n",(0,t.jsx)("p",{class:"text--center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(9516).A+"",width:"560",height:"496"})})}),"\n",(0,t.jsx)(n.h3,{id:"\u56db\u6b21\u6325\u624b",children:"\u56db\u6b21\u6325\u624b"}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u5b8c\u4e86\u63e1\u624b\u4e4b\u540e\uff0c\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e0b\u6325\u624b\uff0c\u5f53\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u7684\u6570\u636e\u4f20\u8f93\u7ed3\u675f\u4e4b\u540e\uff0c\u5c31\u5e94\u8be5\u53bb\u65ad\u5f00\u8fde\u63a5\uff0c\u8ba9\u670d\u52a1\u7aef\u53ef\u4ee5\u53bb\u5904\u7406\u5176\u4ed6\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u3002"}),"\n",(0,t.jsx)("p",{class:"text--center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(1141).A+"",width:"560",height:"494"})})}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\u5ba2\u6237\u7aef\u4f1a\u53bb\u53d1\u9001\u4e00\u4e2a\u65ad\u5f00\u8fde\u63a5\u7684\u8bf7\u6c42\u7ed9\u670d\u52a1\u7aef\uff0c\u7136\u540e\u670d\u52a1\u7aef\u4f1a\u56de\u9001\u4e00\u4e2a\u6d88\u606f\u786e\u8ba4\uff0c\u90a3\u8fd9\u4e2a\u65f6\u5019\u5c31\u76f8\u5f53\u4e8e\u662f\u65ad\u5f00\u4e86\u5ba2\u6237\u7aef\u5230\u670d\u52a1\u7aef\u7684\u6570\u636e\u901a\u9053\uff0c\u90a3\u63a5\u7740\u670d\u52a1\u7aef\u4f1a\u53d1\u9001\u4e00\u4e2a\u65ad\u5f00\u8fde\u63a5\u7684\u8bf7\u6c42\u7ed9\u5ba2\u6237\u7aef\uff0c\u5ba2\u6237\u7aef\u6536\u5230\u4e4b\u540e\u4e5f\u4f1a\u56de\u9001\u4e00\u4e2a\u786e\u8ba4\u6d88\u606f\u7ed9\u670d\u52a1\u7aef\uff0c\u90a3\u8fd9\u6837\u7684\u8bdd\u5c31\u65ad\u5f00\u4e86\u670d\u52a1\u7aef\u4e0e\u5ba2\u6237\u7aef\u4e4b\u95f4\u7684\u6570\u636e\u901a\u9053\uff0c\u6240\u4ee5\u8fd9\u4e2a\u8fc7\u7a0b\u5c31\u6709\u4e86\u56db\u6b21\u6325\u624b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u90a3\u8bf4\u5230\u8fd9\u91cc\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u60f3\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u5c06\u670d\u52a1\u7aef\u56de\u9001\u786e\u8ba4\u6d88\u606f\u7ed9\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u548c\u670d\u52a1\u7aef\u8bf7\u6c42\u4e0e\u5ba2\u6237\u7aef\u65ad\u5f00\u8fde\u63a5\u7684\u8bf7\u6c42\u53bb\u8fdb\u884c\u5408\u5e76\u5462\uff1f\u90a3\u8fd9\u6837\u6211\u4eec\u4e0d\u5c31\u4e5f\u662f\u4e09\u6b21\u6325\u624b\u4e86\u5417\uff0c\u8fd9\u662f\u56e0\u4e3a\u4e00\u4e2a\u670d\u52a1\u7aef\u8981\u670d\u52a1\u4e8e\u591a\u4e2a\u5ba2\u6237\u7aef\uff0c\u6211\u4eec\u4e0d\u80fd\u4fdd\u8bc1\u67d0\u4e00\u4e2a\u5ba2\u6237\u7aef\u5c06\u8bf7\u6c42\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\u4e4b\u540e\uff0c\u670d\u52a1\u7aef\u5c31\u80fd\u7acb\u5373\u5c06\u7ed3\u679c\u6570\u636e\u5168\u90e8\u4f20\u8f93\u56de\u7ed9\u5f53\u524d\u7684\u5ba2\u6237\u7aef\uff0c\u90a3\u610f\u601d\u5c31\u662f\u8bf4\uff0c\u6709\u4e9b\u65f6\u5019\u5ba2\u6237\u7aef\u7684\u786e\u5df2\u7ecf\u628a\u6240\u6709\u7684\u6570\u636e\u90fd\u53d1\u7ed9\u670d\u52a1\u7aef\u4e86\uff0c\u4f46\u662f\u670d\u52a1\u7aef\u8fd8\u6ca1\u6709\u5c06\u5ba2\u6237\u7aef\u60f3\u8981\u7684\u6570\u636e\u90fd\u5168\u90e8\u4f20\u56de\uff0c\u6240\u4ee5\u5728\u65ad\u5f00\u8fde\u63a5\u7684\u65f6\u5019\uff0c\u6211\u4eec\u662f\u8981\u5206\u5f00\u5904\u7406\u7684\uff0c\u56e0\u6b64\u6325\u624b\u662f\u8981\u6709\u56db\u6b21\uff0c\u800c\u63e1\u624b\u5c31\u53ef\u4ee5\u5408\u5e76\u4e3a\u4e09\u6b21\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},9082:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/02-7d88d12120995a3dee01d61d015db28d.png"},8915:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/03-32b7eae6e51b503d90d7e935410a1c18.png"},9516:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/04-384730e8e209e7c0129ed72f24a1ea51.png"},1141:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/05-d355a869adfeeff6c9fb7d2afa2e3ee2.png"},9128:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var t=s(9474);const c={},d=t.createContext(c);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);