import React, {useState, useEffect} from 'react';
import firebase from '../Firebase.js'
require('firebase/firestore');
import {Content, Picker} from 'native-base';
import RestaurantCard from '../components/RestaurantCard';

const db = firebase.firestore();

const MainScreen = ({navigation}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [type, setType] = useState("food")
  const changeTypeHandler= (type) => {
    navigation.setParams({
      type: type
  });
    setType(type)
  }
  useEffect(() => {
    navigation.setParams({
      handleTypeChange: changeTypeHandler
  });
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
    
    const filteredRestaurants = restaurants.filter((restaurant)=> restaurant.type == type);
    return filteredRestaurants.map((restaurant, index) => (
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
  const {params = {}} = navigation.state;

  return {
    headerTitle: 'Bom Delivery',
    headerRight: (
      <Picker
        mode="dropdown"
        selectedValue={params.type}
        style={{
          height: 50,
          width: 130,
          color: '#FFFF00',
          fontWeight: 'bold',
          paddingLeft: 0,
          marginLeft: 0,
        }}
        onValueChange={(itemValue) =>
          params.handleTypeChange(itemValue)
    } >
        <Picker.Item label="Comidas" value={"food"} />
        <Picker.Item label="Roupas e Acessórios" value={"clothes"} />
        <Picker.Item label="Bebidas" value={"drink"} />
      </Picker>
    ),
  };
};
export default MainScreen;
