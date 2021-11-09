import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterApp from './components/CounterApp';




ReactDOM.render(
    <CounterApp 
      value = { 5 }
    />,
  document.getElementById('root')
);

reportWebVitals();
