import React, { useState, createContext } from "react";
import Counter from './demo3Child'
export const CountContext = createContext()
function Demo () {
  //provide inject
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>你点击了{count}次</p>
      <button onClick={() => {
        setCount(count + 1)
      }}>click me</button>
      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  )
}

export default Demo