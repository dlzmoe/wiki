# chrome 书签栏点击复制

```jsx
javascript:(function(){
  var presetText = "你的预设文本"; // 在这里设置你想要的预设文本
  var tempInput = document.createElement("textarea");
  tempInput.value = presetText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("预设文本已复制到剪贴板！");
})();
```