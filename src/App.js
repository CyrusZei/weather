import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './component/NavBar';


var App = (props) => {
  return (
    <div>
      <Navbar />
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}

export default App;
