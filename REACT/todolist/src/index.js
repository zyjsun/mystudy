import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './ToDoList'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);


