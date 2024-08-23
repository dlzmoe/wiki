# 如何建立一个新的 electron 项目

```
git clone <https://github.com/electron/electron-quick-start> electron
cd electron
npm install
npm start

# 安装构建依赖
npm install --save-dev @electron-forge/cli
npx electron-forge import

✔ Checking your system
✔ Initializing Git Repository
✔ Writing modified package.json file
✔ Installing dependencies
✔ Writing modified package.json file
✔ Fixing .gitignore

# 开始打包成桌面应用
npm run make

```

‍

隐藏顶部菜单栏

```
// main.js
mainWindow.setMenu(null)

```

‍