import React, {Component} from 'react';
import Topbar from './fragments/topbar';
import TopbarRoutes from './fragments/topbar-routes';
import Footer from './fragments/footer';

class Home extends Component{
  	render() {
      	return (
            <div>
                <Topbar />
                <TopbarRoutes />
                <Footer />
            </div>
      	);
  	}
}

export default Home;
