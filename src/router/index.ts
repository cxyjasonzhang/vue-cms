import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: './login'
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/Main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
