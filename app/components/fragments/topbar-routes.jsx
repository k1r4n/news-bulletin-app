import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import General from '../general';
import GeneralArticles from '../general/articles';
import Politics from '../politics';
import Business from '../business';
import Technology from '../technology';
import ScienceAndNature from '../science-and-nature';
import Entertainment from '../entertainment';
import Music from '../music';
import Sports from '../sports';

class TopbarRoutes extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={General}></Route>
                    <Route exact path='/politics' component={Politics}></Route>
                    <Route exact path='/business' component={Business}></Route>
                    <Route exact path='/technology' component={Technology}></Route>
                    <Route exact path='/science-and-nature' component={ScienceAndNature}></Route>
                    <Route exact path='/entertainment' component={Entertainment}></Route>
                    <Route exact path='/music' component={Music}></Route>
                    <Route exact path='/sports' component={Sports}></Route>
                    <Route exact path='/general/articles' component={General}></Route>
                    <Route exact path='/politics/articles' component={Politics}></Route>
                    <Route exact path='/business/articles' component={Business}></Route>
                    <Route exact path='/technology/articles' component={Technology}></Route>
                    <Route exact path='/science-and-nature/articles' component={General}></Route>
                    <Route exact path='/entertainment/articles' component={General}></Route>
                    <Route exact path='/music/articles' component={General}></Route>
                    <Route exact path='/sports/articles' component={General}></Route>
                </Switch>
            </div>
        );
    }
}

export default TopbarRoutes;
