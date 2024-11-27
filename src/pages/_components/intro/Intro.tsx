import { useEffect } from 'react'
import Typed from 'typed.js'
import { motion, useSpring, useTransform } from 'framer-motion'
import type { MotionValue, Variants } from 'framer-motion'
import { useMedia } from 'react-use'
import '../../index.scss'
import './intro.scss'

const textVariants: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

export function Intro({ scrollYProgress }: { scrollYProgress: MotionValue }) {
  const isMobile = useMedia('(max-width: 1024px)')

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.24], [1, isMobile ? 0 : 1])
  )

  const scaleX = useSpring(
    useTransform(scrollYProgress, [0, 0.32], [1, isMobile ? 0 : 1])
  )

  const x = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, isMobile ? 0 : -300])
  )
  const rotateY = useSpring(
    useTransform(scrollYProgress, [0.25, 0.48], [0, isMobile ? 0 : 20])
  )

  useEffect(() => {
    const typed = new Typed('.text', {
      strings: [
        '欢迎来到<span style="color: var(--ifm-color-primary);">Ying Blog</span>！我是<span style="color: var(--ifm-color-primary);">JackDeng</span>，<br/><span style="font-size: 1.6rem;">一名喜欢唱、跳、Rap</span>',
        '欢迎来到<span style="color: var(--ifm-color-primary);">Ying Blog</span>！我是<span style="color: var(--ifm-color-primary);">JackDeng</span>，<br/><span style="font-size: 1.6rem;">一名^800喜欢用 JS 的全栈开发者。</span>'
      ],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 100
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="introBox">
      <div className="introWrap">
        <motion.div
          style={{
            x,
            rotateY
          }}
          className="animateWrap"
        >
          <motion.div className="textWrap" style={{ scale, opacity: scale }}>
            <span className="text"></span>
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="flex-a-c"
            style={{ scale: scaleX, opacity: scaleX }}
          >
            <motion.img
              variants={textVariants}
              src="img/snow_pixel_loli_1.gif"
            />
            <motion.img
              variants={textVariants}
              src="img/snow_pixel_loli_2.gif"
            />
            <motion.img
              variants={textVariants}
              src="img/snow_pixel_loli_3.gif"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
