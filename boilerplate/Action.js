function getThing() {
  return dispatch => {
    AsyncStorage.getItem('@GreyMattersApp:token')
    .then(token => {
      console.log('Getting thing...');
      dispatch(request());
      axios({
        method: 'get',
        url: '/thing',
        baseURL,
        headers: {'x-access-token': token},
      })
      .then(res => {
        if (res.data.success) {
          console.log('Successfully got thing from server.');
          dispatch(success(res.data.payload));
        } else {
          console.log(res.data.message);
          dispatch(failure());
        }
      })
      .catch(error => {
        console.log('Server error: Could not get thing with token.');
        dispatch(failure());
      });
    })
    .catch(error => {
      console.log('Could not get token from storage.');
    });
  }

  function request() { return { type: userConstants.GET_THING_REQUEST } }
  function success(payload) { return { type: userConstants.GET_THING_SUCCESS, payload } }
  function failure() { return { type: userConstants.GET_THING_FAILURE } }
}