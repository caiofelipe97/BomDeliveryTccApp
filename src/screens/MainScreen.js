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
      console.log("TESTE")
      restaurants = [
        {
          name: "Pizzaria X",
          foods:["Pizza"],
          img:require("../img/pizza.jpg"),
          timeToDelivery:"20/50 min"
        },
        {
          name: "Caio Lanches",
          foods:["Sanduiches","Pizza","Acai"],
          img:require("../img/lanchonete.jpg"),
          timeToDelivery:"0/30 min"
        },
        {
          name: "Acai Mania",
          foods:["Acai","Lanches"],
          img:require("../img/acai.jpg"),
          timeToDelivery:"0/20 min"
        },
        {
          name: "Pizza do paulista",
          foods:["Pizza"],
          img:require("../img/pizza2.jpg"),
          timeToDelivery:"30/60 min"
        },
        {
          name: "Pizzaria loucura",
          foods:["Pizza","Lanches"],
          img:require("../img/pizza3.jpg"),
          timeToDelivery:"30/60 min"
        },
        {
          name: "Sorveteria tropical",
          foods:["Sorvete"],
          img:require("../img/sorvete.jpg"),
          timeToDelivery:"0/20 min"
        },
        {
          name: "Lanchonete 420",
          foods:["Sanduiches","Pizza","Acai"],
          img:require("../img/lanchonete2.jpg"),
          timeToDelivery:"0/30 min"
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