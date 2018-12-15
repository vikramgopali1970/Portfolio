import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from '../Containers/MainComponent/MainComponent';
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/skills' component={Skills}/>
        <Route exact path='/projects' component={Projects}/>
    </Switch>
);

export default Routes;
