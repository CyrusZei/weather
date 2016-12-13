import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
}

export default App;
