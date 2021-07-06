import axios from 'axios'

const basUrl = '';//跨域了所以不用放，直接做了代理

export function get(url) {
  return function(params = {}) {
    return axios.get(basUrl + url, {
      params
    }).then(res => {
      const { errno, data } = res.data
      if (errno === 0) {
        return data
      }
    }).catch(err => {
      console.log(err);
    })
  }
}