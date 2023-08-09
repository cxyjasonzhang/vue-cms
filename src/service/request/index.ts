import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'
import LocalCache from '@/utils/cache'

const DEFAULT_LOADING = true

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // 请求拦截器（自定义）
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    // 响应拦截器 （自定义）
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        const token = LocalCache.getCache('token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        console.log('请求拦截成功')
        if (this.showLoading) {
          // 设置加载效果
          console.log('到时整改为另外一种方案')
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 关闭loading
        const data = res.data
        if (data.code !== 0) {
          console.log('响应失败')
        } else {
          // 将具体的信息返回出去
          return data
        }
      },
      (err) => {
        console.log('失败响应拦截器')
        if (err.response.status === 401) {
          console.log('token失效')
        }

        return err
      }
    )
  }
  // 可以自定义一个请求的拦截器
  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          console.log(res)
          resolve(res)
          // 将showLoading设置为true，阻止loading
          this.showLoading = DEFAULT_LOADING
        })
        .catch((err) => {
          console.log(err)
          reject(err)
          // 将showLoading设置为true，阻止loading
          this.showLoading = DEFAULT_LOADING
        })
    })
  }

  get<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
}
export default HYRequest
