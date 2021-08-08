
import axios from 'axios'
import { Toast } from 'vant'
// import router from '../src/router/index'

axios.defaults.baseURL = 'http://127.0.0.1:3000'
// axios.defaults.withCredentials = true//跨域请求可以携带cookie
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  // console.log(res)
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常')
    return Promise.reject(res)
  }
  if (res.data.resultCode !== 200) {
    if (res.data.message) Toast.fail(res.data.message)
    return Promise.reject(this.data)
  } else {
    Toast.success(res.data.message)
    // router.push({ path: '/' })
  }
  return res.data
})

export default axios
