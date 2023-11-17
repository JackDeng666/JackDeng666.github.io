---
id: client-docking-login-register
sidebar_label: 前端对接登录注册
title: 前端对接登录注册
---

### 封装 axios

```shell
pnpm i axios
```

```ts title="apps/client/src/api/request.ts"
import axios, { AxiosError } from 'axios'
import { message } from '@/providers/antd-fc-provider'
import { TOKEN, resetAuth } from '@/stores'

export const request = axios.create({
  baseURL: '/api'
})

export type ErrorRes = {
  status: number
  message: string | string[]
  timestamp?: string
  path?: string
  [key: string]: unknown
}

request.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

request.interceptors.response.use(
  (response) => {
    if (response.data.data) {
      return response.data.data
    }
    return response.data
  },
  (error: AxiosError<ErrorRes>) => {
    const res = error.response
    if (res) {
      if (res.status === 401) {
        resetAuth()
      } else {
        const msg = res.data.message
        if (Array.isArray(msg)) {
          message.error(msg[0])
        } else {
          message.error(msg)
        }
        return Promise.reject(res.data)
      }
    }
    return Promise.reject(error)
  }
)
```

```ts title="apps/client/src/api/auth.ts"
import { request } from './request'
import { UserInfo } from './user'

export type LoginDto = {
  loginName: string
  password: string
  code: string
  uid: string
}

export type LoginRes = {
  token: string
  user: UserInfo
}

export function login(body: LoginDto): Promise<LoginRes> {
  return request.post('/auth/login', body)
}

export function logout() {
  return request.get('/auth/logout')
}

export type RegisterDto = {
  username: string
  email: string
  password: string
  code: string
}

export function register(body: RegisterDto) {
  return request.post('/auth/register', body)
}

export async function sendCode(email: string) {
  return request.post('/auth/sendCode', { email })
}

export async function getCaptcha(uid: string): Promise<string> {
  return request.get('auth/catpcha', {
    params: { uid },
    headers: { Accept: 'text/plain' }
  })
}
```

```ts title="apps/client/src/api/user.ts"
import { request } from './request'

export type UserInfo = {
  id: number
  username: string
  email: string
  nickname: string
  avatar?: string
  createAt: string
  updateAt?: string
}

export function getUserInfo(id: number): Promise<UserInfo> {
  return request.get(`/user/${id}`)
}
```

```ts title="apps/client/src/api/index.ts"
import * as authApi from './auth'
import * as userApi from './user'

export type * from './auth'
export type * from './user'

export { authApi, userApi }
```

```ts title="apps/client/vite.config.ts"
// ...
export default defineConfig({
  // ...
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  }
})
```

### 使用 zustand 进行状态管理

```shell
pnpm i zustand
```

```ts title="apps/client/src/stores/use-auth-store.ts"
import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { authApi } from '@/api'
import type { UserInfo, LoginDto } from '@/api'
import { message } from '@/providers/ant-fun-call-com-provider'

export const SESSION_UID = 'session-uid'

export const TOKEN = 'token'

export const USER_INFO = 'user-info'

export const useAuthStore = create(() => {
  let sessionUid = sessionStorage.getItem(SESSION_UID) || ''
  if (!sessionUid) {
    sessionUid = nanoid()
    sessionStorage.setItem(SESSION_UID, sessionUid)
  }

  const token = localStorage.getItem(TOKEN) || ''

  const userInfoStr = localStorage.getItem(USER_INFO)
  let userInfo: UserInfo | null = null
  if (userInfoStr) {
    userInfo = JSON.parse(userInfoStr)
  }

  return {
    sessionUid,
    token,
    userInfo
  }
})

export const login = async (loginDto: LoginDto) => {
  const data = await authApi.login(loginDto)
  localStorage.setItem(TOKEN, data.token)
  localStorage.setItem(USER_INFO, JSON.stringify(data.user))
  useAuthStore.setState({ token: data.token, userInfo: data.user })
}

export const logout = async () => {
  try {
    await authApi.logout()
    resetAuth()
    message.success('logout success!')
  } catch {}
}

export const resetAuth = () => {
  localStorage.removeItem(TOKEN)
  localStorage.removeItem(USER_INFO)
  useAuthStore.setState({ token: '', userInfo: null })
}
```

```ts title="apps/client/src/stores/index.ts"
export * from './use-auth-store'
```

### 对接登录注册

```ts title="apps/client/src/pages/account/login.tsx"
// ...
import { useEffect, useState } from 'react'
import { authApi } from '@/api'
import { message } from '@/providers/ant-fun-call-com-provider'
import { useAuthStore, login } from '@/stores'

type LoginForm = {
  loginName: string
  password: string
  code: string
}

export const Login = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const [svgData, setSvgData] = useState('')

  const sessionUid = useAuthStore((state) => state.sessionUid)

  useEffect(() => {
    getCaptcha()
  }, [])

  const getCaptcha = async () => {
    try {
      const data = await authApi.getCaptcha(sessionUid)
      setSvgData(data)
    } catch {}
  }

  const onFinish = async (values: LoginForm) => {
    try {
      await login(Object.assign(values, { uid: sessionUid }))
      navigate('/')
      message.success('login success!')
    } catch {}
  }

  return (
    <Layout className="h-full flex justify-center items-center">
      <Card className="w-[25rem]" title="Login">
        <Form name="login" form={form} onFinish={onFinish} size="large">
          <Form.Item
            name="loginName" // ++
            rules={[
              {
                required: true,
                message: 'Please input your Username or Email!'
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username or Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              autoComplete="on" // ++
            />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[{ required: true, message: 'Please input your code!' }]}
          >
            <Space.Compact style={{ width: '100%' }}>
              <Input placeholder="Code" maxLength={6} />
              <div
                className="bg-white cursor-pointer w-[120px] h-[40px] rounded-r-md"
                dangerouslySetInnerHTML={{ __html: svgData }}
                onClick={getCaptcha}
              ></div>
            </Space.Compact>
          </Form.Item>
          // ...
        </Form>
      </Card>
    </Layout>
  )
}
```

```ts title="apps/client/src/pages/account/register.tsx"
// ...

export const Register = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm<RegisterForm>()
  const [sendCodeLoading, setSendCodeLoading] = useState(false)
  const [registerLoading, setRegisterLoading] = useState(false)

  const sendCode = async () => {
    const email = form.getFieldValue('email')
    if (!email) {
      return message.warning('Please input your email first!')
    }
    try {
      setSendCodeLoading(true)
      await authApi.sendCode(email)
      message.success('send code success!')
    } catch {
    } finally {
      setSendCodeLoading(false)
    }
  }

  const onFinish = async (values: RegisterForm) => {
    try {
      setRegisterLoading(true)
      await authApi.register(Object.assign(values, { subPassword: undefined }))
      message.success('register success!')
      navigate('/login')
    } catch {
    } finally {
      setRegisterLoading(false)
    }
  }

  return (
    <Layout className="h-full flex justify-center items-center">
      <Card className="w-[25rem]" title="Register">
        <Form name="register" form={form} onFinish={onFinish} size="large">
          // ...
          <Form.Item
            name="code"
            rules={[{ required: true, message: 'Please input your code!' }]}
          >
            <Space.Compact style={{ width: '100%' }}>
              <Input placeholder="Code" maxLength={6} />
              <Button
                type="primary"
                loading={sendCodeLoading}
                onClick={sendCode}
              >
                Send Code
              </Button>
            </Space.Compact>
          </Form.Item>
          <Form.Item>
            <Space direction="vertical" className="w-full">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                loading={registerLoading}
              >
                Register now
              </Button>
              <Button
                className="w-full"
                onClick={() => {
                  navigate('/login')
                }}
              >
                Log in now
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  )
}
```

### 添加路由守卫逻辑

```ts title="apps/client/src/router/auth-route.tsx"
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/stores'

type AuthRoteProps = {
  children: React.ReactElement
}

export const AuthRoute = ({ children }: AuthRoteProps) => {
  const token = useAuthStore((state) => state.token)

  if (!token) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}
```

```ts title="apps/client/src/router/index.tsx"
// ...
import { AuthRoute } from './auth-route'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthRoute>
        <AppLayout />
      </AuthRoute>
    )
    // ...
  }
  // ...
])
```

### 添加退出登录功能

服务端代码

```ts title="apps/server/src/modules/user/auth.controller.ts"
// ...
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // ...
  @ApiOperation({
    summary: 'logout'
  })
  @Get('logout')
  logout(@Headers('authorization') authorization: string) {
    if (!authorization) {
      throw new HttpException('unauthorized', HttpStatus.UNAUTHORIZED)
    }
    return this.authService.logout(authorization.split('Bearer ')[1])
  }
}
```

```ts title="apps/server/src/modules/user/auth.service.ts"
// ...

@Injectable()
export class AuthService {
  // ...
  async logout(token: string) {
    await this.redisClient.del(token)
  }
}
```

前端

```ts title="apps/client/src/components/layout/index.tsx"
// ...
import { useAuthStore, logout } from '@/stores'

// ...

const items: MenuProps['items'] = [
  // ...
  {
    label: 'log out',
    key: '3',
    icon: <LogoutOutlined />,
    danger: true,
    onClick: logout
  }
]

export const AppLayout = () => {
  const [menuType, setMenuType] = useState(MenuType.friend)
  const { styles } = useStyles()

  const userInfo = useAuthStore((state) => state.userInfo)

  return (
    <Layout className="h-full flex flex-row">
      <div
        className={cn(
          'flex flex-col items-center w-[72px] py-4',
          styles.navigationWrap
        )}
      >
        // ...
        <Dropdown
          menu={{ items }}
          trigger={['click']}
          arrow
          dropdownRender={(menu) => (
            <div className={styles.dropdownWrap}>
              <div style={{ padding: '0 10px', paddingTop: '6px' }}>
                <Typography.Text>{userInfo?.nickname}</Typography.Text>
              </div>
              {menu}
            </div>
          )}
        >
          <Avatar
            className="fc cursor-pointer w-[48px] h-[48px]"
            size="large"
            icon={<UserOutlined />}
          >
            user
          </Avatar>
        </Dropdown>
      </div>
      // ...
    </Layout>
  )
}
```

### 组件外使用 antd 函数组件

```ts title="apps/client/src/providers/ant-fun-call-com-provider.ts"
import { App } from 'antd'
import type { MessageInstance } from 'antd/es/message/interface'
import type { ModalStaticFunctions } from 'antd/es/modal/confirm'
import type { NotificationInstance } from 'antd/es/notification/interface'

let message: MessageInstance
let notification: NotificationInstance
let modal: Omit<ModalStaticFunctions, 'warn'>

export const AntFunCallComProvider = () => {
  const staticFunction = App.useApp()
  message = staticFunction.message
  modal = staticFunction.modal
  notification = staticFunction.notification
  return null
}

export { message, notification, modal }
```

```ts title="apps/client/src/App.tsx"
// ...
import { AntFunCallComProvider } from '@/providers/ant-fun-call-com-provider'

function App() {
  // ...
  ;<HappyProvider>
    <AntApp className="h-full">
      <AntFunCallComProvider /> // ++
      <RouterProvider router={router}></RouterProvider>
    </AntApp>
  </HappyProvider>
  // ...
}

export default App
```
