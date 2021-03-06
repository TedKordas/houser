import React, { Component } from 'react';
import './App.css';
import router from './router.js'
// import logo from './assets/header_logo.png'
import { Switch, Route } from "react-router-dom";
import Landing from './components/landing/landing.js';
import Dashboard from './components/dashboard/dashboard.js';
import Wizard1 from './components/wizards/wizard1/Wizard1.js';
import Wizard2 from './components/wizards/wizard2/Wizard2.js';
import Wizard3 from './components/wizards/wizard3/Wizard3.js';
import Wizard4 from './components/wizards/wizard4/Wizard4.js';
import Wizard5 from './components/wizards/wizard5/Wizard5.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      {router}
        {/* <Switch>
          <Route component={Landing} exact path='/' />
          <Route render={() => <Dashboard/>} exact path='/dashboard' />
          <Route component={Wizard1} exact path='/wizard1' />
          <Route component={Wizard2} exact path='/wizard2' />
          <Route component={Wizard3} exact path='/wizard3' />
          <Route component={Wizard4} exact path='/wizard4' />
          <Route component={Wizard5} exact path='/wizard5' />

        </Switch> */}
      </div>
    );
  }
}

export default App;
