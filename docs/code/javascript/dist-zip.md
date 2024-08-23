# dist-zip 自动压缩

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