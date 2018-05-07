import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { menuReducer } from './menuReducer';
import { contentReducer } from './contentReducer';
import { termsReducer } from './termsReducer';
import { eventsReducer } from './eventsReducer';
import { searchReducer } from './searchReducer';
import { userReducer } from './userReducer';
import { profileReducer } from './profileReducer';

const rootReducer = combineReducers({
  content: contentReducer,
  events: eventsReducer,
  menu: menuReducer,
  profile: profileReducer,
  router: routerReducer,
  search: searchReducer,
  terms: termsReducer,
  user: userReducer,
});

export default rootReducer;
