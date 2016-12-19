import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

var Navbar = React.createClass({

  render:function(){
    return(
      <div>
          <h3>Navbar Component</h3>
          <IndexLink to='/' activeClassName='active'>Get Weather</IndexLink>
          <Link to='/about'  activeClassName='active'>About</Link>
          <Link to='/examples'  activeClassName='active'>Examples</Link>
      </div>

    );
  }
});



export default Navbar;
