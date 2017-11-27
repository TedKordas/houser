import React, { Component } from 'react';
import './App.css';
import router from './router.js'
// import logo from './assets/header_logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
          {router}
      </div>
    );
  }
}

export default App;
