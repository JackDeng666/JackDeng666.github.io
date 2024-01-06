import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import MusicPlayer from '../components/MusicPlayer'
import Intro from './components/Intro'
import Skills from './components/SkillsV2'
import Characteristic from './components/Characteristic'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={`欢迎来到 ${siteConfig.title}`} description="技术笔记">
      <div style={{ height: '300vh' }}>
        <Intro />
        <Skills />
      </div>
      <div style={{ position: 'sticky', top: '60px', height: '100vh' }}>
        <Characteristic />
      </div>
      <MusicPlayer />
    </Layout>
  )
}
