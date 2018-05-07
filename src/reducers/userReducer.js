import { userConstants } from '../actions';

const user_INITIAL = {
  user: null,
  isGettingUser: false,
  isUpdatingUser: false,
  user: null,
};

export const userReducer = (state = user_INITIAL, action) => {
  switch (action.type) {
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
