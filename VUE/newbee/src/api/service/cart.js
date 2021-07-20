
import axios from '../axios'

export function getCart (params) {
  return axios.get('/shop-cart', params)
}