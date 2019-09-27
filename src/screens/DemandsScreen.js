import React, {Component} from 'react';
import {Content, Text, Container, Tabs, Tab, ScrollableTab} from 'native-base';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DemandCard from '../components/DemandCard';

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#800080',
    margin: 10,
    marginLeft: 20,
    marginBottom: 0,
  },
});

export default class DemandsScreen extends Component {
  static navigationOptions = () => {
    return {
      headerTitle: 'Pedidos',
      hasTab: true,
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      olderDemands: [],
      inProgressDemands: [],
    };
  }
  componentDidMount() {
    let olderDemands = [
      {
        restaurant: {
          name: 'Caio Lanches',
          foods: ['Sanduiches', 'Pizza', 'Acai'],
          img: require('../img/lanchonete.jpg'),
          timeToDelivery: '0/30 min',
          deliveryPrice: 0,
          rating: 4.7,
          paymentMethods: [
            {
              method: 'Máquina movel',
              options: [
                'Elo - Crédito',
                'Elo - Débito',
                'Hipercard - Crédito',
                'MasterCard - Crédito',
              ],
            },
            {method: 'Dinheiro'},
          ],
          location:
            'PARTAGE - SHOPPING, Av. Pref. Severino Bezerra Cabral, 1200 - Catolé, PB, 58410-900',
          takeOrderInRestaurant: false,
        },
        adress:
          'Rua Agamenon Magalhaes, 230 - Centro, Alagoa Nova - Paraiba, CEP: 58400-137',
        paymentMethod: '',
        values: {
          subtotal: 24.5,
          delivery: 6,
          total: 30.5,
        },
        cart: [],
        date: new Date(2019, 3, 8, 21, 30, 11, 0),
        client: {},
        code: 5961,
        status: 'delivered',
      },
      {
        restaurant: {
          name: 'Acai Mania',
          foods: ['Acai', 'Lanches'],
          img: require('../img/acai.jpg'),
          timeToDelivery: '0/20 min',
          deliveryPrice: 7,
          rating: 4.5,
          paymentMethods: [
            {
              method: 'Máquina movel',
              options: [
                'Elo - Crédito',
                'Elo - Débito',
                'Hipercard - Crédito',
                'MasterCard - Crédito',
              ],
            },
            {method: 'Dinheiro'},
          ],
          location:
            'R. Luiz Sodré Filho, 535 - Catolé, Campina Grande - PB, 58410-480',
          takeOrderInRestaurant: false,
        },
        adress:
          'Rua Luiza Bezerra Motta, 720 - Centro, Alagoa Nova - Paraiba, CEP: 58410-410, Referencia: Em frente ao antigo sitio sao joao',
        paymentMethod: '',
        values: {
          subtotal: 22,
          delivery: 0,
          total: 22,
        },
        cart: [],
        date: new Date(2019, 6, 12, 20, 11, 11, 0),
        client: {},
        code: 3275,
        status: 'delivered',
      },
      {
        restaurant: {
          name: 'Pizzaria X',
          foods: ['Pizza'],
          img: require('../img/pizza.jpg'),
          timeToDelivery: '20/50 min',
          deliveryPrice: 1,
          rating: 5.0,
          paymentMethods: [
            {
              method: 'Máquina movel',
              options: [
                'Elo - Crédito',
                'Elo - Débito',
                'Hipercard - Crédito',
                'MasterCard - Crédito',
              ],
            },
            {method: 'Dinheiro'},
          ],
          location:
            'Av. Pref. Severino Bezerra Cabral, 1200 - loja 106 - Catolé, Campina Grande - PB, 58104-170',
          takeOrderInRestaurant: true,
        },
        adress:
          'Rua Luiza Bezerra Motta, 720 - Centro, Alagoa Nova - Paraiba, CEP: 58410-410, Referencia: Em frente ao antigo sitio sao joao',
        paymentMethod: '',
        values: {
          subtotal: 48.9,
          delivery: 5,
          total: 53.9,
        },
        cart: [],
        date: new Date(2019, 4, 22, 19, 38, 11, 0),
        client: {},
        code: 7419,
        status: 'delivered',
      },
    ];
    let inProgressDemands = [];
    this.setState({olderDemands, inProgressDemands});
  }

  renderOlderDemandsCards(demands) {
    console.log(demands);
    return demands.map((demand, index) => (
      <DemandCard
        key={index}
        demand={demand}
        navigation={this.props.navigation}
      />
    ));
  }

  render() {
    const {olderDemands, inProgressDemands} = this.state;
    return (
      <Container>
        <Tabs
          tabBarUnderlineStyle={{backgroundColor: '#FFFF00'}}
          renderTabBar={() => (
            <ScrollableTab
              style={{borderWidth: 0, backgroundColor: '#800080', height: 40}}
            />
          )}>
          <Tab
            heading="Anteriores"
            tabStyle={{backgroundColor: '#800080', width: '50%'}}
            textStyle={{color: '#FFFF00'}}
            activeTabStyle={{backgroundColor: '#800080', width: '50%'}}
            activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}>
            <Content>{this.renderOlderDemandsCards(olderDemands)}</Content>
          </Tab>
          <Tab
            heading="Em Andamento"
            tabStyle={{backgroundColor: '#800080', width: '50%'}}
            textStyle={{color: '#FFFF00'}}
            activeTabStyle={{backgroundColor: '#800080', width: '50%'}}
            activeTextStyle={{color: '#FFFF00', fontWeight: 'bold'}}>
            <Content>
              <Text>aaaa</Text>
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
