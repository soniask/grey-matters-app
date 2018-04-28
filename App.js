import React from 'react';
import { Provider } from 'react-redux';
import { actions } from './src/actions/actions';
import store from './src/store';
import AppView from './src/modules/shared/AppView';

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppView />
      </Provider>
    );
  }
}
