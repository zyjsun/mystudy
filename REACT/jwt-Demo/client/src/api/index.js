import axios from 'axios'
import history from './history'
const BASE_URL = 'http://localhost:3001'
axios.interceptors.request.use((config) => {
  let jwtToken = window.localStorage.getItem('jwtToken')
  if (jwtToken) {
    config.headers.authorization = jwtToken
  }
  return config
})

axios.interceptors.response.use(res => {
  if (res.data.code !== 0) {
    return Promise.reject(res.data.error)
  }
  return res
}, (error) => {
  if (error.response.status >= 400 && error.response.status < 500) {
    history.push('/user/signin')
  }
  return Promise.reject(error.response.data.error)
})

export function post (url, body) {
  return axios.post(BASE_URL + url, body)
}