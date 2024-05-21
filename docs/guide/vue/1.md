# 常见方法

## 1. 在 v-for 中写复选框

```js
<div class="item" v-for="(item,index) in tableData" :key="index">
  <el-checkbox @change="handleChange(item)" v-model="item.checked"></el-checkbox>
</div>

<script>
export default {
  data() {
    return {
      tableData: [
        { checked: false },
        { checked: false },
        { checked: false },
      ],
    };
  },
  methods: {
    handleChange(item) {
      // 处理复选框的选中状态变化
    },
  },
};
</script>
```

## 2. v-cloak 刷新

vue  \{\{ \}\} 模板在刷新的一瞬间会加载不出来，导致页面显示花括号，很不好看，用下面方法处理一下。

```html
<li v-for="item in list" v-cloak>
  {{item.name}}
</li>
```

```css
[v-cloak] {display: none;}
```

## 3. 监听滚动事件

```js
methods: {
  setHead() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop);
    if (scrollTop > 100) {
      // this.activeShow = true;
    } else {
      // this.activeShow = false;
    }
  }
}
mounted() {
// 监听事件
  window.addEventListener("scroll", this.setHead, true);
}
```

## 4. dist-zip 自动压缩

在 vue 项目中，安装 archiver 程序。

```bash
npm i archiver
```

填写要打包的文件夹目录，和生成的 zip 路径以及名称。

```jsx
// scripts/build-zip.js

const fs = require('fs')
const path = require('path')
// eslint-disable-next-line
var archiver = require('archiver')

const extPackageJson = require('../src/manifest.json')

const DEST_DIR = path.join(__dirname, '../dist')
const DEST_ZIP_DIR = path.join(__dirname, '../dist-zip')

const extractExtensionData = () => ({
  name: extPackageJson.name,
  version: extPackageJson.version,
})

const makeDestZipDirIfNotExists = () => {
  if (!fs.existsSync(DEST_ZIP_DIR)) {
    fs.mkdirSync(DEST_ZIP_DIR)
  }
}

const buildZip = (src, dist, zipFilename) => {
  console.info(`Building ${zipFilename}...`)

  const output = fs.createWriteStream(path.join(dist, zipFilename))
  const archive = archiver('zip')
  archive.pipe(output)
  archive.directory(src, false)
  archive.finalize()
}

const main = () => {
  const { name, version } = extractExtensionData()
  const zipFilename = `${name}-v${version}.zip`

  makeDestZipDirIfNotExists()

  buildZip(DEST_DIR, DEST_ZIP_DIR, zipFilename)
}

main()
```