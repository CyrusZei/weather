import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import App from './App';
import './index.css';
import Weather from './component/Weather';
import About from './component/About';
import Examples from './component/Examples';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='about' component={About}/>
      <Route path='examples' component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
