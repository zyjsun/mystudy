import axios from '../axios'

export function getHome () {
  return axios.get('/index-infos')
}