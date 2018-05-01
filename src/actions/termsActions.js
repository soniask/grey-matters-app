import { push } from 'react-router-redux';
// import { alertActions } from './';
import axios from 'axios';
import queryString from 'query-string';

import { baseURL } from './index';

// Types
export const termsConstants = {
  GET_TERMS_REQUEST: 'GET_TERMS_REQUEST',
  GET_TERMS_SUCCESS: 'GET_TERMS_SUCCESS',
  GET_TERMS_FAILURE: 'GET_TERMS_FAILURE',

  GET_TERM_REQUEST: 'GET_TERM_REQUEST',
  GET_TERM_SUCCESS: 'GET_TERM_SUCCESS',
  GET_TERM_FAILURE: 'GET_TERM_FAILURE',
};

// Creators
export const termsActions = {
  getTerm,
  getTerms,
};

// Implementations
function getTerms(filters = {}) {
  const query = queryString.stringify(filters);
  return dispatch => {
    dispatch(request());

    axios({
      method: 'get',
      url: `/terms?${query}`,
      baseURL,
    })
    .then(res => {
      if (res.data.success) {
        dispatch(success(res.data.payload));
      } else {
        dispatch(failure());
        // dispatch(alertActions.error(res.data.message));
      }
    })
    .catch(error => {
      dispatch(failure(error));
      // dispatch(alertActions.error('Unable to Get Terms'));
    });
  };

  function request() { return { type: termsConstants.GET_TERMS_REQUEST } }
  function success(payload) { return { type: termsConstants.GET_TERMS_SUCCESS, payload } }
  function failure() { return { type: termsConstants.GET_TERMS_FAILURE } }
}

function getTerm(id) {
  return dispatch => {
    dispatch(request());

    axios({
      method: 'get',
      url: `/terms/${id}`,
      baseURL,
    })
    .then(res => {
      if (res.data.success) {
        dispatch(success(res.data.payload));
      } else {
        dispatch(failure());
        // dispatch(alertActions.error(res.data.message));
      }
    })
    .catch(error => {
      dispatch(failure(error));
      // dispatch(alertActions.error('Unable to Get Term'));
    });
  };

  function request() { return { type: termsConstants.GET_TERM_REQUEST } }
  function success(payload) { return { type: termsConstants.GET_TERM_SUCCESS, payload } }
  function failure() { return { type: termsConstants.GET_TERM_FAILURE } }
}
