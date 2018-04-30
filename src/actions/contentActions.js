import { push } from 'react-router-redux';
import axios from 'axios';

const baseURL = 'http://localhost:8080/api/';

// Types
export const contentConstants = {
  GET_CONTENTS_REQUEST: 'GET_CONTENTS_REQUEST',
  GET_CONTENTS_SUCCESS: 'GET_CONTENTS_SUCCESS',
  GET_CONTENTS_FAILURE: 'GET_CONTENTS_FAILURE',
};

// Creators
export const contentActions = {
  getContents,
};

// Implementations
function getContents() {
  return dispatch => {
    dispatch(request());

    axios({
      method: 'get',
      url: '/contents',
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
      dispatch(alertActions.error('Unable to Get Contents'));
    });
  };

  function request() { return { type: contentConstants.GET_CONTENTS_REQUEST } }
  function success(payload) { return { type: contentConstants.GET_CONTENTS_SUCCESS, payload } }
  function failure() { return { type: contentConstants.GET_CONTENTS_FAILURE } }
}
