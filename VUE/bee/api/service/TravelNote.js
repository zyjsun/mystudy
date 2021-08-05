import axios from "../axios"

export function add (params) {
  return axios.post('/addNote', params)
}
