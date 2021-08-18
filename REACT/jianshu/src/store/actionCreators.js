import { DELETE_TODO_ITEM, ADD_TODO_ITEM, CHANGE_INPUT_VALUE, INIT_LIST_ITEM } from './actionType'
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItem = () => ({
  type: ADD_TODO_ITEM
})

export const delItem = (value) => ({
  type: DELETE_TODO_ITEM,
  value
})

export const initListAction = (data) => ({
  type: INIT_LIST_ITEM,
  data
})

