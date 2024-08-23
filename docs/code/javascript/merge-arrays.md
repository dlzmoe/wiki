# 提取一个数组的参数值和另一个数组合并到一起

***proposalExecutiveTransacts***  数组里面有很多对象，其中一个参数为  ***executiveUnitCode***  ，要把它取出来，然后跟  ***proposalExecutiveTransactDtos***   合并。

```jsx
 // 给定的数据
const proposalExecutiveTransactDtos = [
  "10012023121509025222764033",
  "10012023121509025788920127"
];

const proposalExecutiveTransacts = [{
  "executiveUnitCode": "10012023121509032172323327"
}];

// 合并数组并提取所需值
const result = proposalExecutiveTransacts
  .map(item => item.executiveUnitCode)
  .concat(proposalExecutiveTransactDtos);

console.log(result);
```