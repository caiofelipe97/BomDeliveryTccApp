import React, { Component } from 'react';
import {  StyleSheet } from 'react-native'
import { Content, Text, Tab, Tabs, List, ListItem, ScrollableTab, Title, Icon} from 'native-base';
import RestaurantCard from '../components/RestaurantCard';
import FoodList from '../components/FoodList';
import { ScrollView } from 'react-native-gesture-handler';
import { StackActions } from 'react-navigation';

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: '#800080',
  },
  textStyle: {
    color: '#FFFF00',
    fontWeight: 'bold'
  },
  infoIconStyle:{
    marginRight:20,
    color: '#FFFF00'
  }

})

export default class RestaurantScreen extends Component {
    static navigationOptions =  ({ navigation }) => {
      const restaurant = navigation.getParam('restaurant', {});
      return {
          headerTitle: restaurant.name,
          hasTab:true,
          headerRight: (<Icon style={styles.infoIconStyle} name="md-information-circle" onPress={()=>{
            const pushAction = StackActions.push({
                routeName: 'Info',
                params: {
                  restaurant: restaurant
                },
              });
            navigation.dispatch(pushAction)
            }}/>)
      }  
    }
    
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.generateFoodList = this.generateFoodList.bind(this);
        const restaurant = navigation.getParam('restaurant', {});
        this.state = {
          restaurant: restaurant
        };
    }
    componentDidMount() {
      console.log(this.state.restaurant.name)
      foods = [
        {'Promo do dia':[
          {
           'name': 'Promoção Pizza Grande',
           'description': 'Escolha até 2 sabores.',
           'value': 28.99
          },
          {
            'name': 'Macarronada à Bolonhesa',
            'description': 'Serve 2 Pessoas.',
            'value': 22.00
           }
        ]},
        {'Combos':[
          {
            'name': 'Arraia',
            'description': 'Pão bola, frango desfiado, catupiry, bacon crocante, tomate, alface, milho e molho especial.',
            'value': 18.00
          },
          {
            'name': 'Big Tartaruga',
            'description': 'Pão bola, hamburguer 90g, muçarela, frango desfiado, bacon crocante, batata palha, tomate, alface, milho e molho especial.',
            'value': 19.00
          },
          {
            'name': 'Golfinho',
            'description': 'Pão bola, hamburguer 90g, muçarela, bacon crocante, milho e molho especial',
            'value': 15.00
          }
        ]},
        {'Pizzas':[
          {
          'name': 'Pizza Grande',
           'description': 'Escolha até 2 sabores.',
           'value': 35.00
          },
          {
            'name': 'Pizza Pequena',
             'description': '',
             'value': 25.00
            }
        ]},
        {'Sanduíches':[
          {
            'name': 'Arraia',
            'description': 'Pão bola, frango desfiado, catupiry, bacon crocante, tomate, alface, milho e molho especial.',
            'value': 18.00
          },
          {
            'name': 'Big Tartaruga',
            'description': 'Pão bola, hamburguer 90g, muçarela, frango desfiado, bacon crocante, batata palha, tomate, alface, milho e molho especial.',
            'value': 19.00
          },
          {
            'name': 'Golfinho',
            'description': 'Pão bola, hamburguer 90g, muçarela, bacon crocante, milho e molho especial',
            'value': 15.00
          }
        ]},
        {'Bebidas':[
          {
            'name': 'Refrigerante 1L',
             'description': '',
             'value': 7.00
          },
          {
            'name': 'Refrigerante 2L',
            'description': '',
            'value': 10.00
          }
        ]},
        ]

      this.setState({foods})
    }
  generateFoodList(foods) {
    if(foods){
      return foods.map((foodArrays,i)=>{ 
        title = Object.keys(foodArrays)[0];
        foods =  foodArrays[Object.keys(foodArrays)[0]]
        return <FoodList key={i} title={title} foods={foods}  navigation={this.props.navigation}/>
    });
  }
  }
  render() {
    const { restaurant, foods } = this.state;
    return (
      <Content>
        <RestaurantCard restaurant={restaurant} inactive={true}/>
        <Tabs  tabBarUnderlineStyle={{ backgroundColor: '#FFFF00' }} renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Promo do dia" tabStyle={{backgroundColor: '#800080'}} textStyle={{color: '#FFFF00'}} activeTabStyle={{backgroundColor: '#800080'}} activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}/>
          <Tab heading="Combos" tabStyle={{backgroundColor: '#800080'}} textStyle={{color: '#FFFF00'}} activeTabStyle={{backgroundColor: '#800080'}} activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}/>
          <Tab heading="Pizzas" tabStyle={{backgroundColor: '#800080'}} textStyle={{color: '#FFFF00'}} activeTabStyle={{backgroundColor: '#800080'}} activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}/>
          <Tab heading="Sanduiches" tabStyle={{backgroundColor: '#800080'}} textStyle={{color: '#FFFF00'}} activeTabStyle={{backgroundColor: '#800080'}} activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}/>
          <Tab heading="Bebidas" tabStyle={{backgroundColor: '#800080'}} textStyle={{color: '#FFFF00'}} activeTabStyle={{backgroundColor: '#800080'}} activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}/>
        </Tabs>
        <ScrollView>
          <List>
              {this.generateFoodList(foods)}
          </List>
        </ScrollView>
      </Content>
    );
  }
}