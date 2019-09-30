import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import * as firebase from 'firebase';
require('firebase/firestore');
import {Root} from 'native-base';
import {MainNavigator} from './navigators';
import store from './store';

//TODO: put initializeApp here
var firebaseConfig = {
  apiKey: 'AIzaSyD6rCLWpVS9pqW8vc7-_TeP7sTfkXZhz_g',
  authDomain: 'bom-delivery.firebaseapp.com',
  databaseURL: 'https://bom-delivery.firebaseio.com',
  projectId: 'bom-delivery',
  storageBucket: '',
  messagingSenderId: '92000871135',
  appId: '1:92000871135:web:5ef14997953c0a759dbf6a',
  measurementId: 'G-VNXKTWX8CP',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
