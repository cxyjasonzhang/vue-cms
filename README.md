# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

**项目搭建规范**

.editorconfig 编写该文件，使得在不同电脑，不同coder之间保持相同的代码风格

使用时安装该插件：`EditorConfig for VS Code`

代码风格

代码缩进

### 二、如何使用prettier工具

> Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

```shell
npm install prettier -D
```

#### VS Code 中如何设置 prettier 配置项

设置 ctrl + s 自动保存

![1689837996757](C:\Users\12080\AppData\Roaming\Typora\typora-user-images\1689837996757.png)

#### VS Code 设置 eslint

```shell
npm install eslint eslint-plugin-vue -D
```



兼容  eslint 和 prettier   需安装以下两个插件：

```shell
npm i eslint-plugin-prettier eslint-config-prettier -D
```

​	

husky： 代码提交前格式化

`git commit -m 'xxxx'`  

```shell
// 安装
npm install husky -D
```

初始化一个git仓库

在github创建一个仓库， 初始化代码 `git init`, 创建一个提交 `git add .   git commit -m'xxxx'`

`git remote add origin https://github.com/Aurorajwj/KnowledgeGraph-of-Tang-and-Song-Poetry.git`   后面那个地址从github仓库看

`git push -u origin master`

commitizen 是一个帮助我们编写规范 commit message 的工具；

`npm install commitizen -D`

`npx commitizen init cz-conventional-changelog --save-dev --save-exact`

`npx cz`  创建提交

### vite.config.js 的配置

```js
// 完整配置文件
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
```



遇到的问题

#### Element-plus 的使用

```shell
npm install element-plus
```

按需引入element-plus:

```ts
// 完整引入  在main.ts中引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 按需引入： 先安装 npm install -D unplugin-vue-components unplugin-auto-import, 然后直接可以在组件中使用
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
```

element-plus 引入图标

安装图标： 

```shell
npm install @element-plus/icons-vue
// 在main.ts 中注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```

自动导入图标集   `npm install unplugin-icons`  看 vite.config.ts 配置

关于app.use  传入函数，其参数是 APP ，传入一个对象 会执行 install 函数，参数会传进来一个APP

`https.bin.org`

axios 的使用：

```
import axios from 'axios'
axios.get
axios.post
axios.all 多个请求 一次返回
axios.intercepter.response.use  响应拦截器
axios.intercepter.request.use  请求拦截器
```

axios的封装 --- 其配置具体见项目

封装类：

关于axios封装报错：

![1690188525311](C:\Users\12080\AppData\Roaming\Typora\typora-user-images\1690188525311.png)

封装 axios 的思路：

1. 用类进行封装
2. 封装请求loading(请求加载效果)





#### 区分不同的环境:

- 开发环境 development
- 生产环境 production
- 测试环境 test

1. 手动修改
2. 使用 process.env.NODE_ENV
3.  .env.development   .env.production .env.test 文件   vue-cli 使用

在vite中也可以创建相关文件：

```typescript
// vue-cli 环境下
VUE_APP_DEV = 'dev-api'
VUE_APP_BASEURL = 'xxxxx'
取值时，这么取： process.env.VUE_APP_BASEURL

// vite 环境下
VITE_APP_DEV = 'dev-api'
VITE_APP_BASEURL = 'xxxxx'
取值： import.meta.env.VITE_APP_BASEURL
```



项目中eslint失效是什么问题？



`.browserslistrc` 文件

```js
> 1%
last 2 versions
not dead
```

`tsconfig.json` 文件？ -- ts的配置文件

```json

```





项目开始：

初始化css样式: 

```shell
// 可以安装normalize.css 然后在main.ts中引入
npm install normalize.css
import 'normalize.css'
```

在项目中使用less：

```shell
npm install less -D
// 在vite.config.js中配置
   css: {
      preprocessorOptions: {
          less: {
              modifyVars: {
                  hack: `true; @import (reference) "${resolve("src/assets/less/index.less")}";`,
              },
              javascriptEnabled: true,
          },
      },
    },

```

```
  // 配置2
  css: {
    preprocessorOptions: {
      less: {
        // 可以为每个样式内容注入额外代码，请注意，如果注入的是实际的样式而不仅仅是变量时，那么这些样式将会在最终的打包产物中重复出现。
      	additionalData: `@import "@/assets/base.less";`,
        math: 'always', // 可以做数学计算
        javascriptEnabled: true,
        // 配置全局变量
        globalVars: {
          'primary-color': '#1890ff'
        }
      }
    }
  }
```

![1690338785925](C:\Users\12080\AppData\Roaming\Typora\typora-user-images\1690338785925.png)

#### 在vite中如何配置，才能自动识别文件（.ts .js .vue等文件）







![1690354144261](C:\Users\12080\AppData\Roaming\Typora\typora-user-images\1690354144261.png)

vue3+ts拿到组件的类型： 

![1690377148058](C:\Users\12080\AppData\Roaming\Typora\typora-user-images\1690377148058.png)

```
适用于 defineComponent 
const account = ref<InstanceType<typeof loginAccount>>()
loginAccount组件导出的是一个对象，根据组件描述，创建组件实例（跟类很像）
<script setup lang="ts"><script /> 中的写法
```



#### 关于登录逻辑：因为有账号登录和手机登录（这是不同的两个组件）？

其登录逻辑写在各自组件中便于维护，由外部登录页面通过在组件上绑定ref，拿到各自组件的ref实例去调用里面的登录方法。



#### vue3+ts项目中使用 pinia 管理数据

> pinia中如何分模块？
>
> 
>
> pinia中如何添加泛型？

vite.config.ts 中配置代理跨域及其原理





关于以下这个警告的解决：
![1690786021684](C:\Users\12080\AppData\Roaming\Typora\typora-user-images\1690786021684.png)

> 报该警告的原因是： 在store的定义文件中 引入 `import { useRouter } from vue-router` 但 useRouter 只能在setup中使用
>
> 解决:  `import router from '@/router/index`  直接从vue-router定义文件中引入 router 
>
> 使用 useStore 同理

#### 主页面搭建

关于 element-plus 中图标的动态引入

```
<el-icon v-if="item.icon">
   <component :is="parseIconName(item.icon)"></component>
</el-icon>
```

在vue3中使用样式穿透的方式不一样

```less
<style lang="less" scoped>
  :deep(.title3){
    background-color:antiquewhite;
  }
</style>
```

关于如何通过设置`css变量`来覆盖`element-plus`中的样式

![1690872367999](C:\Users\12080\AppData\Roaming\Typora\typora-user-images\1690872367999.png)

> 首先新建一个 `element-variables.less`

后台管理权限控制的思路：RBAC

登录 - 用户信息 -菜单信息

不同角色用户注册不同的路由：动态加载数组 （前端规定好不同角色的路由数组） 弊端: 新增角色需要修改前端代码，然后重新部署

项目中动态路由配置： 

1. 首先配置各个路由的配置

   ```js
   // 例如
   const dashboard = () => import('@/views/main/analysis/dashboard/dashboard.vue')
   export default {
     path: '/main/analysis/dashboard',
     name: 'dashboard',
     component: dashboard,
     children: []
   }
   ```

2. 读取各个文件内容`const routeFiles: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', { eager: true })` 放入一个数组中，称之为 routeFiles --->这是本地的所有路由

3. 将userMenu转化为路由， userMenu是通过网络请求拿到的菜单(不同角色对应不同菜单)，

vue中 `PropType`的作用？  用于在用运行时 props 声明时给一个 prop 标注更复杂的类型定义。

`import { PropType } from 'vue'`

```vue
<script setup lang="ts">
import { PropType } from 'vue'
import { IFormItem } from '../type'
defineProps({
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  }
})
</script>
```

关于页面刷新匹配(跳转)到notfound页面  

![1691029693503](C:\Users\12080\AppData\Roaming\Typora\typora-user-images\1691029693503.png)

默认选中：menu列表   defauli-active 的值如何设置？



单向数据流原则：

vue3中添加全局方法： 

```
app.config.globalProperties.$filter = {
	foo() {
	  console.log('foo')
	},
	formatTime() {
	
	}
}
```

关于vue3+typescript项目中导入dayjs

```typescript
import * as dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
const DEFAULT_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUTCDate(utcString: string, format: string = DEFAULT_FORMAT) {
  return dayjs.utc(utcString).format(format)
}
```

请求table数据时存在state中，再从getter中取数据，数据没能及时拿到（请求是异步的）

关于 form 组件与page-search进行数据双向绑定时，在page-search清空数据，form组件内部数据不发生修改的问题，

@update:modelValue 是什么函数

关于组件ref的定义与使用

![1691396907008](C:\Users\12080\AppData\Roaming\Typora\typora-user-images\1691396907008.png)

![1691401935946](C:\Users\12080\AppData\Roaming\Typora\typora-user-images\1691401935946.png)

关于PageContent组件中的插槽不能写死？（不能灵活配置）

 跨组件插槽，

将所有请求表单数据的 store state存储到system中



嵌套表格 default-expand-all

关于按钮权限的控制？

根据菜单列表：3级菜单是按钮菜单 --- 1. 先取到所有的按钮权限，将其放进数组里面（在PageContent.vue组件中进行判断<封装一个hooks来进行判断>）

coder

删除用户

新建用户： hyform  --- 绑定数据 --- 表单

hooks封装：

```

```

控制formItem的显示和隐藏，

