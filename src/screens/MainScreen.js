import React, { Component } from 'react';
import { Content } from 'native-base';
import RestaurantCard from '../components/RestaurantCard';
import { ScrollView } from 'react-native-gesture-handler';

export default class MainScreen extends Component {
    static navigationOptions = {
      title: 'Bom Delivery',
    };
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            restaurants: []

        };
    }
    componentDidMount() {
      restaurants = [
        {
          name: "Pizzaria X",
          foods:["Pizza"],
          img:require("../img/pizza.jpg"),
          timeToDelivery:"20/50 min",
          deliveryPrice:1,
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
          paymentMethods:[{method:"Máquina movel",options: ["Elo - Crédito","Elo - Débito","Hipercard - Crédito","MasterCard - Crédito"]},{method:"Dinheiro"}],
          location: "R. Luiz Sodré Filho, 535 - Catolé, Campina Grande - PB, 58410-480",
          takeOrderInRestaurant:false
        }
      ]

      this.setState({restaurants: restaurants})
      
    }
  renderRestaurants(restaurants) {
      console.log(restaurants)
      return restaurants.map((restaurant, index
      ) => 
        <RestaurantCard key={index} restaurant={restaurant} navigation={this.props.navigation} inactive={false}/>
      )
  }
  render() {
    let {restaurants} = this.state
    return (
        <Content>
          <ScrollView>
            {this.renderRestaurants(restaurants)}
          </ScrollView>
        </Content>
    );
  }
}