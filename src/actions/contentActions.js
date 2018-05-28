import { push } from 'react-router-redux';
import axios from 'axios';
import queryString from 'query-string';
import { baseURL } from '../constants';
import { AsyncStorage } from 'react-native';

// Types
export const contentConstants = {
  GET_CONTENTS_REQUEST: 'GET_CONTENTS_REQUEST',
  GET_CONTENTS_SUCCESS: 'GET_CONTENTS_SUCCESS',
  GET_CONTENTS_FAILURE: 'GET_CONTENTS_FAILURE',

  GET_CONTENT_REQUEST: 'GET_CONTENT_REQUEST',
  GET_CONTENT_SUCCESS: 'GET_CONTENT_SUCCESS',
  GET_CONTENT_FAILURE: 'GET_CONTENT_FAILURE',

  CLEAR_CONTENTS: 'CLEAR_CONTENTS',
};

// Creators
export const contentActions = {
  getContents,
  getContent,
  clearContents,
};

// Implementations
function getContents(filters = {}) {
  const query = queryString.stringify(filters);
  return dispatch => {
    AsyncStorage.getItem('@GreyMattersApp:token')
    .then(token => {
      console.log('Getting contents...');
      dispatch(request());
      axios({
        method: 'get',
        url: `/contents?${query}`,
        baseURL,
        headers: {'x-access-token': token},
      })
      .then(res => {
        if (res.data.success) {
          console.log('Successfully got contents from server.');
          dispatch(success(res.data.payload));
        } else {
          console.log(res.data.message);
          dispatch(failure());
        }
      })
      .catch(error => {
        console.log('Server error: Could not get contents with token.');
        dispatch(failure());
      });
    })
    .catch(error => {
      console.log('Could not get token from storage.');
    });
  }

  function request() { return { type: contentConstants.GET_CONTENTS_REQUEST } }
  function success(payload) { return { type: contentConstants.GET_CONTENTS_SUCCESS, payload } }
  function failure() { return { type: contentConstants.GET_CONTENTS_FAILURE } }
}

function getContent(id) {
  return dispatch => {
    AsyncStorage.getItem('@GreyMattersApp:token')
    .then(token => {
      console.log('Getting content...');
      dispatch(request());
      axios({
        method: 'get',
        url: `/contents/${id}`,
        baseURL,
        headers: {'x-access-token': token},
      })
      .then(res => {
        if (res.data.success) {
          console.log('Successfully got content from server.');
          dispatch(success(res.data.payload));
        } else {
          console.log(res.data.message);
          dispatch(failure());
        }
      })
      .catch(error => {
        console.log('Server error: Could not get content with token.');
        dispatch(failure());
      });
    })
    .catch(error => {
      console.log('Could not get token from storage.');
    });
  }

  function request() { return { type: contentConstants.GET_CONTENT_REQUEST } }
  function success(payload) { return { type: contentConstants.GET_CONTENT_SUCCESS, payload } }
  function failure() { return { type: contentConstants.GET_CONTENT_FAILURE } }
}

function clearContents() {
  return { type: contentConstants.CLEAR_CONTENTS }
}
