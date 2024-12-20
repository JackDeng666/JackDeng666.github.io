import { useRef } from 'react'
import { Icon } from '@iconify/react'
import { Variants, motion, useInView } from 'framer-motion'
import './contact.scss'

const contactVariants: Variants = {
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

const contacts = [
  {
    icon: 'mdi:github',
    link: 'https://github.com/JackDeng666'
  },
  {
    icon: 'uiw:weixin',
    link: 'img/wechat.png'
  },
  {
    icon: 'ri:qq-fill',
    link: 'img/qq.jpg'
  },
  {
    icon: 'clarity:email-solid',
    link: 'mailto:1556393081@qq.com'
  }
]

export function Contact() {
  const ref = useRef()
  const inView = useInView(ref)

  return (
    <div className="contactBox">
      <div ref={ref}>
        <motion.div
          variants={contactVariants}
          initial="initial"
          animate={inView ? 'open' : ''}
          className="flex-a-c"
        >
          {contacts.map((contact, index) => {
            return (
              <motion.div
                key={index}
                className="iconBox mimicry-button"
                variants={contactVariants}
              >
                <Icon
                  icon={contact.icon}
                  color="var(--ifm-color-primary)"
                  onClick={() => {
                    window.open(contact.link)
                  }}
                ></Icon>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
