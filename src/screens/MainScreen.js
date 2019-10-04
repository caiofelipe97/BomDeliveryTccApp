import React, {useState, useEffect} from 'react';
import firebase from '../Firebase.js'
require('firebase/firestore');
import {Content, Picker, Icon} from 'native-base';
import RestaurantCard from '../components/RestaurantCard';

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
      style={{height: 50, width: 130, color: '#FFFF00', fontWeight: 'bold', paddingLeft: 0, marginLeft: 0 }}
    
          >
      <Picker.Item label="Comidas" value={1} />
      <Picker.Item label="Roupas e acessórios" value={2}/>
      <Picker.Item label="Bebidas" value={3} />
    </Picker>
    ),
  };
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
