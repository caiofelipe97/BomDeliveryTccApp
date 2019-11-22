import * as firebase from 'firebase';

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

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();