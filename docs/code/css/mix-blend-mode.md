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

**示例：**

![Untitled](%E6%96%87%E5%AD%97%E5%92%8C%E8%83%8C%E6%99%AF%E6%B7%B7%E5%90%88%E5%8F%98%E8%89%B2%EF%BC%8C%E4%B8%80%E5%8D%8A%E9%BB%91%E4%B8%80%E5%8D%8A%E7%99%BD%207663d48d38104fa884c9e4387d65dedb/Untitled.png)

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