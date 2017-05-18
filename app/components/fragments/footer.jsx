import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { MenuItem } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-bottom">
                <div className="container">
                    <div className="col-xs-4">
                        <h3 style={{ color: '#FFFFFF' }}>About us</h3>
                        <p style={{ color: '#FFFFFF', textAlign: 'justify' }}>
                            Citizen News is a simple and easy-to-use website
                            that shows news headlines currently published on
                            a range of news sources and blogs.
                            Currently we are showing news headlines from over
                            70 channels, from various countries like, USA,
                            India, Germany, etc.
                            News are from English, German and French are
                            included in citizen news.
                            We cover channels from all the genere such as,
                            general, technology, politics, business, science
                            & nature, music, sports and entertainment.
                        </p>
                    </div>
                    <div className="col-xs-2" />
                    <div className="col-xs-2" style={{ color: '#FFFFFF' }}>
                        <h3>Links</h3>
                        <ul className="list-group">
                            <LinkContainer to={{pathname: "/"}}><MenuItem><i className="fa fa-google" aria-hidden="true"></i> General</MenuItem></LinkContainer>
                            <LinkContainer to={{pathname: "/politics"}}><MenuItem><i className="fa fa-pinterest-p" aria-hidden="true"></i> Politics</MenuItem></LinkContainer>
                            <LinkContainer to={{pathname: "/business"}}><MenuItem><i className="fa fa-bold" aria-hidden="true"></i> Business</MenuItem></LinkContainer>
                            <LinkContainer to={{pathname: "/technology"}}><MenuItem><i className="fa fa-tumblr-square" aria-hidden="true"></i> Technology</MenuItem></LinkContainer>
                            <LinkContainer to={{pathname: "/science-and-nature"}}><MenuItem><i className="fa fa-scribd" aria-hidden="true"></i> Science And Nature</MenuItem></LinkContainer>
                            <LinkContainer to={{pathname: "/entertainment"}}><MenuItem><i className="fa fa-edge" aria-hidden="true"></i> Entertainment</MenuItem></LinkContainer>
                            <LinkContainer to={{pathname: "/music"}}><MenuItem><i className="fa fa-music" aria-hidden="true"></i> Music</MenuItem></LinkContainer>
                            <LinkContainer to={{pathname: "/sports"}}><MenuItem><i className="fa fa-trophy" aria-hidden="true"></i> Sports</MenuItem></LinkContainer>
                        </ul>
                    </div>
                    <div className="col-xs-2 pull-right" style={{ color: '#FFFFFF' }}>
                        <h3>Contact</h3>
                        <p>Name</p>
                        <p>Street Address</p>
                        <p>City</p>
                        <p>Pin</p>
                        <p>Number</p>
                        <p><a href="mailto:someone@example.com?">E-Mail</a></p>
                    </div>
                </div>
            </nav>
        );
    }
}
