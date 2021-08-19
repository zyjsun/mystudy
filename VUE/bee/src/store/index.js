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
    _id: '',
    loveArr: [],
    loveContentArr: []
  },
  mutations: {
    getLoveList (state) {
      console.log(1);
      state.loveArr.forEach((item, index) => {
        if (item == true) {
          state.loveContentArr.push(state.travelList.allNote[index])
        }
      })

    }
  },
  actions: {
    async getUser ({ state }) {
      const token = getLocal('token')
      state._id = token
      state.userInfo = await getInfo({
        _id: token
      })
    },
    async getTrevalList ({ state }) {
      state.travelList = await getList()
      for (let i = 0; i < state.travelList.allNote.length; i++) {
        state.goodnums[i] = state.travelList.allNote[i].goodnums
      }
      console.log(state.goodnums);
    },

  },
  modules: {

  }
})
