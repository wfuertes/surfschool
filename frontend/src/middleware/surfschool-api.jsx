/* eslint no-undef: 0 */

import 'isomorphic-fetch';

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

const API_ROOT = 'http://localhost:3000/api/';

const HEADERS = { 'X-TOKEN': '4b24064d-5590-4a64-916e-1a0e2dad26ce' };

function callApi(endpoint) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl, { headers: HEADERS })
    .then(response => response.json()
      .then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return Object.assign({}, json);
    });
}

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];

  const { schema, types } = callAPI;

  const [requestType, successType, failureType] = types;

  let { endpoint } = callAPI;

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];

    return finalAction;
  }

  next(actionWith({ type: requestType }));

  return callApi(endpoint, schema).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  );
};
