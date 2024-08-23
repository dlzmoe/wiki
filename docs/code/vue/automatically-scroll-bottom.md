# vue 自动滚动到最底部，用于对话聊天组件

```js
this.$nextTick(()=>{
  document.documentElement.scrollTop = document.body.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight
})
```