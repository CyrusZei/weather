import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import App from './App';
import './index.css';
import Weather from './component/Weather';
import About from './component/About';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='about' component={About}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
