import { createStore } from 'vuex'
import { getLocal } from '../common/local'
import { getInfo } from '../../api/service/user'
export default createStore({
  state: {
    userInfo: {

    },
    _id: ''
  },
  mutations: {

  },
  actions: {
    async getUser ({ state }) {
      const token = getLocal('token')
      state._id = token
      state.userInfo = await getInfo({
        _id: token
      })
      // console.log(state.userInfo)
      // return this.state.userInfo._user
      // console.log(this.state.userInfo)
    }
  },
  modules: {

  }
})
