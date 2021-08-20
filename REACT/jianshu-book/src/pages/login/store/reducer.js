import { fromJS } from "immutable";
const defaultState = fromJS({
  Login: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'change_login':
      return state.set('Login', action.value)
    default:
      return state
  }
}