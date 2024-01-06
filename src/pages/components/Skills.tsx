import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import MainBg from '@site/src/svg/undraw_programming.svg'
import styles from '../index.module.scss'
import { getScollEffect } from '@site/src/lib/ScollEffect'
import { RandomPosition } from '@site/src/lib/RandomPosition'

export default function Skills() {
  const logos = [
    'logos:vue',
    'logos:nuxt-icon',
    'logos:react',
    'logos:nextjs-icon',
    'logos:javascript',
    'logos:typescript-icon',
    'logos:nodejs-icon-alt',
    'logos:docker-icon',
    'logos:nestjs',
    'logos:visual-studio-code'
  ]
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const scollEffect = getScollEffect()
    scollEffect.addScollEvents(scollPos => {
      if (scollPos > 0.3) {
        setVisible(true)
      }
      if (scollPos < 0.3) {
        setVisible(false)
      }
    })
    const randomPosition = new RandomPosition({
      width: document.body.clientWidth,
      height: document.body.clientHeight - 60,
      sideLength: 54,
      length: logos.length
    })
    const list = randomPosition
      .generateList()
      .map(el => ({ x: el.x / 16, y: el.y / 16 }))
    scollEffect.addEffectItem({
      element: document.getElementById('skill-bg'),
      opacityAnimMap: new Map([
        [0.3, 0],
        [0.35, 1],
        [0.6, 1],
        [0.7, 0]
      ]),
      transformAnimMap: new Map([
        [0.3, { scale: 0 }],
        [0.4, { scale: 1 }],
        [0.6, { scale: 1 }],
        [0.75, { scale: 0 }]
      ])
    })
    scollEffect.addEffectItem(
      logos.map((el, i) => ({
        element: document.getElementById(el),
        opacityAnimMap: new Map([
          [0.37, 0],
          [0.42, 1],
          [0.7, 1],
          [0.75, 0]
        ]),
        transformAnimMap: new Map([
          [0.45, { x: 0, y: 0 }],
          [0.6, { x: list[i].x, y: list[i].y }],
          [0.65, { x: list[i].x, y: list[i].y }],
          [0.75, { x: 0, y: 0 }]
        ])
      }))
    )
  }, [])

  return (
    <div
      className={styles.boxWrap}
      style={{ visibility: visible ? 'visible' : 'hidden' }}
    >
      <MainBg className={styles.bg} id="skill-bg" />
      {logos.map((logo, index) => {
        return (
          <div
            key={index}
            id={logo}
            className={`${styles.iconBox} mimicry-button hover-active`}
            style={{
              position: 'absolute',
              left: 'calc(50% - 1.7rem)',
              top: 'calc(50% - 1.7rem)'
            }}
          >
            <Icon icon={logo}></Icon>
          </div>
        )
      })}
    </div>
  )
}
