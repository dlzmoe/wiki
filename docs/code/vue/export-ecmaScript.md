# 无法从非 EcmaScript 模块导入命名导出

在 vue 中引入 markdown-it 模块时遇到一个问题，dev 运行时报出以下错误，无法从非 EcmaScript 模块导入命名导出。

```bash
 error  in ./node_modules/markdown-it/lib/common/utils.mjs
Can't import the named export 'P' from non EcmaScript module (only default export is available)
 error  in ./node_modules/markdown-it/lib/index.mjs
Can't import the named export 'decode' from non EcmaScript module (only default export is available)
 error  in ./node_modules/markdown-it/lib/index.mjs
Can't import the named export 'decode' from non EcmaScript module (only default export is available)
 error  in ./node_modules/markdown-it/lib/common/utils.mjs
Can't import the named export 'decodeHTML' from non EcmaScript module (only default export is available)
 error  in ./node_modules/markdown-it/lib/rules_inline/entity.mjs
Can't import the named export 'decodeHTML' from non EcmaScript module (only default export is available)
 error  in ./node_modules/markdown-it/lib/index.mjs
Can't import the named export 'encode' from non EcmaScript module (only default export is available)
 error  in ./node_modules/markdown-it/lib/index.mjs
Can't import the named export 'format' from non EcmaScript module (only default export is available)
 error  in ./node_modules/markdown-it/lib/index.mjs
Can't import the named export 'format' from non EcmaScript module (only default export is available)
 error  in ./node_modules/markdown-it/lib/index.mjs
Can't import the named export 'parse' from non EcmaScript module (only default export is available)
 error  in ./node_modules/markdown-it/lib/index.mjs
Can't import the named export 'parse' from non EcmaScript module (only default export is available)

```

导致 import 该库出现错误，解决方案需要修改 `vue.config.js`

```jsx
// vue.config.js
module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }]
    }
  },
};

```

参考文献：[https://github.com/vuejs/pinia/issues/675](https://github.com/vuejs/pinia/issues/675)