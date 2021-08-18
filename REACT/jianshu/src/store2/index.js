import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import mySaga from './sagas'
// import thunk from 'redux-thunk';//让redux可以接受函数action
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
)
const store = createStore(
  reducer,
  enhancer
)
sagaMiddleware.run(mySaga)
export default store;
