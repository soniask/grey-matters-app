import { userConstants } from '../actions';

const USER_INITIAL = {
  user: null,
  isUpdatingUser: false,
  isLoggingIn: false,
  isSigningUp: false,
  bookmarkIDSet: new Set(),
  token: null,
};

export const userReducer = (state = USER_INITIAL, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        message: null,
        isLoggingIn: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        message: null,
        isLoggingIn: false,
        token: action.user.token,
        bookmarkIDSet: new Set(action.user.bookmarks),
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        message: action.message,
        isLoggingIn: false,
      };
    case userConstants.SIGNUP_REQUEST:
      return {
        ...state,
        message: null,
        isSigningUp: true,
      };
    case userConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        message: null,
        isSigningUp: false,
      };
    case userConstants.SIGNUP_FAILURE:
      return {
        ...state,
        message: action.message,
        isSigningUp: false,
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        user: null,
      };
    case userConstants.CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };
    case userConstants.UPDATE_USER_REQUEST:
      return {
        ...state,
        isUpdatingUser: true,
      };
    case userConstants.UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isUpdatingUser: false,
        bookmarkIDSet: new Set(action.payload.bookmarks),
      };
    case userConstants.UPDATE_USER_FAILURE:
      return {
        ...state,
        isUpdatingUser: false,
      };
    default:
      return state;
  }
}
