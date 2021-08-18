import axios from "../axios"
export function getLoveContext (params) {
  return axios.post('/getLoveContext', params)
}