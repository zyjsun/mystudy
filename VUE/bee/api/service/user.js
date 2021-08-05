import axios from "../axios"

export function login (params) {
  return axios.post('/login', params)
}

export function register (params) {
  return axios.post('/register', params)
}