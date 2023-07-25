import type { AxiosRequestConfig } from 'axios'

interface HYRequestInterceptors {
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (err: any) => any
}

interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
  showLoading?: boolean
}

export type { HYRequestInterceptors, HYRequestConfig }
