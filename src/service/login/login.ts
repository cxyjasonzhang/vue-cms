import hyRequest from '@/service/index'
import type { LoginPayloadType, LoginResultDataType } from './types'
import type { IDataType } from '@/service/types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 加上用户的id
  UserMenus = '/role/' // role/id/menu
}

// 账号登录请求
export function accountLoginRequest(payload: LoginPayloadType) {
  return hyRequest.post<IDataType<LoginResultDataType>>({
    url: LoginAPI.AccountLogin,
    data: payload
  })
}

export function requestUserInfoById(id: number) {
  // 其返回类型接口是否定义 自己决定
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
