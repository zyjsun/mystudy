import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store/index.js'



class toDoList extends Component {
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
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    // const newState=
    store.dispatch(action)

  }

  submit () {
    // console.log(e);
    const action = {
      type: 'change_list_value',

    }
    store.dispatch(action)
    this.setState({
      inputValue: ''
    })
  }

  remove (e) {
    console.log(e);
    const action = {
      type: 'del_list_value',
      value: e
    }
    store.dispatch(action)
  }
  render () {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input onChange={this.handleInputChange.bind(this)} type="text"
            value={this.state.inputValue}
            style={{ width: '300px', marginRight: '10px' }}
            placeholder="todo info" />
          <Button type="primary" onClick={this.submit.bind(this)}>提交</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.remove.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }

}

export default toDoList
