import { push } from 'react-router-redux';
import axios from 'axios';
import queryString from 'query-string';

import { baseURL } from './index';

// Types
export const eventsConstants = {
  GET_EVENTS_REQUEST: 'GET_EVENTS_REQUEST',
  GET_EVENTS_SUCCESS: 'GET_EVENTS_SUCCESS',
  GET_EVENTS_FAILURE: 'GET_EVENTS_FAILURE',

  GET_EVENT_REQUEST: 'GET_EVENT_REQUEST',
  GET_EVENT_SUCCESS: 'GET_EVENT_SUCCESS',
  GET_EVENT_FAILURE: 'GET_EVENT_FAILURE',
};

// Creators
export const eventsActions = {
  getEvent,
  getEvents,
};

// Implementations
function getEvents(filters = {}) {
  const query = queryString.stringify(filters);
  return dispatch => {
    dispatch(request());

    axios({
      method: 'get',
      url: `/events?${query}`,
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
      // dispatch(alertActions.error('Unable to Get Events'));
    });
  };

  function request() { return { type: eventsConstants.GET_EVENTS_REQUEST } }
  function success(payload) { return { type: eventsConstants.GET_EVENTS_SUCCESS, payload } }
  function failure() { return { type: eventsConstants.GET_EVENTS_FAILURE } }
}

function getEvent(id) {
  return dispatch => {
    dispatch(request());

    axios({
      method: 'get',
      url: `/events/${id}`,
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
      // dispatch(alertActions.error('Unable to Get Event'));
    });
  };

  function request() { return { type: eventsConstants.GET_EVENT_REQUEST } }
  function success(payload) { return { type: eventsConstants.GET_EVENT_SUCCESS, payload } }
  function failure() { return { type: eventsConstants.GET_EVENT_FAILURE } }
}
