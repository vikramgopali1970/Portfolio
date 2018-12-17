import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from '../Components/Home/Home';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
import ContactMe from "../Components/ContactMe/ContactMe";

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/skills' component={Skills}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/contact' component={ContactMe}/>
    </Switch>
);

export default Routes;
