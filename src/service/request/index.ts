import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'
// element-plus 的加载组件
import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_LOADING = true

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  loadingInstance?: LoadingInstance
  showLoading: boolean

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // 请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        const token = ''
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        console.log('请求拦截成功')
        if (this.showLoading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: '正在加載中...',
            background: 'rgba(0,0,0,.5)',
            fullscreen: true
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都有的拦截器：响应成功拦截')
        // 关闭loading
        this.loadingInstance?.close()
        const data = res.data
        if (data.code === 0) {
          console.log('响应失败')
        } else {
          // 将具体的信息返回出去
          return data
        }
      },
      (err) => {
        console.log('失败响应拦截器')
        this.loadingInstance?.close()
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
