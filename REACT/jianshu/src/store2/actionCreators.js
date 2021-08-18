import { DELETE_TODO_ITEM, ADD_TODO_ITEM, CHANGE_INPUT_VALUE, INIT_LIST_ITEM, GET_INIT_LIST } from './actionType'
import axios from 'axios'
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

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/hot')
      .then((res) => {
        // console.log(res);
        // const action = initListAction(res.data.movieList)
        // store.dispatch(action)
        const data = res.data.movieList
        // console.log(data);
        const action = initListAction(data)
        dispatch(action)
      })
  }
}

export const getInitList = () => ({
  type: GET_INIT_LIST
})

