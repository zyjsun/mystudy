import { createStore } from 'vuex'
import { getLocal } from '../common/local'
import { getInfo } from '../../api/service/user'
import { getList } from '../../api/service/TravelNote'
export default createStore({
  state: {
    userInfo: {
    },
    travelList: {

    },
    goodnums: [],
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
    },
    async getTrevalList ({ state }) {
      state.travelList = await getList()
      for (let i = 0; i < state.travelList.allNote.length; i++) {
        state.goodnums[i] = state.travelList.allNote[i].goodnums
      }
      console.log(state.goodnums);
    }
  },
  modules: {

  }
})
