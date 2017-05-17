import React, { Component } from 'react';
// import { Navbar, Button } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-bottom">
                <div className="container">
                    <div className="col-xs-4">
                        <h3 style={{ color: '#FFFFFF' }}>About us</h3>
                        <p style={{ color: '#FFFFFF' }}>
                            Citizen News is a simple and easy-to-use website that shows
                            news headlines currently published on a range of news sour-
                            ces and blogs. Currently we are showing news headlines from
                            over 70 channels, from various countries like, USA, India,-
                            Germany, etc in more than 3 languages.
                        </p>
                    </div>
                </div>
            </nav>
        );
    }
}
