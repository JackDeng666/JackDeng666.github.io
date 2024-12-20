import React, { useRef } from 'react'
import { useScroll } from 'framer-motion'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { Intro } from './_components/intro/Intro'
import { Contact } from './_components/contact/Contact'
import { Skills } from './_components/skills/Skills'
import { Projects } from './_components/projects/Projects'
import { MusicPlayer } from '../components/MusicPlayer'
import './index.scss'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref
  })

  return (
    <Layout title={`欢迎来到 ${siteConfig.title}`} description="技术笔记">
      <section className="intro" ref={ref}>
        <Intro scrollYProgress={scrollYProgress} />
        <Skills scrollYProgress={scrollYProgress} />
        <div style={{ height: '100vh' }}></div>
      </section>
      <Projects />
      <Contact />
      <MusicPlayer />
    </Layout>
  )
}
