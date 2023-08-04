import { createApp } from 'vue'
import './style.css'
import 'normalize.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import { useLoginStore } from '@/store/login/loginStore'

// import '@/service/axios-demo'
// 全局引入element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 如果您正在使用CDN引入，请删除下面一行。 注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const pinia = createPinia()

app.use(pinia)
const store = useLoginStore()
store.initLocalData()
app.use(router)
app.mount('#app')
