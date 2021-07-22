import { createStore } from 'vuex'
import { getCart } from '../api/service/cart'
export default createStore({
  state: {
    cartCount: 0
  },
  mutations: {
    addCart (state, payload) {
      state.cartCount = payload.count
    }
  },
  actions: {
    async updateCart ({ commit }) {
      const { data } = await getCart()
      commit('addCart', {
        count: data.length || 0
      })
    }
  },
  modules: {
  }
})
