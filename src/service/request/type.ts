import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}

export type { HYRequestInterceptors, HYRequestConfig }
