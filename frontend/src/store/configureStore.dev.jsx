/* eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import api from '../middleware/github-api';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, api, createLogger()),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
