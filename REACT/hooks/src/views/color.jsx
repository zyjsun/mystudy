import React, { createContext, useReducer } from "react";
//创建上下文环境
export const colorContext = createContext({})

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_COLOR': return action.color
    default: return state
  }
}
function Color (props) {
  //子组件可以获取到dispatch
  const [color, dispatch] = useReducer(reducer, 'blue')
  return (
    <colorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </colorContext.Provider>
  )
}

export default Color