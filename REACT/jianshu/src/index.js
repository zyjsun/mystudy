import React from 'react';
import ToDoList from './ToDoList';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './store'
const App = (() => {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  )
}
)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


