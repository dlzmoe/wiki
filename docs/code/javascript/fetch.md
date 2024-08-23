# fetch 接口

[https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

**Fetch**

简单的示例

```jsx
fetch("https://example.com/movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
```