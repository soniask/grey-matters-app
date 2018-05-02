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
};

// Creators
export const authActions = {
  login,
//   tokenLogin,
//   logout,
  signup,
};

// Implementations
function login({ email, password }) {
  console.log(`login called with parameters ${email} and ${password}`)
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
        console.log(`login axios request returned success`);
        console.log(res.data);
        dispatch(success(res.data));
        dispatch(push('/profile'));
        // dispatch(alertActions.success(`Welcome ${res.data.name}!`));
        // cookies.set('token', res.data.token, { path: '/' }); //TODO: find app equivalent of this
      } else {
        dispatch(failure());
        console.log('line 58: ' + res.data.message);
        // dispatch(alertActions.error(res.data.message));
      }
    })
    .catch(error => {
      dispatch(failure());
      console.log('Unable to Complete Request');
      // dispatch(alertActions.error('Unable to Complete Request'));
    });
  };

  function request() { return { type: authConstants.LOGIN_REQUEST } }
  function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
  function failure() { return { type: authConstants.LOGIN_FAILURE } }
}

// function tokenLogin() {
//   return dispatch => {
//     if (!token) {
//       dispatch(failure());
//     } else {
//       dispatch(request());
//       axios({
//         method: 'get',
//         url: '/user',
//         baseURL,
//         headers: {'x-access-token': token},
//       })
//       .then(res => {
//         if (res.data.success) {
//           dispatch(success(res.data));
//           console.log(`Welcome ${res.data.name}!`);
//         //   dispatch(alertActions.success(`Welcome ${res.data.name}!`));
//         } else {
//           dispatch(failure());
//           console.log(res.data.message);
//         //   dispatch(alertActions.error(res.data.message));
//         }
//       })
//       .catch(error => {
//           console.log(error)
//         dispatch(failure());
//       });
//     }
//   };

//   function request() { return { type: authConstants.TOKEN_LOGIN_REQUEST } }
//   function success(user) { return { type: authConstants.TOKEN_LOGIN_SUCCESS, user } }
//   function failure() { return { type: authConstants.TOKEN_LOGIN_FAILURE } }
// }

// function logout() {
//   cookies.remove('token', { path: '/' });
//   return dispatch => {
//     dispatch(alertActions.success(`Logged Out!`));
//     dispatch(success());
//   };

//   function success() { return { type: authConstants.LOGOUT } }
// }

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
        dispatch(push('/'));
        console.log("Sign up successful");
      } else {
        dispatch(failure());
        console.log(res.data.message);
      }
    })
    .catch(error => {
      dispatch(failure());
      dispatch(alertActions.error('Unable to Complete Request'));
    });
  };

  function request() { return { type: authConstants.SIGNUP_REQUEST } }
  function success() { return { type: authConstants.SIGNUP_SUCCESS } }
  function failure() { return { type: authConstants.SIGNUP_FAILURE } }
}