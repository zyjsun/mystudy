import axios from 'axios'
import Vue from 'vue'
const vue = new Vue()

//axios配置

axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://localhost:3000'

//返回拦截
axios.interceptors.response.use(
  (res) => {
    if (res.data.code !== 200) {
      vue.$toast('网络异常')
      return Promise.reject(res)
    }
    return res
  },
  (error) => {
    vue.$toast('网络异常')
    return Promise.reject(error)
  }

)

export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
  })
}

export default {
  MuscicSearch (params) {
    return fetchGet('/search', params)
  }
}