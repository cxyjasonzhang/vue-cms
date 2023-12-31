import type { RouteRecordRaw } from 'vue-router'
import type { IBreadCrumb } from '@/baseUI/breadCrumb/type'

export function loadLocalRoutes(): RouteRecordRaw[] {
  // 1. 先去加载默认的所有routes
  const localRoutes: RouteRecordRaw[] = []
  // 此时是vite搭建的项目 不是webpack环境
  // const routeFiles = require.context('../router/main', true, /\.ts/) // webpack的一个函数
  // 读取文件内容
  const routeFiles: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', { eager: true })
  for (const path in routeFiles) {
    localRoutes.push(routeFiles[path].default)
  }
  return localRoutes
}

export let firstMenu: any = null
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  // 1. 加载本地路由
  const localRoutes = loadLocalRoutes()
  // 2. 根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const subMenu of menu.children) {
      const route = localRoutes.find((route) => route.path === subMenu.url)
      if (route) {
        // 1. 给route的顶层菜单添加重定向功能（只需添加一次即可）
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({
            path: menu.url,
            redirect: route.path
          })
        }
        routes.push(route)
        console.log(routes, 'routes')

        // 记录第一个被匹配的菜单
        if (!firstMenu && route) firstMenu = subMenu
      }
    }
  }
  return routes
}

export function pathMapBreadCrumb(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadCrumb[] = []
  mapPathToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function mapPathToMenu(menus: any[], currentPath: string, breadCrumbs?: IBreadCrumb[]): any {
  for (const menu of menus) {
    if (menu.type === 1) {
      const findMenu = mapPathToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadCrumbs?.push({ title: menu.name, path: menu.url })
        breadCrumbs?.push({ title: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
  return breadCrumbs
}

export function mapMenusPermission(userMenus: any[]) {
  const permissions: string[] = []
  const _recursePermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recursePermission(menu.children ?? [])
      } else {
        permissions.push(menu.permission)
      }
    }
  }
  _recursePermission(userMenus)
  return permissions
}

export function menuMapLeafKeys(menus: any[]) {
  console.log(menus, 'menus')

  const leafKeys: number[] = []
  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menus)
  return leafKeys
}
