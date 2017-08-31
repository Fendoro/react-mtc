import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './Menu';
import menuConfig from '../data.json';

const App = () => (
  <div id="app">
    <Route exact path="/" render={props => <Menu items={menuConfig} {...props} />} />
    <Route path="/:id" render={props => <Menu items={menuConfig} {...props} />} />
  </div>
);

export default App;
