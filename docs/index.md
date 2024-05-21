---
layout: home

hero:
  name: Docs
  text: 我的文档
  tagline: weekly / note
  image:
    src: https://vitepress.dev/vitepress-logo-large.webp
    alt: Docs
  actions:
    - theme: brand
      text: 周刊
      link: /weekly/index
    - theme: alt
      text: 笔记
      link: /guide/index
    - theme: alt
      text: Github
      link: https://github.com/dlzmoe/docs

features:
  - icon: ❤️
    title: 周刊
    details: 奇趣周刊，每周四发布，分享有趣的软件，程序，动态新闻等。
  - icon: 😎
    title: 笔记
    details: 记录编程中的笔记。
  - icon: 👾
    title: 文档
    details: 一些杂七杂八的东西。

---

<style>
.VPHero .text {
  font-size: 18px;
}

.VPImage {
  border-radius: 50%;
}

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>