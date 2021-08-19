
import axios from 'axios'
import { Toast } from 'vant'
// import { useRoute } from 'vue-router'

// import router from '../src/router/index'

axios.defaults.baseURL = 'http://127.0.0.1:3001'
// axios.defaults.withCredentials = true//跨域请求可以携带cookie
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  // const route = useRoute()
  // let a = route.params
  // console.log(a);

  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常')
    return Promise.reject(res)
  }
  if (res.data.resultCode !== 200) {
    if (res.data.message) Toast.fail(res.data.message)
    return Promise.reject(this.data)
  } else {
    // console.log(res.data.message);
    if (res.data.message == "用户已经登录" || res.data.message == undefined) {
      // console.log(1)
    } else {
      Toast.success(res.data.message)
    }



  }
  return res.data
})

export default axios
