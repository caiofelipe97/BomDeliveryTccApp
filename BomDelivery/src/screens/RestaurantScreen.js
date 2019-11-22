import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Text,
  Tab,
  Tabs,
  List,
  ScrollableTab,
  View,
  Icon,
  Badge,
  Fab,
} from 'native-base';
import RestaurantCard from '../components/RestaurantCard';
import FoodList from '../components/FoodList';
import {StackActions, NavigationActions} from 'react-navigation';

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: '#800080',
  },
  textStyle: {
    color: '#FFFF00',
    fontWeight: 'bold',
  },
  infoIconStyle: {
    marginRight: 20,
    color: '#FFFF00',
  },
});

export default class RestaurantScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const restaurant = navigation.getParam('restaurant', {});
    return {
      headerTitle: restaurant.name,
      hasTab: true,
      headerLeft: (
        <Icon
          onPress={() => {
            const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({routeName: 'Home'})],
            });
            navigation.dispatch(resetAction);
          }}
          name="arrow-back"
          style={{color: '#FFFF00', marginLeft: 20, fontSize: 24}}
        />
      ),
      headerRight: (
        <Icon
          style={styles.infoIconStyle}
          name="md-information-circle"
          onPress={() => {
            const pushAction = StackActions.push({
              routeName: 'Info',
              params: {
                restaurant: restaurant,
              },
            });
            navigation.dispatch(pushAction);
          }}
        />
      ),
      tabBarVisible: false,
    };
  };

  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.generateFoodList = this.generateFoodList.bind(this);
    const restaurant = navigation.getParam('restaurant', {});
    const cart = navigation.getParam('cart', []);
    this.state = {
      restaurant: restaurant,
      cart: cart,
    };
  }
  componentDidMount() {4
    const { restaurant } = this.state;
    let foods = []
    if(restaurant && restaurant.type == "food"){
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
        ]
      },
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
  }
    
    else if(restaurant && restaurant.type == "clothes"){
      foods = [
      {
        'Camisetas': [
          {
            name: 'Camiseta Calvin Klein Azul',
            description: 'Camise Calvin Klen cor Azul/Branco',
            value: 79.90,
            img: 'https://http2.mlstatic.com/camiseta-calvin-klein-camisa-blusa-t-shirt-masculina-ck-D_NQ_NP_957208-MLB26997553993_032018-F.jpg'
          },
          {
            name: 'Camiseta Calvin Klein Básica',
            description: 'Camiseta Calvin Klein Básica cor Cinza',
            value: 59.90,
            img: 'https://img.irroba.com.br/fit-in/600x600/diretodo/catalog/camisetas/calvin-klein/c76.jpg'
          },
        ],
      },
      {
        Bermudas: [
          {
            name: 'Bermuda Nike',
            description: 'Bermuda Moletom Cinza Nike',
            value: 30.0,
            img: 'https://static.netshoes.com.br/produtos/bermuda-moletom-nike-jersey-club-reta-masculina/26/D12-3045-226/D12-3045-226_zoom1.jpg'
          },
          {
            name: 'Short esportivo Adidas',
            description: 'Short esportivo preto Adidas',
            value: 19.90,
            img: 'https://static.netshoes.com.br/produtos/bermuda-adidas-badge-of-sport-masculina/06/COL-4409-006/COL-4409-006_zoom1.jpg'
          },
       ]
      },
      {
        Bonés: [
          {
            name: 'Bone Nike',
            description: 'Bone Cinza Nike',
            value: 30.0,
            img: 'https://static.netshoes.com.br/produtos/bermuda-moletom-nike-jersey-club-reta-masculina/26/D12-3045-226/D12-3045-226_zoom1.jpg'
          },
                
       ]
      }
    ];
  }else if(restaurant && restaurant.type == "drink"){
    foods = [
      {
        'Cervejas': [
          {
            name: 'Cerveja itaipava premium 355ml',
            description: 'Lata 355ml',
            value: 2.90,
            img: 'https://static.carrefour.com.br/medias/sys_master/images/images/ha3/h38/h00/h00/9393717772318.jpg'
          },
          {
            name: 'Devassa Loura 269ml',
            description: 'Cerveja puro malte lager',
            value: 2.55,
            img: 'https://static.carrefour.com.br/medias/sys_master/images/images/hc9/h45/h00/h00/13247486820382.jpg'
          },
        ],
      },
    ]
  }
    
    this.setState({foods});
  }
  generateFoodList(foods) {
    if (foods){
      return foods.map((foodArrays, i) => {
        let title = Object.keys(foodArrays)[0];
        foods = foodArrays[Object.keys(foodArrays)[0]];
        return (
          <FoodList
            key={i}
            title={title}
            foods={foods}
            cart={this.state.cart}
            navigation={this.props.navigation}
            restaurant={this.state.restaurant}
          />
        );
      });
    }
  }
  render() {
    const {navigation} = this.props;
    const {restaurant, foods, cart} = this.state;
    let cartLength = 0;
    if (cart){
      cart.forEach(item => {
        cartLength = cartLength + item.amount;
      });
    }

    return (
      <Container>
        <Content>
          <RestaurantCard restaurant={restaurant} inactive={true} />
          { restaurant.type == "clothes" && 
          (
            <Tabs
            tabBarUnderlineStyle={{backgroundColor: '#FFFF00'}}
            renderTabBar={() => (
              <ScrollableTab style={{backgroundColor: '#800080'}} />
            )}>
            
            <Tab
              heading="Camisetas"
              tabStyle={{backgroundColor: '#800080'}}
              textStyle={{color: '#FFFF00'}}
              activeTabStyle={{backgroundColor: '#800080'}}
              activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}
            />
            <Tab
              heading="Bermudas"
              tabStyle={{backgroundColor: '#800080'}}
              textStyle={{color: '#FFFF00'}}
              activeTabStyle={{backgroundColor: '#800080'}}
              activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}
            />
            <Tab
              heading="Bonés"
              tabStyle={{backgroundColor: '#800080'}}
              textStyle={{color: '#FFFF00'}}
              activeTabStyle={{backgroundColor: '#800080'}}
              activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}
            />
            <Tab
              heading="Óculos"
              tabStyle={{backgroundColor: '#800080'}}
              textStyle={{color: '#FFFF00'}}
              activeTabStyle={{backgroundColor: '#800080'}}
              activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}
            />
          </Tabs>
          )
            }
            { restaurant.type == "food" && (
              <Tabs
            tabBarUnderlineStyle={{backgroundColor: '#FFFF00'}}
            renderTabBar={() => (
              <ScrollableTab style={{backgroundColor: '#800080'}} />
            )}>
            
            <Tab
              heading="Promo do dia"
              tabStyle={{backgroundColor: '#800080'}}
              textStyle={{color: '#FFFF00'}}
              activeTabStyle={{backgroundColor: '#800080'}}
              activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}
            />
            <Tab
              heading="Combos"
              tabStyle={{backgroundColor: '#800080'}}
              textStyle={{color: '#FFFF00'}}
              activeTabStyle={{backgroundColor: '#800080'}}
              activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}
            />
            <Tab
              heading="Pizzas"
              tabStyle={{backgroundColor: '#800080'}}
              textStyle={{color: '#FFFF00'}}
              activeTabStyle={{backgroundColor: '#800080'}}
              activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}
            />
            <Tab
              heading="Sanduíches"
              tabStyle={{backgroundColor: '#800080'}}
              textStyle={{color: '#FFFF00'}}
              activeTabStyle={{backgroundColor: '#800080'}}
              activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}
            />
            <Tab
              heading="Bebidas"
              tabStyle={{backgroundColor: '#800080'}}
              textStyle={{color: '#FFFF00'}}
              activeTabStyle={{backgroundColor: '#800080'}}
              activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}
            />
          </Tabs>
            )
            }
            { restaurant.type == "drink" && (
              <Tabs
            tabBarUnderlineStyle={{backgroundColor: '#FFFF00'}}
            renderTabBar={() => (
              <ScrollableTab style={{backgroundColor: '#800080'}} />
            )}>
            
            <Tab
              heading="Cervejas"
              tabStyle={{backgroundColor: '#800080'}}
              textStyle={{color: '#FFFF00'}}
              activeTabStyle={{backgroundColor: '#800080'}}
              activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}
            />
          </Tabs>
            )
            }
       
          <List>{this.generateFoodList(foods)}</List>
        </Content>
        {cart && cart.length !== 0 && (
          <View>
            <View
              pointerEvents={'none'}
              style={{
                position: 'absolute',
                elevation: 40,
                bottom: 58,
                right: 18,
                zIndex: 1,
              }}>
              <Badge style={{backgroundColor: '#800080'}}>
                <Text>{cartLength}</Text>
              </Badge>
            </View>

            <Fab
              style={{backgroundColor: '#FF0000'}}
              position="bottomRight"
              active={false}
              onPress={() => {
                let pageUUID = Math.random() * 10000;
                navigation.navigate({
                  routeName: 'Cart',
                  params: {
                    cart: cart,
                    restaurant: restaurant,
                  },
                  key: pageUUID,
                });
              }}>
              <Icon name="md-cart" />
            </Fab>
          </View>
        )}
      </Container>
    );
  }
}
