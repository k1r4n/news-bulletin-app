import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Styles from '../../main.css';

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
                <div className="panel panel-primary" style={{ marginTop: '20px', marginBottom: '300px' }}>
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
                                <div className="col-xs-6" title={article.description}>
                                    <div className="panel panel-default" style={{ maxHeight: '100%', minHeight: '100%', minHeight:'400px' }}>
                                        <div className="panel-body">
                                            <div className="pull-left">
                                                <strong>{article.author}</strong>
                                            </div>
                                            <div className="pull-right">
                                                <span>{article.publishedAt}</span>
                                            </div>
                                            <div className="col-xs-12" id={Styles.container}>
                                                <img id={Styles.image} src={article.urlToImage} style={{ width: '500px', height: '400px'}} />
                                                <p id={Styles.text} style={{ width: '500px'}}>{article.title}</p>
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
