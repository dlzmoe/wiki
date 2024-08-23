# nrm / yrm 切换 npm 安装源

使用 yrm 修改下载源后，nrm 会同步修改

### 1. 全局安装

```jsx
npm i -g nrm
npm i -g yrm
```

### 2. 查看版本

```jsx
nrm -V
yrm -V
```

### 3. 查看所有源

```jsx
nrm ls
yrm ls
```

### 4. 切换

```jsx
nrm use <registry>
yrm use <registry>
```