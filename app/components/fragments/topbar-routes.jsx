import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import General from '../general';
import Politics from '../politics';
import Business from '../business';
import Technology from '../technology';
import ScienceAndNature from '../science-and-nature';
import Entertainment from '../entertainment';
import Music from '../music';
import Sports from '../sports';
import Articles from '../articles';

class TopbarRoutes extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={General}></Route>
                    <Route exact path='/general' component={General}></Route>
                    <Route exact path='/politics' component={Politics}></Route>
                    <Route exact path='/business' component={Business}></Route>
                    <Route exact path='/technology' component={Technology}></Route>
                    <Route exact path='/science-and-nature' component={ScienceAndNature}></Route>
                    <Route exact path='/entertainment' component={Entertainment}></Route>
                    <Route exact path='/music' component={Music}></Route>
                    <Route exact path='/sports' component={Sports}></Route>
                    <Route exact path='/general/:id' component={Articles}></Route>
                    <Route exact path='/politics/:id' component={Articles}></Route>
                    <Route exact path='/business/:id' component={Articles}></Route>
                    <Route exact path='/technology/:id' component={Articles}></Route>
                    <Route exact path='/science-and-nature/:id' component={Articles}></Route>
                    <Route exact path='/entertainment/:id' component={Articles}></Route>
                    <Route exact path='/music/:id' component={Articles}></Route>
                    <Route exact path='/sports/:id' component={Articles}></Route>
                </Switch>
            </div>
        );
    }
}

export default TopbarRoutes;
