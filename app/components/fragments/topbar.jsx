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
                            <LinkContainer to={{pathname: "/"}}><MenuItem>CITIZEN</MenuItem></LinkContainer>
                        </div>
                    </div>
                    <ul className="nav navbar-nav">
                        <LinkContainer to={{pathname: "/"}}><MenuItem>General</MenuItem></LinkContainer>
                        <LinkContainer to={{pathname: "/politics"}}><MenuItem>Politics</MenuItem></LinkContainer>
                        <LinkContainer to={{pathname: "/business"}}><MenuItem>Business</MenuItem></LinkContainer>
                        <LinkContainer to={{pathname: "/technology"}}><MenuItem>Technology</MenuItem></LinkContainer>
                        <LinkContainer to={{pathname: "/science-and-nature"}}><MenuItem>Science And Nature</MenuItem></LinkContainer>
                        <LinkContainer to={{pathname: "/entertainment"}}><MenuItem>Entertainment</MenuItem></LinkContainer>
                        <LinkContainer to={{pathname: "/music"}}><MenuItem>Music</MenuItem></LinkContainer>
                        <LinkContainer to={{pathname: "/sports"}}><MenuItem>Sports</MenuItem></LinkContainer>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Topbar;
