import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from '../Components/MainComponent/MainComponent';

const Routes = (
    <Switch>
        <Route exact path='/' component={Main}/>
    </Switch>
);

export default Routes;