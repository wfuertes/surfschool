/* eslint import/no-unresolved: 0 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../middleware/github-api';
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, api)
  );
}
