# 正则

### 1. 替换

str = aaa [[123]] [[123]]

`const result1 = str.replace(/(?<=\[\[).*?(?=]])/g, '')`

过滤所有 `[[  ]]` 中的内容

‍

`result1.replace(/\[\[/g, "")` 过滤 [[ 字符 ，需要转义使用 `\` 符号

`result2.replace(/]]/g, "")` 过滤 ]] 字符，不需要转义

‍ ### 匹配 A 和 B 之间的内容

```markdown
A.*?B
```