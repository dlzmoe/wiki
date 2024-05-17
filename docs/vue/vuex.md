# vuex 状态管理

使用 vuex 进行状态管理，很方便，更新数据的时候，其他页面会同步更新。

以及 vuex-persist 库的用法，管理 localStorage 数据。

## 1. 使用方法

一个简单的案例。

```js
// demo1.vue
methods: {
 async setUserData() {
    const data = {
      name: "anghunk",
    };
    console.log(data);
    this.$store.commit("setUserData", data);
  },
}
```

```js
// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({
    userData: state.userData, // 存入 localStorage 的值
  }),
});

export default new Vuex.Store({
  state: {
    userData: {}
  },
  mutations: {
    setUserData(state, data) {
      state.userData = data;
    },
   
  },
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin],
});
```

通过 `setUserData` 方法把数据传到 store 中，然后保存在 `state` 对象中，就是 `state.userData` 。

这里已经存到 vuex 中了，可以在其他页面使用，利用 vue 的计算属性 computed。

```js
// demo2.vue
computed: {
  userData() {
    return this.$store.state.userData;
  },
},
```

## 2. vuex-persist

vuex-persist 是一个管理 localStorage 的库，可以统一保存数据并更新。

```js
// store/index.js
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({
    userData: state.userData, // 存入 localStorage 的值
  }),
});

...
  plugins: [vuexLocal.plugin],
...
```
