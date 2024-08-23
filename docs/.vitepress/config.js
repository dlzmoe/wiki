import nav from './configs/nav';

import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
const taskLists = require('markdown-it-task-checkbox')

export default {
  title: 'Wiki',
  dist: '/dist',
  head: [
    ['link', {
      rel: 'icon',
      href: 'https://imgurl.zishu.me/favicon.png'
    }]
  ],
  vite: {
    plugins: [
      /* 自动生成左侧 */
      AutoSidebar({
        ignoreIndexItem: true, // 忽略首页
        titleFromFile: true, // 读取 md 文件 # 一级标题作为侧边
        collapsed: false, // 是否默认收缩
      })
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
    siteTitle: 'wiki 📓',
    nav,
    editLink: {
      pattern: 'https://github.com/dlzmoe/wiki/blob/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/dlzmoe/wiki'
    }, ],
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