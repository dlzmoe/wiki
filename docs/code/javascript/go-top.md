# 点击按钮平滑返回顶部

## **锚链接平滑滚动**

```jsx
$(function () {
  $('.send a').click(function () {
    $('html,body').animate({ scrollTop: $('#toinquiry').offset().top - 30 }, 500);
  })
})

$(".btn-top").click(function () {
  $("html,body").animate({
    scrollTop: 0
  }, 500)
})
```

## 下滑时绑定 class

```jsx
$(window).on("scroll", function () {
    if ($(window).scrollTop() >= 200) {
        $("header").addClass("is-active")
    } else {
        $("header").removeClass("is-active")
    }
});
```

## **点击除了指定元素外其他元素事件的方法**

```jsx
$('body').on('click',function (e) {
  if (($(e.target).attr('class') != 'mochu')) {
    console.log('除了 class 为 mochu 以外的所有元素都可以输出此段文字！');
  }
});
```