import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.fetchArticleList(props.match.params.id);
    }

    fetchArticleList(source) {
      axios.get(`http://localhost:9200/news-bulletin/top-articles/_search?pretty=true&size=100&q=_id:${source}`)
          .then(response => {
              this.setState({ data: response.data.hits.hits});
          });
    }

    render() {
        const { data } = this.state;
        let heading = '';
        if (data) {
            const headArray = data[0]._source.source.split("-");
            headArray.map(head => {
                heading = `${heading} ${head.charAt(0).toUpperCase() + head.slice(1)}`;
            })
        }
        return (
            <div className="container">
                <div className="panel panel-primary" style={{ marginTop: '20px', marginBottom: '20px' }}>
                    {
                        data &&
                        <div className="panel-heading">
                            <h1 style={{ marginLeft: '20px' }}>{heading}</h1>
                        </div>
                    }
                    <div className="panel-body">
                    {
                        data && data[0]._source.articles.map((article, index) => (
                            <a href={article.url} target="_blank" key={index}>
                                <div className="col-xs-6">
                                    <div className="panel panel-info" style={{ minHeight: '600px' }}>
                                        <div className="panel-heading">
                                            <h3>{article.title}</h3>
                                        </div>
                                        <div className="panel-body">
                                            <div className="col-xs-12">
                                                <div className="pull-left">
                                                    <strong>{article.author}</strong>
                                                </div>
                                                <div className="pull-right">
                                                    <span>{article.publishedAt}</span>
                                                </div>
                                            </div>
                                            <div className="col-xs-12">
                                                <img src={article.urlToImage} style={{ maxWidth: '100%', maxHeight: '100%'}} />
                                            </div>
                                            <div className="col-xs-12">
                                                <p>{article.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default Articles;
