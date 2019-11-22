import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Text,
  Tab,
  Tabs,
  List,
  ListItem,
  ScrollableTab,
  View,
  Icon,
  Badge,
  Fab,
  Item,
} from 'native-base';
import DemandRestaurantCard from '../components/DemandRestaurantCard';
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
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#800080',
    margin: 10,
    marginBottom: 0,
  },
});

export default class OrderDetailsScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Detalhes do pedido',
    };
  };

  constructor(props) {
    super(props);
    const {navigation} = this.props;
    const order = navigation.getParam('order', {});
    this.state = {
      order: order,
    };
  }
  componentDidMount() {}

  render() {
    const {navigation} = this.props;
    const {
      restaurant,
      date,
      code,
      adress,
      paymentMethod,
      values,
    } = this.state.order;
    return (
      <Container>
        <Content>
          <DemandRestaurantCard restaurant={restaurant} date={date} />

          <List>
            <List>
              <ListItem
                key={'pedido'}
                style={{borderBottomWidth: 2, borderBottomColor: '#A9A9A9'}}>
                <View style={{flex: 1}}>
                  <Text style={styles.titleStyle}>Nº do pedido {code}</Text>
                  <Text> carrinho</Text>
                </View>
              </ListItem>
              <ListItem key={'adress'}>
                <View style={{flex: 1}}>
                  <Text style={styles.titleStyle}>Endereço da Entrega</Text>
                  <Text>{adress}</Text>
                </View>
              </ListItem>
              <ListItem key={'payment'}>
                <View style={{flex: 1}}>
                  <Text style={styles.titleStyle}>Forma de Pagamento</Text>
                  <Text>{paymentMethod}</Text>
                </View>
              </ListItem>
              <ListItem key={'value'}>
                <View style={{flex: 1}}>
                  <Text style={styles.titleStyle}>Valor</Text>
                  <Text>{values.total}</Text>
                </View>
              </ListItem>
            </List>
          </List>
        </Content>
      </Container>
    );
  }
}
