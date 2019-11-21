import React, {useState, useEffect} from 'react';
import * as firebase from 'firebase';
require('firebase/firestore');
import {Content} from 'native-base';
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

MainScreen.navigationOptions = {
  title: 'Bom Delivery',
};

export default MainScreen;
/*
      restaurants = [
        {
          name: "Pizzaria X",
          foods:["Pizza"],
          img:require("../img/pizza.jpg"),
          timeToDelivery:"20/50 min",
          deliveryPrice:1,
          rating: 5.0,
          paymentMethods:[{method:"Máquina movel",options: ["Elo - Crédito","Elo - Débito","Hipercard - Crédito","MasterCard - Crédito"]},{method:"Dinheiro"}],
          location:"Av. Pref. Severino Bezerra Cabral, 1200 - loja 106 - Catolé, Campina Grande - PB, 58104-170",
          takeOrderInRestaurant:true
        },
        {
          name: "Caio Lanches",
          foods:["Sanduiches","Pizza","Acai"],
          img:require("../img/lanchonete.jpg"),
          timeToDelivery:"0/30 min",
          deliveryPrice:0,
          rating: 4.7,
          paymentMethods:[{method:"Máquina movel",options: ["Elo - Crédito","Elo - Débito","Hipercard - Crédito","MasterCard - Crédito"]},{method:"Dinheiro"}],
          location:"PARTAGE - SHOPPING, Av. Pref. Severino Bezerra Cabral, 1200 - Catolé, PB, 58410-900",
          takeOrderInRestaurant:false
        },
        {
          name: "Acai Mania",
          foods:["Acai","Lanches"],
          img:require("../img/acai.jpg"),
          timeToDelivery:"0/20 min",
          deliveryPrice:7,
          rating: 4.5,
          paymentMethods:[{method:"Máquina movel",options: ["Elo - Crédito","Elo - Débito","Hipercard - Crédito","MasterCard - Crédito"]},{method:"Dinheiro"}],
          location: "R. Luiz Sodré Filho, 535 - Catolé, Campina Grande - PB, 58410-480",
          takeOrderInRestaurant:false
        },
        {
          name: "Pizza do paulista",
          foods:["Pizza"],
          img:require("../img/pizza2.jpg"),
          timeToDelivery:"30/60 min",
          deliveryPrice:7,
          rating: 3.5,
          paymentMethods:[{method:"Máquina movel",options: ["Elo - Crédito","Elo - Débito","Hipercard - Crédito","MasterCard - Crédito"]},{method:"Dinheiro"}],
          location: "R. Luiz Sodré Filho, 535 - Catolé, Campina Grande - PB, 58410-480",
          takeOrderInRestaurant:false
        },
        {
          name: "Pizzaria loucura",
          foods:["Pizza","Lanches"],
          img:require("../img/pizza3.jpg"),
          timeToDelivery:"30/60 min",
          deliveryPrice:7,
          rating: 4.0,
          paymentMethods:[{method:"Máquina movel",options: ["Elo - Crédito","Elo - Débito","Hipercard - Crédito","MasterCard - Crédito"]},{method:"Dinheiro"}],
          location: "R. Luiz Sodré Filho, 535 - Catolé, Campina Grande - PB, 58410-480",
          takeOrderInRestaurant:false
        },
        {
          name: "Sorveteria tropical",
          foods:["Sorvete"],
          img:require("../img/sorvete.jpg"),
          timeToDelivery:"0/20 min",
          deliveryPrice:7,
          rating: 3.5,
          paymentMethods:[{method:"Máquina movel",options: ["Elo - Crédito","Elo - Débito","Hipercard - Crédito","MasterCard - Crédito"]},{method:"Dinheiro"}],
          location: "R. Luiz Sodré Filho, 535 - Catolé, Campina Grande - PB, 58410-480",
          takeOrderInRestaurant:false
        },
        {
          name: "Lanchonete 420",
          foods:["Sanduiches","Pizza","Acai"],
          img:require("../img/lanchonete2.jpg"),
          timeToDelivery:"0/30 min",
          deliveryPrice:7,
          rating: 3.5,
          paymentMethods:[{method:"Máquina movel",options: ["Elo - Crédito","Elo - Débito","Hipercard - Crédito","MasterCard - Crédito"]},{method:"Dinheiro"}],
          location: "R. Luiz Sodré Filho, 535 - Catolé, Campina Grande - PB, 58410-480",
          takeOrderInRestaurant:false
        }
      ]
      */
