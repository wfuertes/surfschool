/* eslint import/no-unresolved: 0 */
import * as types from '../constants/userActionTypes';

import { CALL_API } from '../middleware/api';

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAILURE = 'USERS_FAILURE';

export function fetchUsers() {
  /* eslint no-console: 0 */
  console.info('fired action');
  return {
    [CALL_API]: {
      types: [USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE],
      endpoint: 'users/'
    },
    type: 'DEFAULT'
  };
}

export function loadUser() {
  return (dispatch) => {
    dispatch(fetchUsers());
  };
}

export function addUser(user) {
  const type = types.ADD_USER;
  return {
    type,
    user
  };
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  };
}
