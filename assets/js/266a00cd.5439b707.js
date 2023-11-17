"use strict";(self.webpackChunkying_blog=self.webpackChunkying_blog||[]).push([[2499],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(t),d=o,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var m=2;m<a;m++)s[m]=t[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8387:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=t(8957),o=(t(9496),t(9613));const a={id:"login-register-style",sidebar_label:"\u767b\u5f55\u6ce8\u518c\u9875\u9762\u6837\u5f0f",title:"\u767b\u5f55\u6ce8\u518c\u9875\u9762\u6837\u5f0f"},s=void 0,i={unversionedId:"ying-chat/login-register-style",id:"ying-chat/login-register-style",title:"\u767b\u5f55\u6ce8\u518c\u9875\u9762\u6837\u5f0f",description:"\u5148\u4e0b\u8f7d\u56fe\u6807\u4f9d\u8d56",source:"@site/docs/ying-chat/05-login-register-style.md",sourceDirName:"ying-chat",slug:"/ying-chat/login-register-style",permalink:"/docs/ying-chat/login-register-style",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"login-register-style",sidebar_label:"\u767b\u5f55\u6ce8\u518c\u9875\u9762\u6837\u5f0f",title:"\u767b\u5f55\u6ce8\u518c\u9875\u9762\u6837\u5f0f"},sidebar:"yingChat",previous:{title:"\u5f15\u5165 react-router-dom",permalink:"/docs/ying-chat/react-router-dom"},next:{title:"\u4e3b\u9875\u9762\u6837\u5f0f",permalink:"/docs/ying-chat/main-page-style"}},l={},m=[],c={toc:m},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5148\u4e0b\u8f7d\u56fe\u6807\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pnpm i @ant-design/icons\n")),(0,o.kt)("p",null,"\u5199\u5165\u4ee5\u4e0b\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="apps/client/src/pages/account/login.tsx"',title:'"apps/client/src/pages/account/login.tsx"'},'import { Card, Form, Input, Space, Button } from \'antd\'\nimport { LockOutlined, UserOutlined } from \'@ant-design/icons\'\nimport { useNavigate } from \'react-router-dom\'\n\ntype LoginForm = {\n  username: string\n  password: string\n}\n\nexport const Login = () => {\n  const navigate = useNavigate()\n  const [form] = Form.useForm()\n\n  const onFinish = (values: LoginForm) => {\n    console.log(\'Received values of form: \', values)\n  }\n\n  return (\n    <div className="h-full flex justify-center items-center">\n      <Card className="w-[25rem]" title="Login">\n        <Form name="login" form={form} onFinish={onFinish} size="large">\n          <Form.Item\n            name="username"\n            rules={[\n              {\n                required: true,\n                message: \'Please input your Username or Email!\'\n              }\n            ]}\n          >\n            <Input\n              prefix={<UserOutlined className="site-form-item-icon" />}\n              placeholder="Username or Email"\n            />\n          </Form.Item>\n          <Form.Item\n            name="password"\n            rules={[{ required: true, message: \'Please input your Password!\' }]}\n          >\n            <Input\n              prefix={<LockOutlined className="site-form-item-icon" />}\n              type="password"\n              placeholder="Password"\n              autoComplete="true"\n            />\n          </Form.Item>\n\n          <Form.Item>\n            <Space direction="vertical" className="w-full">\n              <Button type="primary" htmlType="submit" className="w-full">\n                Log in\n              </Button>\n              <Button\n                className="w-full"\n                onClick={() => {\n                  navigate(\'/register\')\n                }}\n              >\n                Register now\n              </Button>\n            </Space>\n          </Form.Item>\n        </Form>\n      </Card>\n    </div>\n  )\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="apps/client/src/pages/account/register.tsx"',title:'"apps/client/src/pages/account/register.tsx"'},'import { Card, Form, Input, Space, Button, message } from \'antd\'\nimport { LockOutlined, UserOutlined, MailOutlined } from \'@ant-design/icons\'\nimport { useNavigate } from \'react-router-dom\'\n\ntype RegisterForm = {\n  username: string\n  email: string\n  password: string\n  subPassword: string\n  code: string\n}\n\nexport const Register = () => {\n  const navigate = useNavigate()\n  const [form] = Form.useForm<RegisterForm>()\n\n  const sendCode = () => {\n    if (!form.getFieldValue(\'email\')) {\n      message.warning(\'Please input your email first!\')\n    }\n  }\n\n  const onFinish = (values: RegisterForm) => {\n    console.log(\'Received values of form: \', values)\n  }\n\n  return (\n    <div className="h-full flex justify-center items-center">\n      <Card className="w-[25rem]" title="Register">\n        <Form name="register" form={form} onFinish={onFinish} size="large">\n          <Form.Item\n            name="username"\n            rules={[\n              {\n                required: true,\n                message: \'Please input your Username!\'\n              }\n            ]}\n          >\n            <Input\n              prefix={<UserOutlined className="site-form-item-icon" />}\n              placeholder="Username"\n              autoComplete="new-username"\n            />\n          </Form.Item>\n          <Form.Item\n            name="email"\n            rules={[\n              {\n                required: true,\n                message: \'Please input your Email!\'\n              }\n            ]}\n          >\n            <Input\n              prefix={<MailOutlined className="site-form-item-icon" />}\n              placeholder="Email"\n              autoComplete="new-email"\n            />\n          </Form.Item>\n          <Form.Item\n            name="password"\n            rules={[{ required: true, message: \'Please input your Password!\' }]}\n          >\n            <Input\n              prefix={<LockOutlined className="site-form-item-icon" />}\n              type="password"\n              placeholder="Password"\n              autoComplete="new-password"\n            />\n          </Form.Item>\n          <Form.Item\n            name="subPassword"\n            rules={[\n              { required: true, message: \'Please input your Password again!\' },\n              {\n                validator: (_, value) => {\n                  if (form.getFieldValue(\'password\') !== value) {\n                    return Promise.reject(\n                      \'The two passwords you entered did not match!\'\n                    )\n                  }\n                  return Promise.resolve()\n                }\n              }\n            ]}\n          >\n            <Input\n              prefix={<LockOutlined className="site-form-item-icon" />}\n              type="password"\n              placeholder="Input password again"\n              autoComplete="off"\n            />\n          </Form.Item>\n\n          <Form.Item\n            name="code"\n            rules={[{ required: true, message: \'Please input your code!\' }]}\n          >\n            <Space.Compact style={{ width: \'100%\' }}>\n              <Input placeholder="Code" />\n              <Button type="primary" onClick={sendCode}>\n                Send Code\n              </Button>\n            </Space.Compact>\n          </Form.Item>\n\n          <Form.Item>\n            <Space direction="vertical" className="w-full">\n              <Button type="primary" htmlType="submit" className="w-full">\n                Register now\n              </Button>\n              <Button\n                className="w-full"\n                onClick={() => {\n                  navigate(\'/login\')\n                }}\n              >\n                Log in now\n              </Button>\n            </Space>\n          </Form.Item>\n        </Form>\n      </Card>\n    </div>\n  )\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="apps/client/src/router/index.tsx"',title:'"apps/client/src/router/index.tsx"'},"export const router = createBrowserRouter([\n  // ...\n  {\n    path: '/register',\n    element: <Register />\n  }\n])\n")))}p.isMDXComponent=!0}}]);