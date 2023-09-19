import React from 'react'
import SVGJavascriptFrameworks from '@site/src/svg/undraw_javascript_frameworks.svg'
import SVGAppWireframe from '@site/src/svg/undraw_app_wireframe.svg'
import SVGWebDeveloper from '@site/src/svg/undraw_web_developer.svg'
import SVGOpenSource from '@site/src/svg/undraw_open_source.svg'
import styles from '../index.module.scss'
import clsx from 'clsx'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '前端开发工程师',
    Svg: SVGJavascriptFrameworks,
    description: (
      <>
        两年前端开发经验，掌握vue、react、uni-app，编写了许多商业应用，也开发了一些前端工具库。
      </>
    )
  },
  {
    title: '全栈开发工程师',
    Svg: SVGWebDeveloper,
    description: (
      <>
        致力于成为全栈开发工程师，正在学习typescipt，docker容器化，nestjs构建服务端应用。
      </>
    )
  },
  {
    title: '开源爱好者',
    Svg: SVGOpenSource,
    description: (
      <>
        作为一名开源爱好者，积极参与开源社区，为开源项目贡献代码，希望有生之年能够构建出一个知名的开源项目。
      </>
    )
  }
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col', styles.feature, 'mimicry-wrap sunken')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p style={{ margin: 0 }}>{description}</p>
      </div>
    </div>
  )
}

export default function Characteristic() {
  return (
    <div className={styles.characteristicWrap}>
      <div className={clsx('row', styles.features)}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  )
}
