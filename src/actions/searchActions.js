import { push } from 'react-router-redux';
import axios from 'axios';
import queryString from 'query-string';
import { AsyncStorage } from 'react-native';
import { baseURL } from '../constants';


export const searchConstants = {
  SEARCH_REQUEST: 'SEARCH_REQUEST',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_FAILURE: 'SEARCH_FAILURE',

  SHOW_SORT_OPTIONS: 'SHOW_SORT_OPTIONS',
  SHOW_FILTER_OPTIONS: 'SHOW_FILTER_OPTIONS',

  CLEAR_SEARCH: 'CLEAR_SEARCH',
}

export const searchActions = {
  getSearch,
  toggleSortOptions,
  toggleFilterOptions,
  clearSearch,
}

function getSearch(filters = {}) {
  const query = queryString.stringify(filters);
  return dispatch => {
    dispatch(request(filters.q));
    AsyncStorage.getItem('@GreyMattersApp:token')
    .then(token => {
      axios({
        method: 'get',
        url: `/search?${query}`,
        baseURL,
        headers: { 'x-access-token': token },
      })
      .then(res => {
        if (res.data.success) {
          dispatch(success(res.data.payload));
        } else {
          dispatch(failure());
          console.log(res.data.message);
        }
      })
      .catch(error => {
        dispatch(failure());
        console.log(error.response.data.message);
      });
    })
    .catch(error => {
      console.log('Could not get token from storage.');
    });
  };

  function request(searchTerm) { return { type: searchConstants.SEARCH_REQUEST, searchTerm } }
  function success(payload) { return { type: searchConstants.SEARCH_SUCCESS, payload } }
  function failure() { return { type: searchConstants.SEARCH_FAILURE } }
}

function toggleSortOptions(show = true) {
  return {type: searchConstants.SHOW_SORT_OPTIONS, show}
}

function toggleFilterOptions(show = true) {
  return {type: searchConstants.SHOW_FILTER_OPTIONS, show}
}

function clearSearch() {
  return {type: searchConstants.CLEAR_SEARCH}
}
