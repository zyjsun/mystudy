import { DELETE_TODO_ITEM, ADD_TODO_ITEM, CHANGE_INPUT_VALUE, INIT_LIST_ITEM } from './actionType'
const defaultState = {
  inputValue: '',
  list: [1, 2, 3]
}
//reducer 可以接受state,但不能修改state
const reducer = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    // console.log(state, action);
    newState.inputValue = action.value
    return newState//返回的值会更新
  } else if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    // console.log(state, action);
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  } else if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    // console.log(state, action);
    newState.list.splice(action.value, 1)
    return newState
  } else if (action.type === INIT_LIST_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    const arr = action.data.map((item) => {
      return item.nm
    })
    newState.list = arr
    // console.log(action.data);
    return newState
  }
  return state
}

export default reducer