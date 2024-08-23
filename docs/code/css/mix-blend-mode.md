# 文字和背景混合变色，一半黑一半白

[https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode)

背景必须设置黑白，不能留空，不然识别不出来颜色

```jsx
<style>
div {
  height: 100vh;
  background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%);
}

span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  mix-blend-mode: difference;
}
</style>

<div>
  <span>LOREM IPSUM</span>
</div>
```

```jsx
body {
  background: #fff;
}
div {
  height: 100vh;
  background: #000;
  width: 50%;
}
span {
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    mix-blend-mode: difference;
}
```