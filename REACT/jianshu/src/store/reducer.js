const defaultState = {
  inputValue: '123',
  list: [1, 2, 3]
}
//reducer 可以接受state,但不能修改state
const reducer = (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    console.log(state, action);
    newState.inputValue = action.value
    return newState//返回的值会更新
  } else if (action.type === 'change_list_value') {
    const newState = JSON.parse(JSON.stringify(state))
    // console.log(state, action);
    newState.list.push(newState.inputValue)
    return newState
  } else if (action.type === 'del_list_value') {
    const newState = JSON.parse(JSON.stringify(state))
    console.log(state, action);
    newState.list.splice(action.value, 1)
    return newState
  }
  return state
}

export default reducer