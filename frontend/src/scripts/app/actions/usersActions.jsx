/* eslint import/no-unresolved: 0 */
import * as types from '../constants/userActionTypes';

export function fetchUsers() {
  /* eslint no-console: 0 */
  console.info('fired action');

  const type = types.FETCH_USERS;
  return {
    type,
    users: []
  };
}

export function addUser(user) {
  const type = types.ADD_USER;
  return {
    type,
    user
  };
}
