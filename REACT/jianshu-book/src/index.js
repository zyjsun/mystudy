import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';
import { GlobalIconstyle } from './statics/iconfont/iconfont'

ReactDOM.render(
  <React.StrictMode>
    <GlobalIconstyle></GlobalIconstyle>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


