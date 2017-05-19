import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class General extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.fetchChannelList();
    }

    fetchChannelList() {
      axios.get('http://localhost:9200/news-bulletin/top-channels/_search?pretty=true&size=100&q=category:general')
          .then(response => {
              this.setState({ data: response.data.hits.hits});
          });
    }
    render() {
        var data = []
        if (this.state.data) {
            data = this.state.data;
        }
        return(
            <div className="clearfix">
                <div className="container">
                    <div className="panel panel-primary" style={{ marginTop: '20px', marginBottom: '300px' }}>
                        <div className="panel-heading">
                            <h1 style={{ marginLeft: '20px' }}><i className="fa fa-google" aria-hidden="true"></i>  General</h1>
                        </div>
                        <div className="panel-body">
                            {
                                data && data.map((data, index) => (
                                        <Link to ={`/general/${data._id}`} key={data._id}>
                                            <div className="col-xs-6">
                                                <div className="panel panel-info" style={{ minHeight: '200px' }}>
                                                    <div className="panel-heading">
                                                        <h4 style={{ marginLeft: '5px'}}>{data._source.name}</h4>
                                                    </div>
                                                    <div className="panel-body">
                                                        {data._source.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default General;
