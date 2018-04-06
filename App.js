import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import AppView from './AppView';

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppView />
      </Provider>
    );
  }
}
