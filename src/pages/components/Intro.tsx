import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Icon } from '@iconify/react'
import { EffectItem, getScollEffect } from '@site/src/lib/ScollEffect'
import styles from '../index.module.scss'

export default function Intro() {
  useEffect(() => {
    const scollEffect = getScollEffect()

    const effectDomList: EffectItem[] = [
      {
        element: document.getElementById('intro-1'),
        opacityAnimMap: new Map([
          [0, 1],
          [0.2, 0]
        ]),
        transformAnimMap: new Map([
          [0, { y: 0, scale: 1 }],
          [0.2, { y: -20, scale: 0 }]
        ])
      },
      {
        element: document.getElementById('intro-3'),
        opacityAnimMap: new Map([
          [0.1, 1],
          [0.3, 0]
        ]),
        transformAnimMap: new Map([
          [0.1, { scale: 1 }],
          [0.3, { scale: 0 }]
        ])
      },
      {
        element: document.getElementById('intro-4'),
        opacityAnimMap: new Map([
          [0.2, 1],
          [0.4, 0]
        ]),
        transformAnimMap: new Map([
          [0.2, { x: 0 }],
          [0.4, { x: 20 }]
        ])
      },
      {
        element: document.getElementById('intro-5'),
        opacityAnimMap: new Map([
          [0.2, 1],
          [0.4, 0]
        ]),
        transformAnimMap: new Map([
          [0.2, { x: 0 }],
          [0.4, { x: -20 }]
        ])
      }
    ]
    scollEffect.addEffectItem(effectDomList)
  }, [])

  const contacts = [
    {
      icon: 'mdi:github',
      link: 'https://github.com/JackDeng666'
    },
    {
      icon: 'ri:qq-fill',
      link: 'img/qq.jpg'
    },
    {
      icon: 'uiw:weixin',
      link: 'img/wechat.png'
    },
    {
      icon: 'clarity:email-solid',
      link: 'mailto: 1556393081@qq.com'
    }
  ]

  return (
    <div className={styles.boxWrap}>
      <div id="intro-1" className={styles.title}>
        <div className={`flex-a-c`}>
          <p style={{ fontSize: '1.6rem' }}>欢迎来到嘤嘤博客，我是JackDeng！</p>
          <img src="img/snow_pixel_loli_4.gif"></img>
        </div>
        <div className={`flex-a-c`}>
          <p>一名专注于node全栈开发的编程爱好者，保持学习，探索无限的可能。</p>
          <img src="img/snow_pixel_loli_1.gif"></img>
        </div>
      </div>

      <div id="intro-3" className={`flex-a-c`}>
        {contacts.map((contact, index) => {
          return (
            <div key={index} className={`${styles.iconBox} mimicry-button`}>
              <Icon
                icon={contact.icon}
                color="var(--ifm-color-primary)"
                onClick={() => {
                  window.open(contact.link)
                }}
              ></Icon>
            </div>
          )
        })}
      </div>
      <div id="intro-4" className={`flex-a-c`}>
        <img src="img/snow_pixel_loli_3.gif"></img>
        <img src="img/snow_pixel_loli_2.gif"></img>
      </div>
      <div id="intro-5" className={`flex-a-c`}>
        <p>
          本站用来记录我的一些技术踩坑过程或各种技术的使用笔记，可以方便以后翻阅参考。
        </p>
      </div>
    </div>
  )
}
