# 控制台输出好看的 console.log

控制台输出好看的 console.log

```
console.log(
`%c Anghunk %c 2.0 `,
'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
);

```

console.clear(); 清除控制中所有的报错。

---

先定义一个变量，使用 `console.table(data)` 方法打印。

```
const data = [
  { "Name": "Alice", "Age": 23, "City": "New York" },
  { "Name": "Bob", "Age": 35, "City": "San Francisco" },
  { "Name": "Charlie", "Age": 18, "City": "London" },
  { "Name": "David", "Age": 29, "City": "Paris" },
];

console.table(data);

```

![Untitled](%E6%8E%A7%E5%88%B6%E5%8F%B0%E8%BE%93%E5%87%BA%E5%A5%BD%E7%9C%8B%E7%9A%84%20console%20log%20ca5649a2e9ad4ef88349efcbbbab0440/Untitled.png)