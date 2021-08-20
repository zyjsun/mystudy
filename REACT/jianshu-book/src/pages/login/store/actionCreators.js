import axios from "axios";

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`https://www.fastmock.site/mock/d52b4e0e4971b96747d2006154a938ae/jianshu/login?${account}&${password}`).then(res => {
      const result = res.data
      if (result) {
        dispatch({
          type: 'change_login',
          value: true
        })
      }
    })
  }
}