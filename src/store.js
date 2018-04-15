import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
 
import reducer from './reducers/reducer'; //Import the reducer
 
const initialState = {
  articles: [
    {
      imgURI: 'https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/98/53/cc/9853cc2f-4b7a-8fd0-a7f8-5c6902e94ae8/source/256x256bb.jpg',
      title: 'Food for Thought: How Your Brain Controls What You Eat',
      author: 'LEANN NGUYEN',
      time: '11/7/14',
      description: 'One of the most frequent decisions we make is what to eat, but just because it’s a common task doesn’t...'
    }
  ],
  podcasts: [],
  events: []
}

// Connect our store to the reducers
const store = createStore(reducer, initialState);

export default store;
