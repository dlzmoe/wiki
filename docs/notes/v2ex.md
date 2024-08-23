# v2ex 获取每个帖子的详情接口

[https://www.v2ex.com/api/v2/topics/1010722](https://www.v2ex.com/api/v2/topics/1010722)

```jsx
// this.url  [1010722](https://www.v2ex.com/api/v2/topics/1010722)
// this.token   v2ex 用户的 token

fetch("https://www.v2ex.com/api/v2/topics/" + this.url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + this.token,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```