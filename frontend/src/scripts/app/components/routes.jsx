import React, { Component } from 'react';

import { Router, Route, hashHistory } from 'react-router';

/* eslint import/no-unresolved: 0 */
import Main from './main';
import About from '../containers/about/about';
import Users from '../containers/users/users';

class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
      </Router>
    );
  }
}

export default Routes;
