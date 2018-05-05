import axios from 'axios';
import { baseURL } from './index';

// Types
export const usersConstants = {
  
  GET_USER_REQUEST: 'GET_USER_REQUEST',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAILURE: 'GET_USER_FAILURE',

  UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE',
  
};

// Creators
export const usersActions = {
  getUser,
  updateUser,
};

// Implementations

function getUser(id) {
  return dispatch => {
    dispatch(request());

    axios({
      method: 'get',
      url: `/users/${id}`,
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
      // dispatch(alertActions.error('Unable to Get User'));
    });
  };

  function request() { return { type: usersConstants.GET_USER_REQUEST } }
  function success(payload) { return { type: usersConstants.GET_USER_SUCCESS, payload } }
  function failure() { return { type: usersConstants.GET_USER_FAILURE } }
}

function updateUser(fields, id, token) {
  return dispatch => {
    dispatch(request());

    axios({
      method: 'put',
      url: `/users/${id}`,
      baseURL,
      data: {
        ...fields,
      },
      headers: {'x-access-token': token},
    })
    .then(res => {
      if (res.data.success) {
        dispatch(success());
        // dispatch(push('/users'));
        // dispatch(alertActions.success('Successfully updated!'));
      } else {
        dispatch(failure());
        // dispatch(alertActions.error(res.data.message));
      }
    })
    .catch(error => {
      dispatch(failure(error));
      // dispatch(alertActions.error('Unable to update user'));
    });
  };

  function request() { return { type: usersConstants.UPDATE_USER_REQUEST } }
  function success() { return { type: usersConstants.UPDATE_USER_SUCCESS } }
  function failure() { return { type: usersConstants.UPDATE_USER_FAILURE } }
}
