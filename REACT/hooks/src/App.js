import React, { useState } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }
//   render () {
//     return (
//       <div>
//         <p>你点击了{this.state.count}次</p>
//         <button onClick={this.add.bind(this)}>click me</button>
//       </div>
//     );
//   }
//   add () {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
// }
function App () {
  const [count, setCount] = useState(0)//不能在条件语句中
  const [person, setPerson] = useState({ name: 'zz', age: 18, sex: '男' })
  return (
    <div>
      <p>姓名：{person.name}</p>
      <p>年龄：{person.age}</p>
      <p>性别：{person.sex}</p>
      <p>你点击了{count}次</p>
      <button onClick={() => {
        setCount(count + 1)
        setPerson({ name: 'zyj', age: 19, sex: 'zz' })
      }}>click me</button>
    </div>
  );
}
export default App;
