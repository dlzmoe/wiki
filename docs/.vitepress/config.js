import sidebar from './configs/sidebar';
import nav from './configs/nav';

import { RssPlugin, RSSOptions } from 'vitepress-plugin-rss'
const RSS = {
  title: '奇趣周刊',
  baseUrl: 'https://docs.zishu.me',
  copyright: 'Copyright (c) 2020-present, 子舒',
}

import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

const taskLists = require('markdown-it-task-checkbox')

export default {
  title: 'note docs',
  dist: '/dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  vite: {
    plugins: [
      /* vitepress rss 插件 */
      RssPlugin(RSS),
      /* 自动生成左侧 */
      // AutoSidebar({
      //   collapsed: true,
      //   titleFromFile: true,
      // }),
    ],
  },
  markdown: {
    config: (md) => {
      md.use(taskLists, { 
        disabled: true,
        divWrap: false,
        divClass: 'checkbox',
        idPrefix: 'cbx_',
        ulClass: 'task-list',
        liClass: 'task-list-item',
      })
    }
  },
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'note docs💡',
    sidebar,
    nav,
    editLink: {
      pattern: 'https://github.com/dlzmoe/docs/blob/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dlzmoe/docs' },
    ],
    lastUpdated: true,
    lastUpdatedText: '最后更新于',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020 - 2024 dlzmoe'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
}
