import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable');
//immutable.js
//immutable对象
const defaultState = fromJS({
  //immutable对象的set方法会拷贝之前immutable对象的值并修改且返回拷贝后的对象
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // const newState = JSON.parse(JSON.stringify(state))
    // newState.focused = !newState.focused
    // return newState
    return state.set('focused', !state.focused)
  }
  return state
}