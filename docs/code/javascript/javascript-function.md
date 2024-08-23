# javascript 原生事件

## 禁用鼠标右键

```
function stopMouseMenu() {
   document.oncontextmenu = function () {
     return false;
   };
}

stopMouseMenu();
```

## 禁止保存

```
document.onkeydown = function(){
  if (event.ctrlKey && window.event.keyCode==83){
    return false;
  }
}
```

## 是否允许触摸事件

```
function initUseTouchEvents() {
   if (/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)){
     window.useTouchEvents = true;
   } else {
     window.useTouchEvents = false;
   }
 },

initUseTouchEvents();
```

## 滚动事件

```
window.addEventListener('scroll', (event) => {
  console.log('滚动...');
});
```

## 页面滚动到顶部

```
function scrollToTop() {
   window.scrollTo({ top: 0, behavior: "smooth" });
}

scrollToTop();
```

## 页面滚动到某个元素

```
function scrollToEL(el) {
   let element = document.querySelector(el);
   element.scrollIntoView({ behavior: "smooth" });
}

scrollToEL('#sdiv');
```

## 获取滚动的位置

```
function getScrollPosition(el) {
   let element = el ? el : window;
   let x = element.pageXOffset !== undefined ? element.pageXOffset : element.scrollLeft;
   let y = element.pageYOffset !== undefined ? element.pageYOffset : element.scrollTop;
   return { x, y };
 }

let res = getScrollPosition(document.querySelector('#sdiv'));
console.log(res)
```

## 随机数组排序

```
function getRandomArrySort(arr) {
   arr.sort(function () {
     return 0.5 - Math.random();
   });
}

let res = getRandomArrySort([1,2,3,4]);
console.log(res)
```

## 随机字符串

```
function getRandomStr(typeArr, num) {
   let str = "";
   let charStr = "";
   num = num || 6;
   typeArr.map(function (type) {
     switch (type) {
       case "Uppercase":
         charStr += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
         break;
       case "Lowercase":
         charStr += "abcdefghijklmnopqrstuvwxyz";
         break;
       case "Number":
         charStr += "0123456789";
         break;
       case "Symbol":
         charStr += "!@#$%^&*";
         break;
       default:
         break;
     }
  });
  for (let i = 0; i < num; i++) {
     let index = Math.round(Math.random() * (charStr.length - 1));
     str += charStr.substring(index, index + 1);
  }
  return str;
}

let res = getRandomStr(['Uppercase','Number',"Lowercase","Symbol"],8);
console.log(res)
```

## 截取字符串

```
/**
  * @param {String} str 必传，需要截取的字符串。
  * @param {String} interceptstr 必传，截取某字符。
  * @param {String} [interceptType=""]  选传，截取类型。
  *                                     1."front" 截取某字符前面的字符串。
  *                                     2."end"   截取某字符后面的字符串。
  *                                     3.""      不截取字符串。
  * @returns {String} 截取后的字符串。
  *
  */
function getInterceptstr(str, interceptstr, interceptType) {
   let index = str.lastIndexOf(interceptstr);
   switch (interceptType) {
       case "front":
           str = str.substring(0, index);
           break;
       case "end":
           str = str.substring(index + 1, str.length);
           break;
       default:
           break;
   }
   return str;
}

let res = getInterceptstr("aaaaa|dasdsdasda", "|", "front");
console.log(res);
```

## 清除字符串的空格、回车、换行符

```
function cleanSpace(str) {
   return str.replace(/[\r\n]/g, "").replace(/\s/g, "");
}

let res = cleanSpace("aaa  aa   ")
console.log(res);
```

## url 返回刷新

```
function goBackClearCache() {
   window.addEventListener("pageshow", (e) => e.persisted && location.reload());
}

goBackClearCache()
```

## 网页判断来源页面的 window 方法

直接调用这个方法。

```jsx
document.referrer
```