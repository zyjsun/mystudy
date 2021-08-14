import axios from "../axios"
export function sendGoodImg (params) {
  return axios.post('/sendGoodImg', params)
}

export function getGoodImg (params) {
  return axios.get('/getGoodImg', params)
}