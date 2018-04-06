import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
 
import reducers from './reducers/reducer'; //Import the reducer
 
// Connect our store to the reducers
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
