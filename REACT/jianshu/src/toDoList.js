import React, { Component } from 'react';
import axios from 'axios'

import TodoListUI from './TodoListUI.js';
import store from './store/index.js'
import { getInputChangeAction, getAddItem, delItem, initListAction } from './store/actionCreators'


class toDoList extends Component {
  componentDidMount () {//生命周期
    console.log('zz');
    axios.get('https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/hot')
      .then((res) => {
        // console.log(res);
        const action = initListAction(res.data.movieList)
        store.dispatch(action)
      })
  }

  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange.bind(this))//响应式取store数据
  }
  handleStoreChange () {
    // console.log('store change');
    this.setState(store.getState())

  }
  handleInputChange (e) {
    //创建一个action
    // console.log(e.target.value);
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    // const newState=
    store.dispatch(action)

  }

  submit () {
    // console.log(e);
    // const action = {
    //   type: ADD_TODO_ITEM,

    // }
    const action = getAddItem()
    store.dispatch(action)
    // this.setState({
    //   inputValue: ''
    // })
  }

  remove (e) {
    // console.log(e);
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   value: e
    // }
    const action = delItem(e)
    store.dispatch(action)
  }
  render () {
    return (
      <TodoListUI inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        submit={this.submit}
        remove={this.remove}
      />
    );
  }

}

export default toDoList
