// 封装 axios
import axios from 'axios'

// 项目基地址
const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'

// 创建实例
const request = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
