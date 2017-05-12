import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import General from '../general';
import Politics from '../politics';
import Business from '../business';
import Technology from '../technology';

class TopbarRoutes extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={General}></Route>
                    <Route exact path='/politics' component={Politics}></Route>
                    <Route exact path='/business' component={Business}></Route>
                    <Route exact path='/technology' component={Technology}></Route>
                    <Route exact path='/science-and-nature' component={General}></Route>
                    <Route exact path='/entertainment' component={General}></Route>
                    <Route exact path='/music' component={General}></Route>
                    <Route exact path='/sports' component={General}></Route>
                </Switch>
            </div>
        );
    }
}

export default TopbarRoutes;
