# common tempalte

## 说明&要求

> 静态css js 文件存放于：`public/static`

> 路由配置：`src/router`

> 前端自测模拟数据（修改后要重新跑，且发布后不可用）：`mock/`

> 数据请求层，只负责请求数据 `src/api`

> 数据模型层，只负责业务逻辑复杂的数据处理（把结构化数据返回给 views）: `src/models`

> 页面，减少业务逻辑，尽可能尽量只负责渲染: `src/views`

> 全局引入样式，**一定要使用这里的范式来减少工作量和沟通成本**：`src/assets/style/params.less`

> 缓存全局数据 vuex： `src/store`

> 整体布局： `src/layout`

> 项目通用组件： `src/components`

> **规范化命名**：js "驼峰"，html "-"，css "-"，文件命名用 _ 来避免大小写带来的问题

> elementUI 按需加载，加入新内容需配置：`src/elementui`

> echarts 按需加载，加入新内容需配置： `src/echarts`

> 通用功能、方法，cookie localstorage 等：`src/utils`

> 图标支持 svg，可把svg放在 `src/icons/svg` 使用方式： `<sz-svgicon icon-class="juese"></sz-svgicon>`，`juese` 就是svg 文件名称 

> 写组件时给组件加上名字

## 安装项目
```
npm install
```

### 本地开发
```
npm run serve/dev
```

### 发布产品
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 如何配置
See [Configuration Reference](https://cli.vuejs.org/config/).

