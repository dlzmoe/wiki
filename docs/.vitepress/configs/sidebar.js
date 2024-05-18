export default {
  '/guide/': Guide(),
}

function Guide() {
  return [
    { text: '开始', link: '/guide/index' },
    {
      text: 'Vue',
      collapsed: false,
      items: [
        { text: 'vuex 状态管理', link: '/guide/vue/vuex' },
        { text: 'axios 请求', link: '/guide/vue/axios' },
        { text: '使用 .env 配置环境', link: '/guide/vue/env' },
        { text: '常见方法', link: '/guide/vue/1' },
      ]
    },
    {
      text: '工具',
      collapsed: false,
      items: [
        { text: 'Chrome 扩展', link: '/guide/tools/plugin' },
        { text: '油猴脚本', link: '/guide/tools/scripts' },
      ]
    },
  ]
}
