import React, { Component } from 'react';
import {Link} from 'react-router';

var Navbar = React.createClass({

  render:function(){
    return(
      <div>
          <h3>Navbar Component</h3>
          <Link to='/'>Get Weather</Link>
          <Link to='/about'>About</Link>
          <Link to='/examples'>Examples</Link>
      </div>

    );
  }
});



export default Navbar;
