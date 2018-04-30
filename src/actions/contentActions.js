import { push } from 'react-router-redux';
import axios from 'axios';
import queryString from 'query-string';

const baseURL = 'http://10.1.10.119:8080/api/';

// Types
export const contentConstants = {
  GET_CONTENTS_REQUEST: 'GET_CONTENTS_REQUEST',
  GET_CONTENTS_SUCCESS: 'GET_CONTENTS_SUCCESS',
  GET_CONTENTS_FAILURE: 'GET_CONTENTS_FAILURE',

  GET_CONTENT_REQUEST: 'GET_CONTENT_REQUEST',
  GET_CONTENT_SUCCESS: 'GET_CONTENT_SUCCESS',
  GET_CONTENT_FAILURE: 'GET_CONTENT_FAILURE',
};

// Creators
export const contentActions = {
  getContents,
  getContent,
};

// Implementations
function getContents(filters = {}) {
  const query = queryString.stringify(filters);
  return dispatch => {
    dispatch(request());

    axios({
      method: 'get',
      url: `/contents?${query}`,
      baseURL,
    })
    .then(res => {
      if (res.data.success) {
        dispatch(success(res.data.payload));
      } else {
        dispatch(failure());
        // dispatch(alertActions.error(res.data.message));
        console.log(`res.data.message: ${res.data.message}`);
      }
    })
    .catch(error => {
      dispatch(failure(error));
      // dispatch(alertActions.error('Unable to Get Contents'));
      console.log('Unable to Get Contents');
    });
  };

  function request() { return { type: contentConstants.GET_CONTENTS_REQUEST } }
  function success(payload) { return { type: contentConstants.GET_CONTENTS_SUCCESS, payload } }
  function failure() { return { type: contentConstants.GET_CONTENTS_FAILURE } }
}

function getContent(id) {
  return dispatch => {
    dispatch(request());

    axios({
      method: 'get',
      url: `/contents/${id}`,
      baseURL,
    })
    .then(res => {
      if (res.data.success) {
        dispatch(success(res.data.payload));
      } else {
        dispatch(failure());
        dispatch(alertActions.error(res.data.message));
      }
    })
    .catch(error => {
      dispatch(failure(error));
      dispatch(alertActions.error('Unable to Get Content'));
    });
  };

  function request() { return { type: contentConstants.GET_CONTENT_REQUEST } }
  function success(payload) { return { type: contentConstants.GET_CONTENT_SUCCESS, payload } }
  function failure() { return { type: contentConstants.GET_CONTENT_FAILURE } }
}
