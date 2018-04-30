import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { menuReducer } from './menuReducer';
import { contentReducer } from './contentReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  menu: menuReducer,
  content: contentReducer,
});

export default rootReducer;
