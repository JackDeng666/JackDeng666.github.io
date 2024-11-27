import { FC, useEffect, useRef } from 'react'
import { motion, useInView, useScroll, Variants } from 'framer-motion'
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
    title: 'ying-tunnel',
    desc: '这是一个使用 ts 和 nodejs 实现的内网穿透服务与连接客户端，目前已实现 tcp 流量的代理，此项目所有代码都在此仓库并以 pnpm 的 workspace 去管理。',
    img: '/img/projects/04.png',
    link: 'https://github.com/JackDeng666/ying-tunnel'
  },
  {
    title: 'ying-starter',
    desc: '这是一个使用 nx 作为 monorepo 管理器的全栈项目启动模板，里面包含一个后台管理系统和一个客户端系统模板，后台实现了权限管理，客户端实现了注册登录和第三方 oauth 登录逻辑、多语言配置，web 离线消息推送等开箱即用的功能。内置 docker 脚本文件，可一键进行打包启动。',
    img: '/img/projects/02.png',
    link: 'https://github.com/JackDeng666/ying-starter'
  },
  {
    title: 'ying-chat',
    desc: '这是一个使用 pnpm 的 monorepo 架构的全栈即时通讯项目，目前只实现了基础的群聊功能。主要技术栈有 React、 NestJS、Redis、MinIO、Socket.IO，内置 docker 脚本文件，可一键进行打包启动。',
    img: '/img/projects/03.png',
    link: 'https://github.com/JackDeng666/ying-chat'
  },
  {
    title: 'ying-tools',
    desc: '这是一个 nodejs 命令行工具，目前实现功能有：快速搜索指定 github 用户的仓库并下载创建项目，管理并切换 npm 源，以及压缩图片。',
    img: '/img/projects/01.png',
    link: 'https://github.com/JackDeng666/ying-tools'
  }
]

const splitLength = 1 / items.length
const splitRange = items.reduce(
  (prev, _, currentIndex) => [...prev, (currentIndex + 1) * splitLength],
  [0]
)

const Project: FC<{ item: TProject }> = ({ item }) => {
  return (
    <div className="project">
      <div
        className="mimicry-button link"
        onClick={() => window.open(item.link)}
      >
        <div className="title">{item.title}</div>
        <div className="github">
          <Icon icon="mdi:github" />
          Github
        </div>
      </div>
      <img src={item.img} alt={item.title} />
      <p className="mimicry-wrap">{item.desc}</p>
    </div>
  )
}

const calcSize = () => {
  let width = Math.max(window.innerWidth * 0.3, 345)
  let height = window.innerHeight * 0.6

  return {
    width,
    height
  }
}

const tipWrapVariants: Variants = {
  initial: {
    y: 50,
    opacity: 0
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delayChildren: 0.1,
      staggerChildren: 0.2
    }
  }
}

export function Projects() {
  const optionsRef = useRef({
    width: 0,
    height: 0
  })
  const wrapRef = useRef<HTMLElement>()
  const sliderRef = useRef<HTMLDivElement>()
  const itemsRef = useRef<HTMLDivElement[]>([])
  const indexRef = useRef(0)
  const wrapInView = useInView(wrapRef)

  const { scrollYProgress } = useScroll({
    target: wrapRef
  })

  useEffect(() => {
    if (wrapInView) move(0)
    else move(-1)
  }, [wrapInView])

  const initSize = () => {
    optionsRef.current = calcSize()

    let width = optionsRef.current.width
    let height = optionsRef.current.height
    for (var i = 0; i < itemsRef.current.length; i++) {
      let item = itemsRef.current[i]
      item.style.width = `${width}px`
      item.style.height = `${height}px`
    }
  }

  const move = (index: number) => {
    console.log('move', index)
    indexRef.current = index

    for (let i = 0; i < itemsRef.current.length; i++) {
      let item = itemsRef.current[i]
      if (i === index) {
        item.style.transform = 'perspective(1200px)'
      } else {
        item.style.transform = `perspective(1200px) rotateY(${
          i < index ? 40 : -40
        }deg)`
      }
    }

    let width = optionsRef.current.width

    sliderRef.current.style.transform = `translate3d(${
      window.innerWidth / 2 - width / 2 - index * width
    }px, 0, 0)`
  }

  const scrollChange = (val: number) => {
    for (let i = 0; i < splitRange.length; i++) {
      const currentSplitNum = splitRange[i]
      const nextSplitNum = splitRange[i + 1]

      if (
        val >= currentSplitNum &&
        val < nextSplitNum &&
        indexRef.current !== currentSplitNum
      ) {
        return move(i)
      }
    }
  }

  useEffect(() => {
    scrollYProgress.on('change', scrollChange)
    initSize()
    return () => {
      scrollYProgress.clearListeners()
    }
  }, [])

  return (
    <section className="projectWrap" ref={wrapRef}>
      <div className="shell">
        <motion.div
          className="tipWrap"
          variants={tipWrapVariants}
          initial="initial"
          animate={wrapInView ? 'open' : ''}
        >
          <h2>我的开源项目</h2>
          <motion.div
            initial={{
              opacity: 0.3,
              y: 0
            }}
            animate={{
              opacity: 1,
              y: 10,
              transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'mirror'
              }
            }}
          >
            <Icon icon="pixelarticons:arrow-down" className="downIcon" />
          </motion.div>
        </motion.div>
        <div className="slider" ref={sliderRef}>
          {items.map((item, index) => (
            <div
              className="item"
              key={item.link}
              ref={element => {
                itemsRef.current[index] = element
              }}
            >
              <div className="box front">
                <Project item={item} key={item.link} />
              </div>
              <div className="box left"></div>
              <div className="box right"></div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: '200vh' }}></div>
    </section>
  )
}
