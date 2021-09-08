import React, { useContext } from "react";
import { colorContext } from "./color";
function Button () {
  const { dispatch } = useContext(colorContext)
  return (
    <div>
      <button onClick={() => { dispatch({ type: 'UPDATE_COLOR', color: 'blue' }) }}>蓝色</button>
      <button onClick={() => { dispatch({ type: 'UPDATE_COLOR', color: 'pink' }) }}>粉色</button>
    </div>
  )
}

export default Button