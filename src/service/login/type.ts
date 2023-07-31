export interface LoginPayloadType {
  name: string
  password: string
}

export interface LoginResultDataType {
  id: number
  name: string
  token: string
}

// 接口响应的数据类型
export interface IDataType<T = any> {
  code: number
  data: T
}
