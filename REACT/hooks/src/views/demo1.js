import React, { useState } from 'react';

function Demo1 () {
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
export default Demo1;
