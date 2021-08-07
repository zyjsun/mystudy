import axios from "../axios"

export function add (params) {
  return axios.post('/addNote', params)
}

export function getList (params) {
  return axios.get('/showNote', params)
}
