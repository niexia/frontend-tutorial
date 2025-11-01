import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
import sideBar from './sidebar'

const nav: ThemeConfig['nav'] = [
  {
    text: 'JavaScript',
    activeMatch: `^/(javascript|browser|performance-optimization|regexp)/`,
    items: [
      {
        text: "JavaScript",
        link: '/javascript/programming-language/'
      },
      {
        text: "浏览器工作原理",
        link: '/javascript/browser/'
      },
      {
        text: "性能优化",
        link: '/javascript/performance-optimization/'
      },
      {
        text: "regexp",
        link: '/javascript/regexp/'
      },
    ]
  },
  {
    text: '数据结构和算法',
    activeMatch: `^/algo/`,
    link: '/algo/'
  },
  {
    text: '计算机网络',
    activeMatch: `^/network/`,
    link: '/network/'
  },
  {
    text: '前端工程化',
    activeMatch: `^/frontend-engineering/`,
    link: '/frontend-engineering/'
  },
  {
    text: 'typescript tutorial',
    link: 'https://niexia.github.io/typescript-tutorial/'
  },
  {
    text: 'Blog',
    link: 'https://niexia.github.io/'
  },
]

export const sidebar: ThemeConfig['sidebar'] = sideBar

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'zh-CN',
  title: 'frontend-tutorial',
  description: 'frontend-tutorial - 前端学习指南，包含 JavaScript, CSS, HTML, Webpack, Vite, React, Vue, Node.js, Deno, 数据结构和算法，计算机网络，前端工程化等。',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',
  base: '/frontend-tutorial/',

  head: [
    ['meta', { name: 'keywords', content: '前端，学习，笔记，JavaScript, CSS, HTML, Webpack, Vite, React, Vue, Node.js, Deno, 数据结构和算法，计算机网络，前端工程化' }],
    ['meta', { property: 'og:title', content: 'frontend-tutorial' }],
    ['meta', { property: 'og:description', content: 'frontend-tutorial - 前端学习指南，包含 JavaScript, CSS, HTML, Webpack, Vite, React, Vue, Node.js, Deno, 数据结构和算法，计算机网络，前端工程化等。' }],
    ['meta', { property: 'og:url', content: 'https://niexia.github.io/frontend-tutorial/' }],
    ['meta', { property: 'og:image', content: 'https://niexia.github.io/frontend-tutorial/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'twitter:site', content: '@niexia' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['link', { rel: 'icon', href: '/favicon.ico'}],
    ['script', {
      async: 'true',
      src: "https://www.googletagmanager.com/gtag/js?id=UA-163994034-1"
    }],
    ['script', {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-163994034-1');
      `
    ],
  ],

  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    // i18n,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/niexia/' },
    ],

    editLink: {
      repo: 'niexia/frontend-tutorial',
      text: 'Edit this page on GitHub'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2019-${new Date().getFullYear()} Yang Jin`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
