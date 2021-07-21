import axios from 'axios'
export function getDetail (id) {
  return axios.get(`/goods/detail/${id}`)
}