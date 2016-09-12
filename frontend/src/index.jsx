/* eslint import/no-unresolved: 0 */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
