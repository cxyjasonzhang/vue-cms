import { useLoginStore } from '@/store/login/loginStore'

// 判断某个页面是否有增删改查按钮权限
export function usePermission(pageName: string, handlerName: string) {
  const loginStore = useLoginStore()
  const permissions = loginStore.userPermissions
  const verifyPermission = `system:${pageName}:${handlerName}`
  // 转成布尔值
  return !!permissions.find((item: string) => item === verifyPermission)
}
