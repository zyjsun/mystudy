import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem'
class ToDoList extends Component {
  constructor(props) {
    // this.name='张三'
    super(props)
    this.state = {
      list: ['zjy', 'zyj'],
      inputValue: '',
    }
  }
  handleInputChange (e) {//无词法作用域
    // console.log(e.target.value);
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: e.target.value
    })//响应式
  }
  subMit () {
    // let arr=[]
    // arr.push(e)
    // this.state.list.push(this.state.inputValue)
    console.log(this.state.list);
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    })
  }

  handleItemDelete (index) {
    console.log(index);
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  render () {
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input id="insertArea" className="input" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}></input>
          <button onClick={this.subMit.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <TodoItem key={index} content={item} index={index} ItemDelete={this.handleItemDelete.bind(this)} />
              )
              // return <li key={index} onClick={this.handleItemDelete.bind(this, index)}
              //   dangerouslySetInnerHTML={{ __html: item }}>

              // </li>s
            })

          }
        </ul>

      </Fragment>
    )
  }
}

export default ToDoList