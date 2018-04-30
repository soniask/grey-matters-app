import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { menuReducer } from './menuReducer';
import { contentReducer } from './contentReducer';
import { termsReducer } from './termsReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  menu: menuReducer,
  content: contentReducer,
  terms: termsReducer,
});

export default rootReducer;
