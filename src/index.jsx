import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './components/App';
import customHistory from './history';
import './styles.css';

ReactDOM.render((
  <Router history={customHistory} >
    <App />
  </Router>
), document.getElementById('root'));
