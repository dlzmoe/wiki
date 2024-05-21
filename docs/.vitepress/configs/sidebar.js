export default {
  '/guide/': Guide(),
  '/weekly/': Weekly(),
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

function Weekly() {
  return [
    { text: '周刊', link: '/weekly/index' },
    {
      text: '目录',
      collapsed: false,
      items: [
        // { text: '奇趣周刊 - 第 52 期', link: '/weekly/52' },
        { text: '奇趣周刊 - 第 51 期', link: '/weekly/51' },
        { text: '奇趣周刊 - 第 50 期', link: '/weekly/50' },
        { text: '奇趣周刊 - 第 49 期', link: '/weekly/49' },
        { text: '奇趣周刊 - 第 48 期', link: '/weekly/48' },
        { text: '奇趣周刊 - 第 47 期', link: '/weekly/47' },
        { text: '奇趣周刊 - 第 46 期', link: '/weekly/46' },
        { text: '奇趣周刊 - 第 45 期', link: '/weekly/45' },
        { text: '奇趣周刊 - 第 44 期', link: '/weekly/44' },
        { text: '奇趣周刊 - 第 43 期', link: '/weekly/43' },
        { text: '奇趣周刊 - 第 42 期', link: '/weekly/42' },
        { text: '奇趣周刊 - 第 41 期', link: '/weekly/41' },
        { text: '奇趣周刊 - 第 40 期', link: '/weekly/40' },
        { text: '奇趣周刊 - 第 39 期', link: '/weekly/39' },
        { text: '奇趣周刊 - 第 38 期', link: '/weekly/38' },
        { text: '奇趣周刊 - 第 37 期', link: '/weekly/37' },
        { text: '奇趣周刊 - 第 36 期', link: '/weekly/36' },
        { text: '奇趣周刊 - 第 35 期', link: '/weekly/35' },
        { text: '奇趣周刊 - 第 34 期', link: '/weekly/34' },
        { text: '奇趣周刊 - 第 33 期', link: '/weekly/33' },
        { text: '奇趣周刊 - 第 32 期', link: '/weekly/32' },
        { text: '奇趣周刊 - 第 31 期', link: '/weekly/31' },
        { text: '奇趣周刊 - 第 30 期', link: '/weekly/30' },
        { text: '奇趣周刊 - 第 29 期', link: '/weekly/29' },
        { text: '奇趣周刊 - 第 28 期', link: '/weekly/28' },
        { text: '奇趣周刊 - 第 27 期', link: '/weekly/27' },
        { text: '奇趣周刊 - 第 26 期', link: '/weekly/26' },
        { text: '奇趣周刊 - 第 25 期', link: '/weekly/25' },
        { text: '奇趣周刊 - 第 24 期', link: '/weekly/24' },
        { text: '奇趣周刊 - 第 23 期', link: '/weekly/23' },
        { text: '奇趣周刊 - 第 22 期', link: '/weekly/22' },
        { text: '奇趣周刊 - 第 21 期', link: '/weekly/21' },
        { text: '奇趣周刊 - 第 20 期', link: '/weekly/20' },
        { text: '奇趣周刊 - 第 19 期', link: '/weekly/19' },
        { text: '奇趣周刊 - 第 18 期', link: '/weekly/18' },
        { text: '奇趣周刊 - 第 17 期', link: '/weekly/17' },
        { text: '奇趣周刊 - 第 16 期', link: '/weekly/16' },
        { text: '奇趣周刊 - 第 15 期', link: '/weekly/15' },
        { text: '奇趣周刊 - 第 14 期', link: '/weekly/14' },
        { text: '奇趣周刊 - 第 13 期', link: '/weekly/13' },
        { text: '奇趣周刊 - 第 12 期', link: '/weekly/12' },
        { text: '奇趣周刊 - 第 11 期', link: '/weekly/11' },
        { text: '奇趣周刊 - 第 10 期', link: '/weekly/10' },
        { text: '奇趣周刊 - 第 9 期', link: '/weekly/9' },
        { text: '奇趣周刊 - 第 8 期', link: '/weekly/8' },
        { text: '奇趣周刊 - 第 7 期', link: '/weekly/7' },
        { text: '奇趣周刊 - 第 6 期', link: '/weekly/6' },
        { text: '奇趣周刊 - 第 5 期', link: '/weekly/5' },
        { text: '奇趣周刊 - 第 4 期', link: '/weekly/4' },
        { text: '奇趣周刊 - 第 3 期', link: '/weekly/3' },
        { text: '奇趣周刊 - 第 2 期', link: '/weekly/2' },
        { text: '奇趣周刊 - 第 1 期', link: '/weekly/1' },
      ]
    },
  ]
}
