import *as types from '../types'
const state = {
  showSidebar: false,
  searchHistory: ['zjl', 'zxk']
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
    // !state.showSidebar
  },
  [types.COM_SHOW_HISTORY_LIST] (state, query) {
    if (state.searchHistory.includes(query)) {
      return
    } else {
      state.searchHistory.push(query)
    }
  },
  [types.COM_DELETE_HISTORY_LIST] (state, index) {
    state.searchHistory.splice(index, 1)
  },
  [types.COM_CLEAR_HISTORY_LIST] (state) {
    state.searchHistory = []
  }
}

const actions = {
  //在actions调用mutations中的方法
  setShowSidebar ({ commit }, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  setHistoryList ({ commit }, query) {
    commit(types.COM_SHOW_HISTORY_LIST, query)
  },
  removeHistoryList ({ commit }, index) {
    commit(types.COM_DELETE_HISTORY_LIST, index)
  },
  clearHistoryList ({ commit }) {
    commit(types.COM_CLEAR_HISTORY_LIST)
  }
}

const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory
}

export default {
  state, mutations, actions, getters
}