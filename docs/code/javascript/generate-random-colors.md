# 生成随机颜色

```html
<ul>
  <li>html</li>
  <li>css</li>
  <li>js</li>
</ul>

<script>
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log(randomHex());

var arr = document.getElementsByTagName('li'), temp = [];
for (var i = 0; i < arr.length; i++) {
  temp.push(arr[i].innerHTML);
}

window.onload = function () {
  var li = document.getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
    for (var num = 0; num < li.length; num++) {
      li[num].style.background = randomHex();
    }
  }
}
</script>
```