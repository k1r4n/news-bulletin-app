import React, { Component } from 'react';
import { Navbar, Nav, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Topbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <LinkContainer to={{pathname: "/"}}><MenuItem><i className="fa fa-users" aria-hidden="true"></i> CITIZEN</MenuItem></LinkContainer>
                        </div>
                    </div>
                    <ul className="nav navbar-nav">
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
            </nav>
        );
    }
}

export default Topbar;
