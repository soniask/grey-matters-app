import { push } from 'react-router-redux';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { baseURL } from './index';
import storage from 'redux-persist/es/storage';

// Types
export const authConstants = {
  LOGIN_REQUEST: 'AUTH_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'AUTH_LOGIN_FAILURE',
  TOKEN_LOGIN_REQUEST: 'AUTH_TOKEN_LOGIN_REQUEST',
  TOKEN_LOGIN_SUCCESS: 'AUTH_TOKEN_LOGIN_SUCCESS',
  TOKEN_LOGIN_FAILURE: 'AUTH_TOKEN_LOGIN_FAILURE',
  SIGNUP_REQUEST: 'AUTH_SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'AUTH_SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'AUTH_SIGNUP_FAILURE',
  LOGOUT: 'AUTH_LOGOUT',
  CLEAR_MESSAGE: 'AUTH_CLEAR_MESSAGE',
};

// Creators
export const authActions = {
  login,
//   tokenLogin,
  logout,
  signup,
  clearMessage,
};

// Implementations
function login({ email, password }) {
  return dispatch => {
    dispatch(request());

    axios({
      method: 'post',
      url: '/authenticate',
      baseURL,
      data: {
        email,
        password,
        entry: 'app',
      }
    })
    .then(res => {
      if (res.data.success) {
        dispatch(success(res.data));
        dispatch(push('/profile'));
        // cookies.set('token', res.data.token, { path: '/' }); //TODO: find app equivalent of this
      } else {
        dispatch(failure(res.data.message));
      }
    })
    .catch(error => {
      dispatch(failure('Unable to Complete Request'));
    });
  };

  function request() { return { type: authConstants.LOGIN_REQUEST } }
  function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
  function failure(message) { return { type: authConstants.LOGIN_FAILURE, message } }
}

function logout() {
  return dispatch => {
    dispatch(success());
    dispatch(push('/'));
  };

  function success() { return { type: authConstants.LOGOUT } }
}

function signup({ name, email, password, role='reader' }) {
  return dispatch => {
    dispatch(request());

    axios({
      method: 'post',
      url: '/createUser',
      baseURL,
      data: {
        name,
        email,
        password,
        role,
      }
    })
    .then(res => {
      if (res.data.success) {
        dispatch(success(res.data));
        dispatch(push('/profile'));
      } else {
        dispatch(failure(res.data.message));
      }
    })
    .catch(error => {
      dispatch(failure('Unable to Complete Request'));
    });
  };

  function request() { return { type: authConstants.SIGNUP_REQUEST } }
  function success(data) { return { type: authConstants.SIGNUP_SUCCESS, data } }
  function failure(message) { return { type: authConstants.SIGNUP_FAILURE, message } }
}

function clearMessage() {
  return {type: authConstants.CLEAR_MESSAGE}
}
