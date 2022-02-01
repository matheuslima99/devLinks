import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as C from './App.styles'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <C.GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

