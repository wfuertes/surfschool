/* eslint import/no-unresolved: 0 */
import * as types from '../constants/userActionTypes';

const initialState = {
  users: []
};

/* eslint no-console: 0 */
export default function users(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USERS:

      console.info('inside the reducer for fetch user');
      return state;

    default:
      return state;
  }
}
