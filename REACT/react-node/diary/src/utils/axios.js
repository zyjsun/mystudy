import axios from 'axios'
import { Toast } from 'antd-mobile'
// 请求地址前缀
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:7001' : ''
axios.defaults.timeout = 10000
// 是否需要凭证 
// 是否跨站点访问控制请求 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'

//响应拦截
axios.interceptors.response.use(res => {
  if (res.data.status !== 200) {
    if (res.data.message) {
      Toast(res.data.message)
      return Promise.reject(res)
    }
  } else {
    return res.data
  }
})

export default axios
