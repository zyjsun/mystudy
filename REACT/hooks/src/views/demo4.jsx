import React, { useReducer } from 'react';
import ShowArea from './demo4-1';
import Button from './button';
import Color from './color';

function Demo () {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'add': return state + 1;
      case 'jian': return state - 1;
      default: return state
    }
  }, 0)
  return (
    <div>
      <h2>目前得分{count}</h2>
      <button onClick={() => dispatch('add')}>+</button>
      <button onClick={() => dispatch('jian')}>-</button>
      <hr />
      <Color>
        <ShowArea />
        <Button />
      </Color>
    </div>

  )
}


export default Demo;
