---
id: update-userinfo
sidebar_label: 修改用户信息功能添加
title: 修改用户信息功能添加
---

本节来实现更新用户信息的整个功能。

## 更新用户信息接口

先添加一个 `UpdateUserDto`。

```ts title="packages/shared/src/dto/user.dto.ts"
import { IsOptional, MaxLength, MinLength } from 'class-validator'

export class UpdateUserDto {
  @MinLength(6)
  @MaxLength(20)
  @IsOptional()
  username?: string

  @MinLength(2)
  @MaxLength(20)
  @IsOptional()
  nickname?: string
}
```

在`index.ts`里面导出。

```ts title="packages/shared/src/dto/index.ts"
// ...
export * from './user.dto'
```

在`UserService`里实现`updateUserInfo`函数去更新用户信息，前面判断一下用户的登录名是否唯一就好。

```ts title="apps/server/src/modules/user/user.service.ts"
// ...
import { UpdateUserDto } from '@ying-chat/shared'

@Injectable()
export class UserService {
  // ...

  async updateUserInfo(userId: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.username) {
      const user = await this.userRepository.findOne({
        where: { username: updateUserDto.username }
      })
      if (user && user.id !== userId) {
        throw new HttpException(
          'username already exists',
          HttpStatus.NOT_ACCEPTABLE
        )
      }
    }

    await this.userRepository.update({ id: userId }, updateUserDto)
  }
}
```

在`UserController`里添加更新用户信息接口。

```ts title="apps/server/src/modules/user/user.controller.ts"
// ...
import {
  // ...
  Post,
  Req,
  Body
} from '@nestjs/common'
import { UpdateUserDto } from '@ying-chat/shared'
// ...
export class UserController {
  // ...

  @ApiOperation({
    summary: 'updateUserInfo'
  })
  @Post()
  updateUserInfo(
    @Req() request: Request,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.updateUserInfo(request.userId, updateUserDto)
  }
}
```

## 客户端对接

### 接口准备

在`api`文件夹下新建一个`user.ts`，把更新用户信息和获取用户信息接口都加上。

```ts title="apps/client/src/api/user.ts"
import { UpdateUserDto, UserVo } from '@ying-chat/shared'
import { request } from './request'

export function getUserInfo(): Promise<UserVo> {
  return request.get('/user')
}

export function updateUserInfo(updateUserInfoDto: UpdateUserDto) {
  return request.post('/user', updateUserInfoDto)
}
```

在`index.ts`导出一下。

```ts title="apps/client/src/api/index.ts"
import * as authApi from './auth'
import * as userApi from './user' // +

export {
  authApi,
  userApi // +
}
```

### 修改用户信息弹窗编写

在`components`下新建一个`modals`文件夹，然后添加一个`user-info-modal.tsx`。

```tsx title="apps/client/src/components/modals/user-info-modal.tsx"
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { toast } from 'sonner'
import { UpdateUserDto } from '@ying-chat/shared'
import { userApi } from '@/api'

type UserInfoModalProps = {
  open: boolean
  close: () => void
  confirmSuccess?: () => void
  initialValues: UpdateUserDto
}

const resolver = classValidatorResolver(UpdateUserDto)

export const UserInfoModal = ({
  open,
  close,
  confirmSuccess,
  initialValues
}: UserInfoModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UpdateUserDto>({
    resolver
  })
  const [confirmLoading, setConfirmLoading] = useState(false)

  const onFinish = async (values: UpdateUserDto) => {
    try {
      setConfirmLoading(true)
      await userApi.updateUserInfo(values)
      toast.success('update user info successfully!')
      close()
      confirmSuccess && confirmSuccess()
    } catch {
    } finally {
      setConfirmLoading(false)
    }
  }

  return (
    <Modal isOpen={open} onClose={close} isDismissable={false}>
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">User Info</ModalHeader>
            <form onSubmit={handleSubmit(onFinish)}>
              <ModalBody>
                <Input
                  label="Username"
                  maxLength={20}
                  defaultValue={initialValues.username}
                  isInvalid={Boolean(errors.username)}
                  errorMessage={errors.username?.message}
                  {...register('username')}
                />
                <Input
                  label="Nickname"
                  maxLength={20}
                  defaultValue={initialValues.nickname}
                  isInvalid={Boolean(errors.nickname)}
                  errorMessage={errors.nickname?.message}
                  {...register('nickname')}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="ghost"
                  isDisabled={confirmLoading}
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  isLoading={confirmLoading}
                  type="submit"
                >
                  Update
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
```

新建一个`index.ts`导出。

```ts title="apps/client/src/components/modals/index.ts"
export * from './user-info-modal'
```

### 引入

在`NavSidebar`中引入

```tsx title="apps/client/src/components/layout/nav-sidebar.tsx"
// ...
import { useMemo, useState } from 'react'
import {
  // ...
  setUserInfo
} from '@/stores'
import { UserInfoModal } from '@/components/modals'
import { userApi } from '@/api'

export const NavSidebar = () => {
  // ...

  const [openUserModal, setOpenUserModal] = useState(false)
  const userModalInitialValues = useMemo(() => {
    return {
      username: userInfo?.username || '',
      nickname: userInfo?.nickname || ''
    }
  }, [userInfo])

  const getUserInfo = async () => {
    try {
      const newUserInfo = await userApi.getUserInfo()
      setUserInfo(newUserInfo)
    } catch {}
  }

  return (
    <div className="flex flex-col gap-4 items-center w-[72px] py-4 bg-content1">
      {/*  */}

      <Dropdown placement="top-start" showArrow>
        {/*  */}
        <DropdownMenu
          aria-label="Profile Actions"
          disabledKeys={['profile']}
          variant="flat"
        >
          {/*  */}

          <DropdownSection showDivider>
            <DropdownItem
              key="user-info"
              startContent={<UserRound className="w-5 h-5" />}
              onClick={() => {
                setOpenUserModal(true)
              }}
            >
              User Info
            </DropdownItem>
            {/*  */}
          </DropdownSection>

          {/*  */}
        </DropdownMenu>
      </Dropdown>

      <UserInfoModal
        open={openUserModal}
        close={() => setOpenUserModal(false)}
        confirmSuccess={getUserInfo}
        initialValues={userModalInitialValues}
      />
    </div>
  )
}
```

调试一下。

![](./img/12/01.gif)

本节到此结束。
