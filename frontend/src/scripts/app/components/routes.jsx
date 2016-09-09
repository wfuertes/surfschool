import React, { Component } from 'react';

import { Router, Route, hashHistory } from 'react-router';

/* eslint import/no-unresolved: 0 */
import Main from './main';
import About from '../modules/about/about';

class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}/>
        <Route path="/about" component={About}/>
      </Router>
    );
  }
}

export default Routes;
