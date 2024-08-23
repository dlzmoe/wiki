# localStorage 相关

```jsx
// 存入
const arr= 100;localStorage.setItem("number", JSON.stringify(arr));
```

```jsx
// 读取
const number = JSON.parse(localStorage.getItem("number"));
const number = JSON.stringify(localStorage.getItem("number"));  
// 获取字符串
```

‍

- 如果要删除/清除本地存储中的所有值，使用：`localStorage.clear();`
- 如果要从本地存储中删除特定项，使用：`localStorage.removeItem(key);`

‍

JSON.parse()

如果获取到的数组变成字符串形式，用上面的方法可以转一下