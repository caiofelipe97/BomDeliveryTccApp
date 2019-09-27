import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import * as firebase from 'firebase';
import {Root} from 'native-base';
import {MainNavigator} from './navigators';
import store from './store';
//TODO: put initializeApp here

const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <MainNavigator />
      </Root>
    </Provider>
  );
};

export default App;
