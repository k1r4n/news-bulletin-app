import React, {Component} from 'react';
import Topbar from './fragments/topbar';
import TopbarRoutes from './fragments/topbar-routes';

class Home extends Component{
  	render() {
      	return (
            <div>
                <Topbar />
                <TopbarRoutes />
            </div>
      	);
  	}
}

export default Home;
