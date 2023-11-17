---
id: login-register-style
sidebar_label: 登录注册页面样式
title: 登录注册页面样式
---

先下载图标依赖

```shell
pnpm i @ant-design/icons
```

写入以下文件

```tsx title="apps/client/src/pages/account/login.tsx"
import { Card, Form, Input, Space, Button } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

type LoginForm = {
  username: string
  password: string
}

export const Login = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const onFinish = (values: LoginForm) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className="h-full flex justify-center items-center">
      <Card className="w-[25rem]" title="Login">
        <Form name="login" form={form} onFinish={onFinish} size="large">
          <Form.Item
            name="username"
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
              autoComplete="true"
            />
          </Form.Item>

          <Form.Item>
            <Space direction="vertical" className="w-full">
              <Button type="primary" htmlType="submit" className="w-full">
                Log in
              </Button>
              <Button
                className="w-full"
                onClick={() => {
                  navigate('/register')
                }}
              >
                Register now
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
```

```tsx title="apps/client/src/pages/account/register.tsx"
import { Card, Form, Input, Space, Button, message } from 'antd'
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

type RegisterForm = {
  username: string
  email: string
  password: string
  subPassword: string
  code: string
}

export const Register = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm<RegisterForm>()

  const sendCode = () => {
    if (!form.getFieldValue('email')) {
      message.warning('Please input your email first!')
    }
  }

  const onFinish = (values: RegisterForm) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className="h-full flex justify-center items-center">
      <Card className="w-[25rem]" title="Register">
        <Form name="register" form={form} onFinish={onFinish} size="large">
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!'
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              autoComplete="new-username"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!'
              }
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
              autoComplete="new-email"
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
              autoComplete="new-password"
            />
          </Form.Item>
          <Form.Item
            name="subPassword"
            rules={[
              { required: true, message: 'Please input your Password again!' },
              {
                validator: (_, value) => {
                  if (form.getFieldValue('password') !== value) {
                    return Promise.reject(
                      'The two passwords you entered did not match!'
                    )
                  }
                  return Promise.resolve()
                }
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Input password again"
              autoComplete="off"
            />
          </Form.Item>

          <Form.Item
            name="code"
            rules={[{ required: true, message: 'Please input your code!' }]}
          >
            <Space.Compact style={{ width: '100%' }}>
              <Input placeholder="Code" />
              <Button type="primary" onClick={sendCode}>
                Send Code
              </Button>
            </Space.Compact>
          </Form.Item>

          <Form.Item>
            <Space direction="vertical" className="w-full">
              <Button type="primary" htmlType="submit" className="w-full">
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
    </div>
  )
}
```

```tsx title="apps/client/src/router/index.tsx"
export const router = createBrowserRouter([
  // ...
  {
    path: '/register',
    element: <Register />
  }
])
```
