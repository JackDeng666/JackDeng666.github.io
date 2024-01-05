---
id: user-avatar-and-integrated-minio
sidebar_label: 用户头像和集成MinIO
title: 用户头像和集成MinIO
---

本节来实现用户头像的功能，本应用将使用 MinIO 来实现应用产生的所有静态资源的存储，如用户头像、消息图片、视频等。

首先先让我介绍一下 MinIO ：它是一个开源的对象存储服务器，它可以帮助你构建自己的私有云存储解决方案。它的设计目标是兼容 Amazon S3（Simple Storage Service），这意味着你可以使用与 S3 相同的 API 来管理和访问存储在 MinIO 中的对象。
它的主要用途是作为对象存储解决方案，用于存储和管理大量的非结构化数据，如图片、视频、日志、备份文件等。

[minio 启动文档](https://min.io/docs/minio/container/index.html)

## 启动 MinIO 容器

```shell
docker run --name minio-test -d \
  -p 9000:9000 \
  -p 9090:9090 \
  -v D:/DockerData/ContainerBackup/minio-data:/data \
  -e MINIO_ROOT_USER=ying \
  -e MINIO_ROOT_PASSWORD=ying123456 \
  minio/minio server /data --console-address ":9090"
```

`/data` 是 MinIO 容器内的数据存储位置

`--console-address` 是 MinIO 的后台管理地址端口

如果是在 windows 下使用 GitBash 跑命令，把 `/data` 改为 `./data` ，否则会无法正确使用路径。

如果是在 windows 下使用 cmd 跑命令，把 `\` 换行符改为 `^` 即可。

启动完成后即可打开 MinIO 的后台管理系统

[http://localhost:9090](http://localhost:9090)

然后在里面添加一个 `Access Key`，后面服务端要用这个`Access Key`连接 MinIO。

## 集成 MinIO

### MinIO 配置初始化

在服务端下来依赖。

```shell title="apps/server"
pnpm i minio
```

[minio 的 js 库文档](https://min.io/docs/minio/linux/developers/javascript/API.html)

添加新的配置

```json title="apps/server/.env"
# minio
MINIO_HOST=localhost
MINIO_PORT=9000
MINIO_ACCESS_KEY=Jd86dW5F1aXvfcQroe5e
MINIO_SECRET_KEY=RlQqCWexfztJAQ8A17VS3bdZAj22WhFrWvJBbBQ6
```

新建 `minio.config.ts`

```ts title="apps/server/src/config/minio.config.ts"
import { registerAs } from '@nestjs/config'

export const minioConfig = registerAs('minioConfig', () => {
  if (!process.env.MINIO_HOST) {
    throw new Error('MINIO_HOST is not exist')
  }
  if (!process.env.MINIO_PORT) {
    throw new Error('MINIO_PORT is not exist')
  }
  if (!process.env.MINIO_ACCESS_KEY) {
    throw new Error('MINIO_ACCESS_KEY is not exist')
  }
  if (!process.env.MINIO_SECRET_KEY) {
    throw new Error('MINIO_SECRET_KEY is not exist')
  }
  return {
    host: process.env.MINIO_HOST,
    port: +process.env.MINIO_PORT,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY
  }
})
```

别忘了导出

```ts title="apps/server/src/config/index.ts"
// ...
export * from './minio.config'
```

记得在`AppModule`里加载一下`minioConfig`。

```ts title="apps/server/src/app.module.ts"
import {
  //...
  minioConfig
} from '@/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        // ...
        minioConfig
      ]
    })
    // ...
  ]
  // ...
})
export class AppModule {}
```

### shared 包配置

在`shared`包新建一个`enum`文件夹，添加一个`file.enum.ts`文件。

```ts title="packages/shared/src/enum/file.enum.ts"
export enum FileType {
  Avatar,
  Cover,
  Image,
  Video
}
```

新建一个`index.ts`导出。

```ts title="packages/shared/src/enum/index.ts"
export * from './file.enum'
```

导出整个`enum`。

```ts title="packages/shared/src/index.ts"
// ...
export * from './enum'
```

新建一个`file.vo.ts`。

```ts title="packages/shared/src/vo/file.vo.ts"
import { FileType } from '../enum'

export type FileVo = {
  id: number
  name: string
  type: FileType
  url: string
}
```

导出。

```ts title="packages/shared/src/vo/index.ts"
// ...
export * from './file.vo'
```

### 实现上传文件模块

添加一个`FileEntity`。

```ts title="apps/server/src/modules/db/entities/file.entity.ts"
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { FileType } from '@ying-chat/shared'
import { BaseEntity, UserEntity } from '.'

@Entity({ name: 'file' })
export class FileEntity extends BaseEntity {
  @Column({
    length: 50,
    unique: true
  })
  path: string

  @Column({
    type: 'enum',
    enum: FileType
  })
  type: FileType

  @Column({
    length: 2083
  })
  url: string

  @Column()
  createById: number

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  createBy: UserEntity
}
```

在`index.ts`导出一下。

```ts title="apps/server/src/modules/db/entities/index.ts"
// ...
export * from './file.entity'
```

在`modules`下新建 `file` 文件夹，然后添加一个 `constant.ts`。

```ts title="apps/server/src/modules/file/constant.ts"
export const MINIO_TOKEN = 'MINIO_CLIENT'

export const BUCKET_NAME = 'ying-chat'

export const EXPIR_SECONDS = 24 * 60 * 60
```

添加一个`file.service.ts`。

```ts title="apps/server/src/modules/file/file.service.ts"
import { Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Client, ItemBucketMetadata } from 'minio'
import { nanoid } from 'nanoid'
import { FileType } from '@ying-chat/shared'
import { FileEntity } from '@/modules/db/entities'
import { BUCKET_NAME, EXPIR_SECONDS, MINIO_TOKEN } from './constant'

type UploadFileOptions = {
  file: Express.Multer.File
  fileType: FileType
  userId: number
  meteData?: ItemBucketMetadata
}

@Injectable()
export class FileService {
  @Inject(MINIO_TOKEN)
  private readonly minioClient: Client

  @InjectRepository(FileEntity)
  private readonly minioFileRepository: Repository<FileEntity>

  async uploadFile({ file, fileType, userId, meteData }: UploadFileOptions) {
    const fileName = nanoid()
    const objectName = `${fileType}/${fileName}`

    await this.minioClient.putObject(BUCKET_NAME, objectName, file.buffer, {
      'Content-Type': file.mimetype,
      userId,
      ...meteData
    })
    const url = await this.getPresignedUrl(objectName)

    const minioFile = this.minioFileRepository.create({
      type: fileType,
      path: objectName,
      url,
      createById: userId
    })
    await this.minioFileRepository.save(minioFile)

    return minioFile
  }

  getPresignedUrl(objectName: string) {
    return this.minioClient.presignedUrl(
      'get',
      BUCKET_NAME,
      objectName,
      EXPIR_SECONDS
    )
  }
}
```

```shell title="apps/server"
pnpm i -D @types/multer
```

安装一下这个库，这样就能使用`Express.Multer.File`这个类型。

添加一个`FileModule`。

```ts title="apps/server/src/modules/file/file.module.ts"
import { Global, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Client } from 'minio'
import { ConfigType } from '@nestjs/config'
import { minioConfig } from '@/config'
import { FileEntity } from '@/modules/db/entities'
import { FileService } from './file.service'
import { BUCKET_NAME, MINIO_TOKEN } from './constant'

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  providers: [
    {
      provide: MINIO_TOKEN,
      async useFactory(minioConf: ConfigType<typeof minioConfig>) {
        const minioClient = new Client({
          endPoint: minioConf.host,
          port: minioConf.port,
          useSSL: false,
          accessKey: minioConf.accessKey,
          secretKey: minioConf.secretKey
        })
        const bucketExists = await minioClient.bucketExists(BUCKET_NAME)
        if (!bucketExists) {
          minioClient.makeBucket(BUCKET_NAME)
        }
        return minioClient
      },
      inject: [minioConfig.KEY]
    },
    FileService
  ],
  exports: [FileService]
})
export class FileModule {}
```

记得在`AppModule`里加载一下`FileModule`。

```ts title="apps/server/src/app.module.ts"
// ...
import { FileModule } from '@/modules/file/file.module'

@Module({
  imports: [
    // ...
    FileModule
  ]
  // ...
})
export class AppModule {}
```

## 用户上传头像接口

接下来就可以实现用户上传头像的接口了。

先修改一下`UserEntity`，把用户表和文件表关联起来。

```ts title="apps/server/src/modules/db/entities/user.entity.ts"
// ...
import {
  // ...
  JoinColumn,
  OneToOne
} from 'typeorm'
import { FileEntity } from './file.entity'

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  // ...

  @Column({
    nullable: true
  })
  avatarId: number

  @OneToOne(() => FileEntity)
  @JoinColumn()
  avatar: FileEntity

  // ...
}
```

修改一下`UserService`的`getUserInfo`函数，再添加一个`uploadUserAvatar`函数。

```ts title="apps/server/src/modules/user/user.service.ts"
// ...
import {
  // ...
  Inject
} from '@nestjs/common'
import {
  // ...
  FileType
} from '@ying-chat/shared'
import { FileService } from '@/modules/file/file.service'

@Injectable()
export class UserService {
  // ...

  @Inject()
  private readonly fileService: FileService

  async getUserInfo(userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['avatar'] // +
    })

    // ...
  }

  // ...

  async uploadUserAvatar(file: Express.Multer.File, userId: number) {
    const minioFile = await this.fileService.uploadFile({
      file,
      fileType: FileType.Avatar,
      userId
    })

    await this.userRepository.update({ id: userId }, { avatarId: minioFile.id })

    return minioFile
  }
}
```

添加上传头像接口。

```ts title="apps/server/src/modules/user/user.controller.ts"
// ...
import {
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

@ApiTags('user')
@Controller('user')
export class UserController {
  // ...

  @ApiOperation({
    summary: 'uploadUserAvatar'
  })
  @Post('avatar')
  @UseInterceptors(FileInterceptor('file'))
  uploadUserAvatar(
    @Req() req: Request,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 5 * 1024 * 1024,
            message: 'size must less than 5MB'
          }),
          new FileTypeValidator({ fileType: /image\/(png|jpeg|jpg)/ })
        ]
      })
    )
    file: Express.Multer.File
  ) {
    return this.userService.uploadUserAvatar(file, req.userId)
  }
}
```

## 加载文件时更新有效文件地址

我们前面上传文件到 MinIO 时，都预签了一个 24 小时过期的文件地址存进数据库，现在要使这个文件在加载时，重新获取新的预签地址。

添加一个`MinioFileSubscriber`。

```ts title="apps/server/src/modules/file/file.subscriber.ts"
import { Inject } from '@nestjs/common'
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  Repository
} from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Client } from 'minio'
import {
  BUCKET_NAME,
  EXPIR_SECONDS,
  MINIO_TOKEN
} from '@/modules/file/constant'
import { FileEntity } from '@/modules/db/entities'

@EventSubscriber()
export class FileSubscriber implements EntitySubscriberInterface<FileEntity> {
  constructor(
    dataSource: DataSource,
    @Inject(MINIO_TOKEN)
    private readonly minioClient: Client,
    @InjectRepository(FileEntity)
    private readonly minioFileRepository: Repository<FileEntity>
  ) {
    dataSource.subscribers.push(this)
  }

  listenTo() {
    return FileEntity
  }

  async afterLoad(entity: FileEntity) {
    try {
      if (
        Date.now() - new Date(entity.updateAt).getTime() >
        EXPIR_SECONDS * 1000
      ) {
        const newUrl = await this.minioClient.presignedUrl(
          'get',
          BUCKET_NAME,
          entity.path,
          EXPIR_SECONDS
        )
        entity.url = newUrl
        this.minioFileRepository.update({ id: entity.id }, { url: newUrl })
      }
    } catch (error) {
      console.error(error)
    }
  }
}
```

在`FileModule`里加载一下。

```ts title="apps/server/src/modules/file/file.module.ts"
//...
import { FileSubscriber } from './file.subscriber'

@Global()
@Module({
  // ...
  providers: [
    // ...
    FileSubscriber
  ]
  // ...
})
export class FileModule {}
```

## 前端对接上传用户头像

在用户 api 添加一个上传接口。

```ts title="apps/client/src/api/user.ts"
// ...
import {
  // ...
  FileVo
} from '@ying-chat/shared'

export function uploadUserAvatar(file: File): Promise<FileVo> {
  const form = new FormData()
  form.append('file', file)
  return request.post('/user/avatar', form)
}
```

### 图片上传组件封装

在`components`添加一个`upload`文件夹，然后添加一个`useUpload` hook。

```ts title="apps/client/src/components/upload/use-upload.ts"
import { useState } from 'react'

export enum SelectFileType {
  Image,
  Video
}

export const selectFile: (type?: SelectFileType) => Promise<File> = type => {
  return new Promise(resolve => {
    const input = document.createElement('input')
    input.type = 'file'

    if (type === SelectFileType.Image) {
      input.accept = 'image/png,image/jpeg,image/jpg'
    } else if (type === SelectFileType.Video) {
      input.accept = 'video/mp4'
    }

    input.multiple = false

    input.onchange = async () => {
      const file = input.files?.[0]
      if (file) {
        resolve(file)
      }
    }

    input.click()
  })
}

type UseUploadOptions<T> = {
  handleUpload: (file: File) => Promise<T>
  onSuccess?: (res: T) => void
}

export const useUpload = <T>({
  handleUpload,
  onSuccess
}: UseUploadOptions<T>) => {
  const [loading, setLoading] = useState(false)

  const start = (type?: SelectFileType) => {
    selectFile(type).then(async file => {
      try {
        setLoading(true)
        if (handleUpload) {
          const res = await handleUpload(file)
          onSuccess && onSuccess(res)
        }
      } catch {
      } finally {
        setLoading(false)
      }
    })
  }

  return {
    start,
    loading
  }
}
```

再写一个`ImageUpload`组件。

```tsx title="apps/client/src/components/upload/image-upload.tsx"
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { CircularProgress, cn } from '@nextui-org/react'
import { FileVo } from '@ying-chat/shared'
import { SelectFileType, useUpload } from './use-upload'

type MinioUploadProps = {
  handleUpload: (file: File) => Promise<FileVo>
  defaultUrl?: string
  onSuccess?: (file: FileVo) => void
}

export const ImageUpload = ({
  defaultUrl,
  onSuccess,
  handleUpload
}: MinioUploadProps) => {
  const [url, setUrl] = useState(defaultUrl)

  const { loading, start } = useUpload({
    handleUpload,
    onSuccess: minioFile => {
      setUrl(minioFile.url)
      onSuccess && onSuccess(minioFile)
    }
  })

  return (
    <div
      className="inline-block w-[110px] h-[110px] cursor-pointer"
      onClick={() => {
        start(SelectFileType.Image)
      }}
    >
      {url ? (
        <img className="w-full h-full rounded-full object-cover" src={url} />
      ) : (
        <div
          className={cn(
            'w-full h-full rounded-full border-dashed text-2xl fc border-2',
            'bg-content2 text-foreground-500 border-foreground-500'
          )}
        >
          {loading ? <CircularProgress /> : <Plus />}
        </div>
      )}
    </div>
  )
}
```

新建一个`index.ts`把这两个导出一下。

```ts title="apps/client/src/components/upload/index.ts"
export * from './image-upload'
export * from './use-upload'
```

### 对接上传用户头像

修改一下`UserInfoModal`。

```tsx title="apps\client\src\components\modals\user-info-modal.tsx"
// ...
import { ImageUpload } from '@/components/upload'
import { setUserInfo, useAuthStore } from '@/stores'

// ...

export const UserInfoModal = ({
  open,
  close,
  confirmSuccess,
  initialValues
}: UserInfoModalProps) => {
  //...

  const userInfo = useAuthStore(state => state.userInfo)

  return (
    {/*  */}
    <ModalBody>
      {/*  */}
      <div className="flex flex-col items-center gap-3">
        <p>User Avatar</p>
        <ImageUpload
          defaultUrl={userInfo?.avatar?.url}
          handleUpload={file => userApi.uploadUserAvatar(file)}
          onSuccess={res => {
            setUserInfo({
              ...userInfo!,
              avatar: res
            })
          }}
        />
      </div>
    </ModalBody>
    {/*  */}
  )
}
```

这时候会发现`userInfo`会报红，提示类型“UserVo”上不存在属性“avatar”，我们到`shared`包里加一下。

```ts title="packages/shared/src/vo/user.vo.ts"
import { FileVo } from './file.vo'

export type UserVo = {
  // ...
  avatarId?: number
  avatar?: FileVo
}
```

这时候就不会报错了。

最后在`NavSidebar`也加上用户头像，顺便加上每次加载时自动获取一下最新信息。

```tsx title="apps\client\src\components\layout\nav-sidebar.tsx"
// ...
import {
  // ...
  useEffect
} from 'react'

export const NavSidebar = () => {
  // ...

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    {/*  */}
    <Avatar
      className="cursor-pointer h-[48px] w-[48px]"
      src={userInfo?.avatar?.url}
    />
    {/*  */}
  )
}
```

测试一下。

![](./img/13/01.gif)

本节到此结束。
