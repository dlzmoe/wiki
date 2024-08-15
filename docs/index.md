---
layout: home

hero:
  name: Wiki
  text: <\code>
  tagline: 记录我的百科数据。
  image:
    src: https://vitepress.dev/vitepress-logo-large.webp
    alt: Docs
  actions:
    - theme: brand
      text: 开始浏览
      link: /guide/index
    - theme: alt
      text: Github
      link: https://github.com/dlzmoe/wiki

features:
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