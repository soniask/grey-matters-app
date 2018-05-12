import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { contentReducer } from './contentReducer';
import { eventsReducer } from './eventsReducer';
import { learningReducer } from './learningReducer';
import { menuReducer } from './menuReducer';
import { profileReducer } from './profileReducer';
import { searchReducer } from './searchReducer';
import { termsReducer } from './termsReducer';
import { userReducer } from './userReducer';


const rootReducer = combineReducers({
  content: contentReducer,
  events: eventsReducer,
  learning: learningReducer,
  menu: menuReducer,
  profile: profileReducer,
  router: routerReducer,
  search: searchReducer,
  terms: termsReducer,
  user: userReducer,
});

export default rootReducer;
