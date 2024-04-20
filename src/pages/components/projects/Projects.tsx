import React, { FC, useEffect, useRef, useState } from 'react'
import {
  useScroll,
  useSpring,
  motion,
  useTransform,
  useInView
} from 'framer-motion'
import { Icon } from '@iconify/react'
import './projects.scss'

type TProject = {
  title: string
  desc: string
  img: string
  link: string
}

const items: TProject[] = [
  {
    title: 'ying-tools',
    desc: 'node 命令行工具，目前实现功能有：快速搜索指定 github 用户的仓库并下载创建项目，管理并切换 npm 源，以及压缩图片。',
    img: '/img/projects/01.png',
    link: 'https://github.com/JackDeng666/ying-tools'
  },
  {
    title: 'ying-starter',
    desc: '这是一个使用 nx 的 monorepo 架构的全栈项目，基于 React 和 NestJS 实现了基本的后台管理系统的角色权限控制逻辑，包含一个NextJS的客户端，集成了基本的注册登录逻辑和谷歌、github、Facebook 的 oauth 登录，以及多语言配置。',
    img: '/img/projects/02.png',
    link: 'https://github.com/JackDeng666/ying-starter'
  },
  {
    title: 'ying-chat',
    desc: '这是一个使用 pnpm 的 monorepo 架构的全栈即时通讯项目，主要基于 React 和 NestJS实现，目前只实现了基础的群聊功能。',
    img: '/img/projects/03.png',
    link: 'https://github.com/JackDeng666/ying-chat'
  }
]

const Project: FC<{ item: TProject; toProject: VoidFunction }> = ({
  item,
  toProject
}) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref
  })

  const inView = useInView(ref)
  useEffect(() => {
    if (inView) toProject()
  }, [inView])

  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-300, 0, 0, 300])
  )

  return (
    <section className="project">
      <motion.div className="mimicry-wrap sunken container" ref={ref}>
        <motion.img src={item.img} alt={item.title} style={{ y }} />
        <motion.div className="textWrap" style={{ y }}>
          <p>{item.desc}</p>
          <div
            className="mimicry-button link"
            onClick={() => {
              window.open(item.link)
            }}
          >
            <div className="title">{item.title}</div>
            <div className="github">
              <Icon icon="mdi:github" />
              Github
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export function Projects() {
  const [title, setTitle] = useState(items[0].title)

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref
  })

  const scaleX = useSpring(scrollYProgress)

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>{title}</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map(item => (
        <Project
          item={item}
          key={item.link}
          toProject={() => setTitle(item.title)}
        />
      ))}
    </div>
  )
}
