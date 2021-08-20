import { reducer as headerReducer } from '../common/header/store/index'
import { reducer as homeReducer } from '../pages/home/store/index'
import { reducer as LoginReducer } from '../pages/login/store/index'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  login: LoginReducer
})
export default reducer
