---
id: main-page-style
sidebar_label: 主页面样式
title: 主页面样式
---

### 全局黑色主题

下载依赖

```shell
pnpm i @ant-design/happy-work-theme antd-style
```

```tsx title="apps/client/src/App.tsx"
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, theme, App as AntApp } from 'antd'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { router } from '@/router'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: '#1e1f22'
        },
        algorithm: theme.darkAlgorithm
      }}
    >
      <HappyProvider>
        <AntApp className="h-full">
          <RouterProvider router={router}></RouterProvider>
        </AntApp>
      </HappyProvider>
    </ConfigProvider>
  )
}

export default App
```

分别在登录注册的最外层包裹一个 antd 的 `Layout` 组件

```tsx title="apps/client/src/pages/account/register.tsx"
import { ..., App } from 'antd'

export const Register = () => {
	const navigate = useNavigate()
	const { message } = App.useApp()
	const [form] = Form.useForm<RegisterForm>()

	const sendCode = () => {
		if (!form.getFieldValue('email')) {
			message.warning('Please input your email first!')
		}
	}
  // ...
}
```

### 主页面样式

```css title="apps/client/src/index.css"
// ...
.fc {
  @apply flex justify-center items-center;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
```

```tsx title="apps/client/src/components/layout/index.tsx"
import { Outlet } from 'react-router-dom'
import { RoomSidebar } from './room-sidebar'
import { MenuType } from './constants'
import { useState } from 'react'
import {
  Layout,
  Button,
  Space,
  Avatar,
  Dropdown,
  MenuProps,
  Typography
} from 'antd'
import {
  EditOutlined,
  LogoutOutlined,
  PlusOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import { cn } from '@/lib/utils'
import { createStyles } from 'antd-style'

const useStyles = createStyles(({ token, css }) => ({
  navigationWrap: css`
    background-color: ${token.colorBgLayout};
  `,
  item: css`
    background-color: ${token.colorBgSpotlight};
    color: ${token.colorText};
  `,
  itemActive: css`
    background-color: ${token.colorPrimary};
  `,
  dropdownWrap: {
    padding: 0,
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary
  }
}))

const items: MenuProps['items'] = [
  {
    type: 'divider'
  },
  {
    label: 'user info',
    key: '1',
    icon: <UserOutlined />
  },
  {
    label: 'change password',
    key: '2',
    icon: <EditOutlined />
  },
  {
    type: 'divider'
  },
  {
    label: 'log out',
    key: '3',
    icon: <LogoutOutlined />,
    danger: true
  }
]

export const AppLayout = () => {
  const [menuType, setMenuType] = useState(MenuType.friend)
  const { styles } = useStyles()

  return (
    <Layout className="h-full flex flex-row">
      <div
        className={cn(
          'flex flex-col items-center w-[72px] py-4',
          styles.navigationWrap
        )}
      >
        <Space className="flex-1" direction="vertical">
          <div
            className={cn(
              `fc text-xl w-[48px] h-[48px] cursor-pointer rounded-full`,
              'hover:transition-all duration-700 hover:rounded-2xl',
              styles.item,
              menuType === MenuType.friend && `rounded-2xl ${styles.itemActive}`
            )}
            onClick={() => {
              setMenuType(MenuType.friend)
            }}
          >
            <UserOutlined />
          </div>

          <div
            className={cn(
              `fc text-xl w-[48px] h-[48px] cursor-pointer rounded-full`,
              'hover:transition-all duration-700 hover:rounded-2xl',
              styles.item,
              menuType === MenuType.group && `rounded-2xl ${styles.itemActive}`
            )}
            onClick={() => {
              setMenuType(MenuType.group)
            }}
          >
            <TeamOutlined />
          </div>

          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            size="large"
            style={{ width: '48px', height: '48px' }}
          />
        </Space>

        <Dropdown
          menu={{ items }}
          trigger={['click']}
          arrow
          dropdownRender={(menu) => (
            <div className={styles.dropdownWrap}>
              <div style={{ padding: '0 10px', paddingTop: '6px' }}>
                <Typography.Text>ying#dhfushf</Typography.Text>
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

      <div
        className={cn('h-full w-60', menuType !== MenuType.friend && 'hidden')}
      >
        <RoomSidebar type={MenuType.friend} />
      </div>

      <div
        className={cn('h-full w-60', menuType !== MenuType.group && 'hidden')}
      >
        <RoomSidebar type={MenuType.group} />
      </div>

      <main className="h-full flex-1">
        <Outlet />
      </main>
    </Layout>
  )
}
```

```tsx title="apps/client/src/components/layout/room-sidebar.tsx"
import { useMemo } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { Input, Avatar, Typography, Divider } from 'antd'
import { createStyles } from 'antd-style'
import { cn } from '@/lib/utils'
import { MenuType, MenuTypeMsgMap } from './constants'
import { SearchProps } from 'antd/es/input/Search'

type RoomSidebarProps = {
  type: MenuType
}
const useStyles = createStyles(({ token, css }) => ({
  wrapper: css`
    background-color: ${token.colorBgContainer};
    color: ${token.colorText};
  `,
  activedWrap: css`
    background-color: ${token.colorBgElevated};
  `
}))

const cover = 'https://jackdeng666.github.io/img/favicon.png'

export const RoomSidebar = ({ type }: RoomSidebarProps) => {
  const { styles } = useStyles()

  const { pathname } = useLocation()
  const { id } = useParams()

  const searchText = useMemo(() => {
    return type === MenuType.friend ? 'friend' : 'group'
  }, [type])

  const navigate = useNavigate()

  function toMessage(id: number) {
    navigate(`${MenuTypeMsgMap[type]}/${id}`)
  }

  const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
    console.log(info?.source, value)

  const isActived = (currentId: number) => {
    if (!pathname.startsWith(`/${MenuTypeMsgMap[type]}`)) {
      return false
    }
    return currentId === Number(id)
  }

  return (
    <div className={cn('flex flex-col h-full py-2', styles.wrapper)}>
      <Input.Search
        className="px-2 h-9"
        placeholder={searchText}
        onSearch={onSearch}
        enterButton
        allowClear
      />
      <Divider orientation="left" style={{ margin: '4px 0' }}>
        {searchText}
      </Divider>
      <div className="flex-1 h-0 overflow-y-auto no-scrollbar">
        {new Array(20).fill(0).map((el, index) => (
          <div
            className={cn(
              'flex p-2 w-full cursor-pointer',
              isActived(index) && styles.activedWrap
            )}
            key={index}
            onClick={() => {
              toMessage(index)
            }}
          >
            <Avatar
              shape="square"
              size={40}
              className="mr-2 flex-shrink-0"
              src={cover}
            />
            <div className="flex-1 w-0">
              <Typography.Text ellipsis={true}>
                我是{index}标题dddddsaaaaaaaaaaaatrueaaaaaaaaaaaaaaaaaaaaaaaa
              </Typography.Text>
              <Typography.Text ellipsis={true}>
                sdasdasdsadasddsaddddddddddddddddddddddddd
              </Typography.Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```
