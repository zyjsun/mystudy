import { fromJS } from "immutable"
const defaultState = fromJS({
  articleList: []
})

export default (state = defaultState, action) => {
  if (action.type === 'change_home_data') {
    return state.set('articleList', action.list)
  }
  return state
}

