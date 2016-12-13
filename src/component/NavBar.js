import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

var Navbar = React.createClass({

  render:function(){
    return(
      <div>
          <h3>Navbar Component</h3>
          <IndexLink to='/' activeClassName='active'>Get Weather</IndexLink>
          <IndexLink to='/about'  activeClassName='active'>About</IndexLink>
          <IndexLink to='/examples'  activeClassName='active'>Examples</IndexLink>
      </div>

    );
  }
});



export default Navbar;
