import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from './components/landing/landing.js';
import Dashboard from './components/dashboard/dashboard.js';
import Wizard1 from './components/wizards/wizard1/Wizard1.js';
import Wizard2 from './components/wizards/wizard2/Wizard2.js';
import Wizard3 from './components/wizards/wizard3/Wizard3.js';
import Wizard4 from './components/wizards/wizard4/Wizard4.js';
import Wizard5 from './components/wizards/wizard5/Wizard5.js';

export default (
    <div>
        <Switch>
            <Route component={Landing} exact path='/' />
            <Route component={Dashboard} path='/dashboard' />
            <Route component={Wizard1} path='/wizard/:1' />
            <Route component={Wizard2} path='/wizard2' />
            <Route component={Wizard3} path='/wizard3' />
            <Route component={Wizard4} path='/wizard4' />
            <Route component={Wizard5} path='/wizard5' />

        </Switch>
    </div>
)