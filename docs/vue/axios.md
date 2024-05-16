# axios 请求

## 1. axios 拦截器

拦截401，对非登录请求添加token

```js
// request.js
const axiosInstance = axios.create(axiosOption);
axiosInstance.interceptors.request.use(
  config => {
    if (config.responseType == "blob") {
      config.headers['responseType'] = 'blob'
    }

    // 在请求头中添加 token，但只对非登录请求添加
    if (config.url !== '/login/index') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 拦截 401 token 过期
axiosInstance.interceptors.response.use(
  response => {
    // 处理响应数据
    return response;
  },
  error => {
    // 判断是否为401错误
    if (error.response && error.response.status === 401) {
      console.log('401', error);
      // 处理401错误，比如跳转到登录页面或重新获取token
      router.push('/login/index');
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);
```

## 2. 封装 axios 请求

先配置好 axios 请求头以及接口域名，拦截器 request 等。

有两种请求方式

1. 请求参数是拼接在接口后
2. 请求参数放在请求头中

```js
// api/index

import request from './request';
// 文档接口

// 初始化数据
export function getData(site_id) {
  return request({
    url: `/xxx/xxx?id=${site_id}`,
    method: 'get',
  })
}

export function getData(data) {
  return request({
    url: `/xxx/xxx`,
    method: 'post',
		data,
  })
}

// 上传文件，需要转换成 FormData
export function getData(data) {
  return request({
    url: `/xxx/xxx`,
    method: 'post',
    data,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}
```

在组件中调用。

```js
// index.vue

import { getData} from "@/api";

/* 在 methods 中调用接口 */
methods: {
	/* 参数拼接在接口后 */
	async onDataList() {
		try {
	 	  const { data: res } = await getData(this.id);
		  if (res.code == 200) {
		    console.log(res.data);
		  }
		} catch (error) {
		  this.$message.warning("服务器异常，请联系管理员！");
		}
	},

  /* 参数在请求头中 */
	async onDataList() {
		try {
		 const params = {
        id: "111",
      };
	 	  const { data: res } = await getData(params );
		  if (res.code == 200) {
		    console.log(res.data);
		  }
		} catch (error) {
		  this.$message.warning("服务器异常，请联系管理员！");
		}
	},
},
created() {
	this.onDataList();
}

```