import Vue from 'vue'
import Vuex from './myVuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nums: 123
  },
  mutations: {
    increase (state, arg) {
      state.nums += arg
    }
  },
  actions: {
    asyncIncrease ({ commit }, arg) {//commit为上下文的内容
      setTimeout(() => {
        commit('increase', arg)
      }, 1000)
    }
  },
  getters: {
    newNum: (state) => {
      return state.nums * 2
    }
  },
  modules: {
  }
})
