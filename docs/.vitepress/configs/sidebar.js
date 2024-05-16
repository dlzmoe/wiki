export default {
  '/guide/': Guide(),
  '/vue/': Vue(),
}

function Vue() {
  return [
    { text: '开始', link: '/vue/index' },
    {
      text: '笔记',
      collapsed: false,
      items: [
        { text: 'vuex 状态管理', link: '/vue/vuex' },
        { text: 'axios 请求', link: '/vue/axios' },
        { text: '使用 .env 配置环境', link: '/vue/env' },
      ]
    },
  ]
}

function Guide() {
  return [
    { text: 'Start Read', link: '/guide/index' },
    {
      text: 'Introduce',
      collapsed: true,
      items: [
        { text: 'Start Read', link: '/guide/index' },
        { text: 'Nocomment', link: '/guide/demo/nocomment' },
      ]
    },
  ]
}
