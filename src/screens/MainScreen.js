import React, {useState, useEffect} from 'react';
import * as firebase from 'firebase';
require('firebase/firestore');
import {Content, Picker} from 'native-base';
import RestaurantCard from '../components/RestaurantCard';
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

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const MainScreen = ({navigation}) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    db.collection('restaurants')
      .get()
      .then(snap => {
        const rests = [];
        snap.forEach(el => {
          rests.push(el.data());
        });
        setRestaurants(rests);
      });
  }, []);

  const renderRestaurants = () => {
    return restaurants.map((restaurant, index) => (
      <RestaurantCard
        key={index}
        restaurant={restaurant}
        navigation={navigation}
        inactive={false}
      />
    ));
  };

  return <Content>{renderRestaurants()}</Content>;
};

MainScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Bom Delivery',
    headerRight: (
      <Picker
        mode="dropdown"
        selectedValue={1}
        style={{
          height: 50,
          width: 130,
          color: '#FFFF00',
          fontWeight: 'bold',
          paddingLeft: 0,
          marginLeft: 0,
        }}>
        <Picker.Item label="Comidas" value={1} />
        <Picker.Item label="Roupas" value={2} />
        <Picker.Item label="Bebidas" value={3} />
      </Picker>
    ),
  };
};
export default MainScreen;
