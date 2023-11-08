---
id: react-router-dom
sidebar_label: 引入 react-router-dom
title: 引入 react-router-dom
---

### 下载依赖

在 client 目录下下载依赖

```shell
pnpm i react-router-dom
```

首先我们需要更改 `tsconfig.json` 文件。

```json title="apps/client/tsconfig.json"
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
    // ...
  }
}
```

然后修改 `vite.config.ts` 为

```ts title="apps/client/vite.config.ts"
import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

这样项目就支持 `@` 前缀代表 src 引入了。

写入以下文件

```tsx title="apps/client/src/router/index.tsx"
import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@/components/layout'
import { MenuType, MenuTypeMsgMap } from '@/components/layout/constants'
import { Message } from '@/pages/message'
import { Login } from '@/pages/login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: `${MenuTypeMsgMap[MenuType.friend]}/:id`,
        element: <Message />
      },
      {
        path: `${MenuTypeMsgMap[MenuType.group]}/:id`,
        element: <Message />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])
```

```tsx title="apps/client/src/App.tsx"
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
```

```tsx title="apps/client/src/pages/account/login.tsx"
export const Login = () => {
  return <div>Login</div>
}
```

```tsx title="apps/client/src/components/layout/constants.ts"
export enum MenuType {
  friend,
  group
}

export const MenuTypeMsgMap = {
  [MenuType.friend]: 'friend-msg',
  [MenuType.group]: 'group-msg'
}
```

在这之前添加一个 cn 函数

```shell
pnpm i clsx tailwind-merge
```

```ts title="apps/client/src/lib/utils.ts"
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

```tsx title="apps/client/src/components/layout/index.tsx"
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { RoomSidebar } from './room-sidebar'
import { MenuType } from './constants'
import { cn } from '@/lib/utils'

export const AppLayout = () => {
  const [menuType, setMenuType] = useState(MenuType.friend)

  return (
    <div className="h-full flex">
      <div className="h-full w-[60px]">
        <div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setMenuType(MenuType.friend)
            }}
          >
            friend
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setMenuType(MenuType.group)
            }}
          >
            group
          </div>
        </div>
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
    </div>
  )
}
```

```tsx title="apps/client/src/components/layout/room-sidebar.tsx"
import { MenuType, MenuTypeMsgMap } from './constants'
import { useNavigate } from 'react-router-dom'

type RoomSidebarProps = {
  type: MenuType
}

export const RoomSidebar = ({ type }: RoomSidebarProps) => {
  const navigate = useNavigate()

  function toMessage(id: number) {
    navigate(`${MenuTypeMsgMap[type]}/${id}`)
  }

  return (
    <div>
      <input />
      <div>{type === MenuType.friend ? '好友列表' : '群组列表'}</div>
      {new Array(10).fill(0).map((el, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => {
            toMessage(index)
          }}
        >
          name-{index}
        </div>
      ))}
    </div>
  )
}
```

```tsx title="apps/client/src/pages/message.tsx"
import { useParams } from 'react-router-dom'

export const Message = () => {
  const { id } = useParams()

  return <div>Message: {id}</div>
}
```

```tsx title="apps/client/src/index.css"
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
	margin: 0;
	padding: 0;
}

html,
body,
#root {
	height: 100%;
}
```
