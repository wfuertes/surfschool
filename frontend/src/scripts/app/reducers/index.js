/* eslint import/no-unresolved: 0 */
import { combineReducers } from 'redux';

import userReducer from './userReducer';

const rootReducer = combineReducers({
  userReducer
});

export default rootReducer;
