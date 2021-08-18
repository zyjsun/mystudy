import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css'

//无状态组件
const TodoListUI = (props) => {//跟vue的props一样
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <div>
        <Input onChange={props.handleInputChange} type="text"
          value={props.inputValue}
          style={{ width: '300px', marginRight: '10px' }}
          placeholder="todo info" />
        <Button type="primary"
          onClick={props.submit}>提交</Button>
      </div>
      <List
        style={{ marginTop: '10px', width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => {
            props.remove(index)
          }}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}



// class TodoListUI extends Component {
//   render () {
//     return (
//       <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//         <div>
//           <Input onChange={this.props.handleInputChange} type="text"
//             value={this.props.inputValue}
//             style={{ width: '300px', marginRight: '10px' }}
//             placeholder="todo info" />
//           <Button type="primary"
//             onClick={this.props.submit}>提交</Button>
//         </div>
//         <List
//           style={{ marginTop: '10px', width: '300px' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={() => {
//               this.props.remove(index)
//             }}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }

export default TodoListUI;
