import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './src/store';
import { persistor } from './src/store';
import AppView from './src/modules/shared/AppView';

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppView />
        </PersistGate>
      </Provider>
    );
  }
}
