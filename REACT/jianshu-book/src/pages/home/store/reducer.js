import { fromJS } from "immutable"
const defaultState = fromJS({
  articleList: []
})

export default (state = defaultState, action) => {
  if (action.type === 'change_home_data') {
    return state.set('articleList', action.list)
  }
  if (action.type === 'add_home_data') {//加上内容
    return state.merge({ 'articleList': state.get('articleList').concat(action.list) })
  }
  return state
}

