---
id: linux-caches
sidebar_label: linux 查看、清理内存
title: linux 查看、清理内存
---

## 查看内存

```shell
free -h
```

## linux 清理内存缓存命令

### 清理 PageCache 缓存：

```shell
sync && echo 1 > /proc/sys/vm/drop_caches
```

### 清理 dentries 和 inodes 缓存：

```shell
sync && echo 2 > /proc/sys/vm/drop_caches
```

### 清理 PageCache、dentries 和 inodes 缓存：

```shell
sync && echo 3 > /proc/sys/vm/drop_caches
```

解释一下具体的操作含义：

sync：先执行 sync 同步命令，将文件系统缓存的数据立即写入磁盘，以防止数据丢失或损坏。

/proc/sys/vm/drop_caches：这是 Linux 的一个内核文件，用于清理虚拟内存。

请注意，清理缓存可能会对系统的性能和运行产生影响，请谨慎操作。在普通使用中，不建议频繁清理缓存，通常只需要等待系统自动进行内存管理和调度即可。
