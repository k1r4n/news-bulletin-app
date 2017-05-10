import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Home from './components/home';
import './main.css';

render(<HashRouter><Home /></HashRouter>, document.getElementById('root'));
