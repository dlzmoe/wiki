# 切换 swiper 时变换 autoplay 时长

备注：第二个轮播时视频，为了让视频播放完再轮播，需要调整第二个 slide 的 autoplay 时长

在你的代码中，你已经尝试在滑动变化时改变轮播时间，但是你需要以正确的方式更新 Swiper 实例的 autoplay 延迟时间。在 Swiper API 中，为了更新 autoplay 参数，你需要使用 `.autoplay.start()` 和 `.autoplay.stop()` 方法来重新启动自动播放。

下面是你的代码中的一个修正示例，说明了如何在 `slideChange` 事件中更新 autoplay 延迟时间：

```jsx
var indexbanner = new Swiper("#indexbanner", {
  autoplay: {
    disableOnInteraction: false,
    delay: 3000
  },
  pagination: {
    el: ".banner-pagination"
  },
  navigation: {
    nextEl: ".bannerswiper-next",
    prevEl: ".bannerswiper-prev"
  },
  on: {
    init: function () {
      setTimeout(function () {
        $("#indexbanner .swiper-pagination-bullet-active").addClass("cur")
      }, 1)
    },
    slideChange: function () {
      $("#indexbanner .swiper-pagination-bullet").removeClass("cur");
      $("#indexbanner .swiper-pagination-bullet-active").addClass("cur");
      if (this.activeIndex == 1) {
        $("#indexbanner .swiper-slide video")[0].play();
        // 停止自动播放
        indexbanner.autoplay.stop();
        // 设置新的延迟时间
        indexbanner.params.autoplay.delay = 9000;
        // 重新启动自动播放
        indexbanner.autoplay.start();
      } else {
        $("#indexbanner .swiper-slide video")[0].pause();
        // 停止自动播放
        indexbanner.autoplay.stop();
        // 设置新的延迟时间
        indexbanner.params.autoplay.delay = 3000;
        // 重新启动自动播放
        indexbanner.autoplay.start();
      }
    }
  }
});
```