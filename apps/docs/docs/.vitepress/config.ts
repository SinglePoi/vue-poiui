import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  themeConfig: {
    siteTitle: 'Vue PoiUI',
    nav: [
      { text: '组件', link: '/guide/button' },
      { text: 'Playground', link: '/playground' },
      { text: '文档', link: '/docs' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '布局',
          items: [
          ]
        },
        {
          text: '通用',
          items: [
            { text: 'Button 按钮', link: '/guide/button' },
          ]
        },
        {
          text: '导航',
          items: [
          ]
        },
        {
          text: '反馈',
          items: [
          ]
        },
        {
          text: '数据录入',
          items: [
          ]
        },
        {
          text: '数据展示',
          items: [
          ]
        },
      ],
    }
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  }
})
