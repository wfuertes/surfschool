import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

/* eslint import/no-unresolved: 0 */
// import Routes from './components/routes';

import reducers from './reducers';

import Users from './containers/users/users';

const store = createStore(reducers);

// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/* eslint no-console: 0 */
function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Users/>
    </Provider>, document.getElementById('app'));
}

render();
store.subscribe(render);

