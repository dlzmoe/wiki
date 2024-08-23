# input 框限制输入大小

记录一个 input 的用法，设置 input 仅可输入数字，并且数字范围为 400-800，且限制来三位数（这个要不要都无所谓）。

```html
<input type="number" value="400" onblur="if(value>800)value=800;if(value.length>3)value=value.slice(0,3);if(value<400)value=400;" />
```

js 分析：

```jsx
if(value>800)value=800; // 超过 800 重置 800if(value.length>3)value=value.slice(0,3); // 限制输入三位 if(value<400)value=400; // 低于 400 重置为 400
```