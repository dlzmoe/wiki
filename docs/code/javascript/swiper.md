# swiper 问题

## 跳转

`swiper.slideTo` 可以直接跳转到对应序号的轮播。

```jsx
var url = window.location.href;

// 点击对应锚点的首页 logo
if (url == 'http://www.ljydseo.com/fwpp#1') {
  var index = 0
};
if (url == 'http://www.ljydseo.com/fwpp#2') {
  var index = 1
};
if (url == 'http://www.ljydseo.com/fwpp#3') {
  var index = 2
};

swiper.slideTo(index, 100, false);
```

## 在 tab 选项卡模式下，swiper 不能生效

```jsx
observer: true,//修改 swiper 自己或子元素时，自动初始化 swiper
observeParents: true  //修改 swiper 的父元素时，自动初始化 swiper
```

## swiper 跑马灯效果

```jsx
  var swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 40,
    loop: true,
    speed: 5000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
```

```css
.swiper .swiper-wrapper {
	-webkit-transition-timing-function: linear !important;
	-moz-transition-timing-function: linear !important;
	-ms-transition-timing-function: linear !important;
	-o-transition-timing-function: linear !important;
	transition-timing-function: linear !important;
}
.swiper .swiper-wrapper .swiper-slide {
	width: auto !important;
}
```

## typeof 判断 swiper 是否存在

```jsx
if (typeof Swiper !== 'undefined') {
  var pagevideo = new Swiper("#pagevideo", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
     nextEl: ".video-button-next",
     prevEl: ".video-button-prev",
    },
  });
}
```