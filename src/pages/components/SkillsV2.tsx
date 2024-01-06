import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import MainBg from '@site/src/svg/undraw_programming.svg'
import styles from '../index.module.scss'
import { getScollEffect } from '@site/src/lib/ScollEffect'

const logos = [
  {
    name: 'logos:vue',
    left: '-5%',
    top: '1%',
    opacityAnimMap: new Map([
      [0.36, 0],
      [0.41, 1],
      [0.65, 1],
      [0.71, 0]
    ]),
    transformAnimMap: new Map([
      [0.36, { y: 0 }],
      [0.41, { y: -1 }],
      [0.65, { y: -1 }],
      [0.71, { y: -1.8 }]
    ])
  },
  {
    name: 'logos:nuxt-icon',
    left: '12%',
    top: '-11%',
    opacityAnimMap: new Map([
      [0.37, 0],
      [0.42, 1],
      [0.65, 1],
      [0.75, 0]
    ]),
    transformAnimMap: new Map([
      [0.37, { y: 0 }],
      [0.42, { y: -1 }],
      [0.65, { y: -1 }],
      [0.75, { y: -2.2 }]
    ])
  },
  {
    name: 'logos:react',
    left: '80%',
    top: '-5%',
    opacityAnimMap: new Map([
      [0.38, 0],
      [0.43, 1],
      [0.65, 1],
      [0.72, 0]
    ]),
    transformAnimMap: new Map([
      [0.38, { y: 0 }],
      [0.43, { y: -1 }],
      [0.65, { y: -1 }],
      [0.72, { y: -2.1 }]
    ])
  },
  {
    name: 'logos:nextjs-icon',
    left: '38%',
    top: '-8%',
    opacityAnimMap: new Map([
      [0.34, 0],
      [0.39, 1],
      [0.65, 1],
      [0.73, 0]
    ]),
    transformAnimMap: new Map([
      [0.34, { y: 0 }],
      [0.39, { y: -1 }],
      [0.65, { y: -1 }],
      [0.73, { y: -1.9 }]
    ])
  },
  {
    name: 'logos:javascript',
    left: '56%',
    top: '-3%',
    opacityAnimMap: new Map([
      [0.37, 0],
      [0.62, 1],
      [0.65, 1],
      [0.74, 0]
    ]),
    transformAnimMap: new Map([
      [0.37, { y: 0 }],
      [0.62, { y: -1 }],
      [0.65, { y: -1 }],
      [0.74, { y: -1.7 }]
    ])
  },
  {
    name: 'logos:typescript-icon',
    left: '80%',
    top: '16%',
    opacityAnimMap: new Map([
      [0.37, 0],
      [0.53, 1],
      [0.65, 1],
      [0.75, 0]
    ]),
    transformAnimMap: new Map([
      [0.37, { y: 0 }],
      [0.53, { y: -1 }],
      [0.65, { y: -1 }],
      [0.75, { y: -1.6 }]
    ])
  },
  {
    name: 'logos:nestjs',
    left: '83%',
    top: '36%',
    opacityAnimMap: new Map([
      [0.38, 0],
      [0.57, 1],
      [0.65, 1],
      [0.72, 0]
    ]),
    transformAnimMap: new Map([
      [0.38, { y: 0 }],
      [0.57, { y: -1 }],
      [0.65, { y: -1 }],
      [0.72, { y: -1.3 }]
    ])
  },
  {
    name: 'logos:nodejs-icon-alt',
    left: '80%',
    top: '93%',
    opacityAnimMap: new Map([
      [0.36, 0],
      [0.58, 1],
      [0.65, 1],
      [0.73, 0]
    ]),
    transformAnimMap: new Map([
      [0.36, { y: 0 }],
      [0.58, { y: -1 }],
      [0.65, { y: -1 }],
      [0.73, { y: -2 }]
    ])
  },
  {
    name: 'logos:docker-icon',
    left: '3%',
    top: '83%',
    opacityAnimMap: new Map([
      [0.37, 0],
      [0.48, 1],
      [0.65, 1],
      [0.71, 0]
    ]),
    transformAnimMap: new Map([
      [0.37, { y: 0 }],
      [0.48, { y: -1 }],
      [0.65, { y: -1 }],
      [0.71, { y: -1.3 }]
    ])
  },
  {
    name: 'logos:visual-studio-code',
    left: '23%',
    top: '93%',
    opacityAnimMap: new Map([
      [0.34, 0],
      [0.51, 1],
      [0.65, 1],
      [0.75, 0]
    ]),
    transformAnimMap: new Map([
      [0.34, { y: 0 }],
      [0.51, { y: -1 }],
      [0.65, { y: -1 }],
      [0.75, { y: -1.5 }]
    ])
  }
]

export default function Skills() {
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
        [0.65, { scale: 1 }],
        [0.75, { scale: 0 }]
      ])
    })
    scollEffect.addEffectItem(
      logos.map((el, i) => ({
        element: document.getElementById(el.name),
        opacityAnimMap: el.opacityAnimMap,
        transformAnimMap: el.transformAnimMap
      }))
    )
  }, [])

  return (
    <div
      className={styles.boxWrap}
      style={{ visibility: visible ? 'visible' : 'hidden' }}
    >
      <div className={styles.bgWrap}>
        <MainBg className={styles.bg} id="skill-bg" />
        {logos.map((logo, index) => {
          return (
            <div
              key={index}
              id={logo.name}
              className={`${styles.iconBox} mimicry-button hover-active`}
              style={{
                position: 'absolute',
                left: logo.left,
                top: logo.top
              }}
            >
              <Icon icon={logo.name}></Icon>
            </div>
          )
        })}
      </div>
    </div>
  )
}
