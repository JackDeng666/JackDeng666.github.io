import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: '嘤嘤博客',
  tagline: 'ts全栈开发',
  favicon: 'img/favicon.png',
  url: 'https://jackdeng666.github.io',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jackdeng666', // Usually your GitHub org/user name.
  projectName: 'jackdeng666.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN']
  },
  plugins: ['docusaurus-plugin-sass', 'docusaurus-plugin-image-zoom'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        blog: {
          showReadingTime: true
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss')
        }
      }
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/favicon.png',
    metadata: [
      {
        name: 'keywords',
        content: '嘤'
      },
      {
        name: 'keywords',
        content: 'blog, javascript, typescript, node, react, vue, web'
      },
      {
        name: 'keywords',
        content: '编程爱好者, Web开发者, ts全栈'
      }
    ],
    navbar: {
      title: '嘤嘤博客',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon.png'
      },
      hideOnScroll: false,
      items: [
        {
          label: 'CICD',
          to: 'docs/ci-cd/',
          position: 'right'
        },
        {
          label: 'Docker',
          to: 'docs/docker/',
          position: 'right'
        },
        {
          label: 'YingChat项目实战',
          to: 'docs/ying-chat/',
          position: 'right'
        },
        { to: '/blog', label: '博客', position: 'right' }
      ]
    },
    docs: {
      sidebar: {
        hideable: true
      }
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgba(255, 255, 255, 0)',
        dark: 'rgba(50, 50, 50, 0)'
      },
      config: {}
    }
  } satisfies Preset.ThemeConfig
}

export default config
