import axios from "../axios"

export function add (params) {
  return axios.post('/addNote', params)
}

export function getList (params) {
  return axios.get('/showNote', params)
}

export function delList (params) {
  return axios.post('/delNote', params)
}

export function goods (params) {
  return axios.post('/goods', params)
}
