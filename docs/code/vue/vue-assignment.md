# vue 把一个值赋给两个变量，修改一个变量时，另一个变量也会修改

[https://www.cnblogs.com/webxj/p/16518363.html](https://www.cnblogs.com/webxj/p/16518363.html)

vue 把一个值赋给两个变量，修改一个变量时，另一个变量也会修改。

**原因分析**

```jsx
this.a = res.data;
this.b = res.data;
```

同时给两个变量 a 和 b 赋值时，修改 a 的内容，打印 b 结果是一样的，因为这里的赋值是属于引用传递的，把 [res.data](http://res.data) 这个地址赋给 a 和 b，当修改 a 时，res.data 会同步变动，导致 b 也发生了改变。

这种赋值方式也被称为浅拷贝，当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。

**解决方案**

```jsx
this.a = JSON.parse(JSON.stringify(res.data));
this.b = JSON.parse(JSON.stringify(res.data));
```

使用 JSON.parse 和 JSON.stringify，将他变成一个常量值，这时再赋值给 a 和 b 的时候，就属于值传递了，这种赋值方式也叫做深拷贝，每个对象都对应一个新的空间，和其他对象互不影响。