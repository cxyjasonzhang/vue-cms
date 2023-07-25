import axios from 'axios'

axios.defaults.baseURL = 'https://httpbin.org'

axios
  .get('/image')
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })

new Promise((resolve, reject) => {
  resolve('hello')
  reject('error')
})
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
/**
 * 请求拦截器
 * 第一个参数： 请求发送成功会执行的回调
 * 第二个参数： 请求发送失败会执行的回调
 *  */
axios.interceptors.request.use(
  (config) => {
    // 添加加载动画
    console.log(config)
    return config
  },
  (err) => {
    console.log(err)
    return err
  }
)
/**
 * 响应拦截器
 * 第一个参数： 数据响应成功（服务器正常返回数据）
 * 第二个参数： 服务器响应失败 将错误返回出去
 */
axios.interceptors.response.use(
  (res) => {
    console.log(res)
    return res
  },
  (err) => {
    console.log(err)
    return err
  }
)

console.log(import.meta.env.VITE_APP_BASEURL, '***')

console.log('______')
