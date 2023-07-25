// 设置不同环境下的baseUrl   timeout 请求最大时长

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'https://dog.ceo/api/breeds'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://localhost:6000'
} else {
  BASE_URL = 'http://localhost:8000'
}

export { BASE_URL, TIME_OUT }
