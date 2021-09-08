import React, { useContext } from "react";
import { colorContext } from "./color";
function ShowArea () {
  const { color } = useContext(colorContext)
  return (
    <div style={{ color: color }}>今天的心情是-红色</div>
  )
}

export default ShowArea