import React, { Component } from 'react';
import {  StyleSheet } from 'react-native'
import { Container, Content, Text, Tab, Tabs, List, ListItem, ScrollableTab, View, Icon, Badge, Fab, Item} from 'native-base';
import RestaurantCard from '../components/RestaurantCard';
import FoodList from '../components/FoodList';
import { StackActions, NavigationActions  } from 'react-navigation';

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
          headerLeft: (<Icon
            onPress={() => {
              const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'Home' })],
              });
              navigation.dispatch(resetAction);
            }}
            name='arrow-back'
            style={{color: '#FFFF00', marginLeft:20, fontSize: 24 }}
        />),
          headerRight: (<Icon style={styles.infoIconStyle} name="md-information-circle" onPress={()=>{
            const pushAction = StackActions.push({
                routeName: 'Info',
                params: {
                  restaurant: restaurant
                },
              });
            navigation.dispatch(pushAction)
            }}/>),
          tabBarVisible:false
      }  
    }
    
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.generateFoodList = this.generateFoodList.bind(this);
        const restaurant = navigation.getParam('restaurant', {});
        const cart = navigation.getParam('cart',[]);
        this.state = {
          restaurant: restaurant,
          cart: cart
        };
    }
    componentDidMount() {
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
        return <FoodList key={i} title={title} foods={foods}  cart={this.state.cart}  navigation={this.props.navigation} restaurant={this.state.restaurant} />
    });
  }
  }
  render() {
    const { navigation } = this.props;
    const { restaurant, foods, cart } = this.state;
    let cartLength = 0
    if(cart){
      cart.forEach(item => {
        cartLength = cartLength + item.amount
     })
    }
    
    return (
      <Container>
      <Content>
        <RestaurantCard restaurant={restaurant}inactive={true}/>
        <Tabs  tabBarUnderlineStyle={{ backgroundColor: '#FFFF00' }} renderTabBar={()=>  <ScrollableTab style={{ backgroundColor:'#800080'}}  />}>
          <Tab heading="Promo do dia" tabStyle={{backgroundColor: '#800080'}} textStyle={{color: '#FFFF00'}} activeTabStyle={{backgroundColor: '#800080'}} activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}/>
          <Tab heading="Combos" tabStyle={{backgroundColor: '#800080'}} textStyle={{color: '#FFFF00'}} activeTabStyle={{backgroundColor: '#800080'}} activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}/>
          <Tab heading="Pizzas" tabStyle={{backgroundColor: '#800080'}} textStyle={{color: '#FFFF00'}} activeTabStyle={{backgroundColor: '#800080'}} activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}/>
          <Tab heading="Sanduiches" tabStyle={{backgroundColor: '#800080'}} textStyle={{color: '#FFFF00'}} activeTabStyle={{backgroundColor: '#800080'}} activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}/>
          <Tab heading="Bebidas" tabStyle={{backgroundColor: '#800080'}} textStyle={{color: '#FFFF00'}} activeTabStyle={{backgroundColor: '#800080'}} activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}/>
        </Tabs>
            <List>
                {this.generateFoodList(foods)}
            </List>
            </Content>
          {
            cart && cart.length !== 0  && 
            <View>
              <View pointerEvents={'none'} style= {{ position:'absolute', elevation: 40, bottom: 58, right: 18, zIndex: 1 }}>
              <Badge  style={{ backgroundColor: '#800080' }}>
                <Text>{cartLength}</Text>
              </Badge>
              </View>
            
              <Fab
                style={{ backgroundColor: '#FF0000' }}
                position="bottomRight"
                active={false}
                onPress={() => {
                  pageUUID =Math.random () * 10000
                    navigation.navigate({
                      routeName: 'Cart',
                      params:{
                        cart:cart,
                        restaurant: restaurant
                      },
                      key: pageUUID
                  })
                 }}
              >
                <Icon name="md-cart" />
              </Fab>
            </View>
          }
      </Container>
    );
  }
}