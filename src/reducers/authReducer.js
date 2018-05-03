import { authConstants } from '../actions';

const AUTH_INITIAL = {
  user: null,
  isLoggingIn: false,
  isSigningUp: false,
};

export const authReducer = (state = AUTH_INITIAL, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        message: null,
        isLoggingIn: true,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        message: null,
        isLoggingIn: false,
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        message: action.message,
        isLoggingIn: false,
      };
    case authConstants.TOKEN_LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      };
    case authConstants.TOKEN_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggingIn: false,
      };
    case authConstants.TOKEN_LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isLoggingIn: false,
      };
    case authConstants.SIGNUP_REQUEST:
      return {
        ...state,
        message: null,
        isSigningUp: true,
      };
    case authConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        message: null,
        isSigningUp: false,
      };
    case authConstants.SIGNUP_FAILURE:
      return {
        ...state,
        message: action.message,
        isSigningUp: false,
      };
    case authConstants.LOGOUT:
      return {
        ...state,
        user: null,
      };
    case authConstants.CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
}
