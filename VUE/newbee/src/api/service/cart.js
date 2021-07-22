
import axios from '../axios'

export function getCart (params) {
  return axios.get('/shop-cart', params)
}

export function addCart (params) {//{goodsCount:1,goodsId:10892}
  return axios.post('/shop-cart', params)
}

export function removeCart (params) {
  return axios.delete(`/shop-cart/${params}`)
}

export function getByCartItemIds (params) {
  return axios.get('/shop-cart/settle', { params });
}

