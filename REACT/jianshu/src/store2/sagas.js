import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionType'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList () {
  try {
    const res = yield axios.get('https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/hot')
    const action = initListAction(res.data.movieList)
    yield put(action)//包含dispatch
  } catch (error) {
    console.log(error);
  }

  // axios.get('https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/hot')
  //   .then((res) => {
  //     const data = res.data.movieList
  //     const action = initListAction(data)
  //     // console.log(action);
  //     store.dispatch(action)
  //   })
}

function* mySaga () {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
