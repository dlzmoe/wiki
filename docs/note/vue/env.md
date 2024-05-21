# 使用 .env 配置环境

`.env` 命名规则。

```
# 开发环境 .env 文件名
.env.development

# 开发环境 .env 文件名
.env.production

```

在 vue-cli 中，要求环境配置文件必须以 `VUE_APP` 开头，如下：

```
# .env
VUE_APP_BASE_URL = <http://0.0.0.0>

# 使用
const baseURL = process.env.VUE_APP_BASE_URL;

```

修改 `package.json` 文件，在运行指令后加上 `--mode` 标识。

```json
// package.json
"scripts": {
  "dev": "vue-cli-service serve --mode development",
  "build": "vue-cli-service build --mode production",
}

```