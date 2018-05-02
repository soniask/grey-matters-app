import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { menuReducer } from './menuReducer';
import { contentReducer } from './contentReducer';
import { termsReducer } from './termsReducer';
import { eventsReducer } from './eventsReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  router: routerReducer,
  menu: menuReducer,
  content: contentReducer,
  terms: termsReducer,
  events: eventsReducer,
});

export default rootReducer;
