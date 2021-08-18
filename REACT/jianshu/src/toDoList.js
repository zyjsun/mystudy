import React, { Component } from 'react';

import { connect } from 'react-redux'


class TodoList extends Component {
  render () {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} type="text" onChange={this.props.changeInputValue} />
          <button>提交</button>
        </div>
        <ul>
          <li>zz</li>
          <li>yy</li>
        </ul>
      </div>

    );
  }
  handleChange (e) {
    console.log(e.target.value);
  }
}

const mapStateToProps = (state) => {//获取store中的state数据
  return {
    inputValue: state.inputValue
  }
}
//store.dispatch 交给props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue (e) {
      console.log(e.target.value);
      // dispatch()
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)//子组件获取父组件数据
