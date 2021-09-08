import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// class demo2 extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       count: 0
//     }
//   }
//   componentDidMount(){
//     console.log(`comdidmount=>你点击了${this.state.count}`);
//   }
//   componentDidUpdate(){
//     console.log(`componentDidUpdate=>你点击了${this.state.count}`);
//   }
//   render() {
//     return (
//       <div>
//          <button onClick={this.add.bind(this)}>click me</button>
//       </div>
//     );
//   }
//   add(){
//     this.setState(
//       count: this.state.count+1
//     )
//   }
// }

//hooks 高阶函数 组件内的状态发生变化useEffect就会执行
function Demo2 () {
  const [count, setCount] = useState(0)
  useEffect(() => {//异步执行
    console.log(123);
  }, [count])//只有count发生变化才执行
  return (
    <div>
      <p>你点击了{count}次</p>
      <button onClick={() => { setCount(count + 1) }}>click me</button>
      <Router>
        <ul>
          <li><Link to='/' >首页</Link></li>
          <li><Link to='/list'>列表</Link></li>
        </ul>
        <Route path='/' exact component={Home}></Route>
        <Route path='/list' component={List}></Route>
      </Router>
    </div>
  )
}

function Home () {
  useEffect(() => {
    console.log('这是首页');
    return () => {
      console.log('离开首页面');//解绑
    }
  })
  return <h2>首页</h2>
}

function List () {
  useEffect(() => {
    console.log('这是列表页');
    return () => {
      console.log('离开list页面');
    }
  })
  return <h2>列表</h2>
}
export default Demo2;
