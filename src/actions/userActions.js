import axios from 'axios';
import { baseURL } from './index';

// Types
export const userConstants = {

  UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE',
  
};

// Creators
export const userActions = {
  updateUser,
};

// Implementations

function updateUser(fields, id, token) {
  console.log(`inside updateUser with id ${id} and token ${token}`);
  for (let field in fields) {
    console.log(`${field} : ${fields[field]}`)
  }
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
        dispatch(success(res.data.payload));
        // dispatch(push('/users'));
        // dispatch(alertActions.success('Successfully updated!'));
      } else {
        dispatch(failure());
        console.log(res.data.message);
        // dispatch(alertActions.error(res.data.message));
      }
    })
    .catch(error => {
      dispatch(failure(error));
      console.log(error);
      // dispatch(alertActions.error('Unable to update user'));
    });
  };

  function request() { return { type: userConstants.UPDATE_USER_REQUEST } }
  function success(payload) { return { type: userConstants.UPDATE_USER_SUCCESS, payload } }
  function failure() { return { type: userConstants.UPDATE_USER_FAILURE } }
}
