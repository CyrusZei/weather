import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import App from './App';
import './index.css';
import Weather from './component/Weather';




ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
