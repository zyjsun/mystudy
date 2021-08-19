import axios from "../axios"
export function postLoveContext (params) {
  return axios.post('/postLoveContext', params)
}

export function getLoveContext (params) {
  return axios.post('/getLoveContext', params)
}