import { createStore } from 'vuex'
export interface State {
  count: number
}
const store = createStore<State>({//放心
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    add(state) {
      state.count++
    }
  }
})

export default store