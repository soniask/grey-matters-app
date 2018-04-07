import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
 
import reducer from './reducers/reducer'; //Import the reducer
 
// Connect our store to the reducers
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
