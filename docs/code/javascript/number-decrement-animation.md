# 封装数字递减动画函数

根据渡一学习。

一个简单的封装数字动画的效果，只要变化的是数字都可以通过动画效果实现。

```jsx
  <button id="btn">点击</button>
  <div id="num">999</div>
  <script src="./animation.js"></script>
  <script>
    const btn = document.getElementById('btn');
    const num = document.getElementById('num');

    btn.onclick = function () {
      Animation(1000, 999, 10, val => {
        num.textContent = `${val.toFixed(2)}`
      });
    }
  </script>
```

```jsx
// animation.js
function Animation(duration, from, to, onProgress) {
  let value = from;
  const speed = (to - from) / duration;
  const start = Date.now();
  // 让 value 前进一点
  function _run() {
    const t = Date.now() - start;
    if (t >= duration) {
      value = to;
      onProgress(value);
      return;
    }
    value = from + t * speed;
    onProgress(value);
    requestAnimationFrame(_run);
  }
  _run();
}
```