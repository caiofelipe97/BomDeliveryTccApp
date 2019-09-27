import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {
  Content,
  Text,
  Button,
  View,
  Icon,
  List,
  ListItem,
  Radio,
} from 'native-base';
import {StackActions, NavigationEvents} from 'react-navigation';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonsView: {
    marginBottom: 20,
    alignItems: 'center',
  },
  buttomStyle: {
    backgroundColor: '#FF0000',
  },
  boxStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameStyle: {
    color: 'black',
    marginLeft: 10,
  },
  descriptionStyle: {
    marginHorizontal: 10,
  },
  cardStyle: {},
  nameStyle: {
    fontSize: 18,
  },
  descriptionStyle: {
    color: '#808080',
  },
  textView: {
    marginLeft: 10,
  },
});

export default class DeliveryScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const cart = navigation.getParam('cart', []);
    const restaurant = navigation.getParam('restaurant', {});
    const pushAction = StackActions.push({
      routeName: 'Cart',
      params: {
        cart: cart,
        restaurant: restaurant,
      },
    });
    return {
      headerTitle: 'Forma de entrega',
      headerLeft: (
        <Icon
          onPress={() => navigation.dispatch(pushAction)}
          name="arrow-back"
          style={{color: '#FFFF00', marginLeft: 20, fontSize: 24}}
        />
      ),
      tabBarVisible: false,
    };
  };

  constructor(props) {
    super(props);
    const {navigation} = this.props;
    const cart = navigation.getParam('cart', []);
    const restaurant = navigation.getParam('restaurant', {});
    this.state = {
      cart: cart,
      restaurant: restaurant,
      orderSubtotal: 0,
      adresses: [],
      choiced: -1,
      adress: {},
    };
  }
  componentDidMount() {
    const {navigation} = this.props;
    const cart = navigation.getParam('cart', []);
    const restaurant = navigation.getParam('restaurant', {});
    const adresses = [
      {
        title: 'Casa',
        type: 'home',
        street: 'Rua Luiza Bezerra Motta',
        number: '720',
        cep: '58410-410',
        complement: 'Apto 601',
        landmark: 'Em frente ao antigo sitio sao joao',
        neighborhood: 'Centro',
        city: 'Alagoa Nova',
        state: 'Paraiba',
        description:
          'Rua Luiza Bezerra Motta, 720 - Centro, Alagoa Nova - Paraiba, CEP: 58410-410, Referencia: Em frente ao antigo sitio sao joao',
      },
      {
        title: 'Rua Agamenon Magalhaes',
        type: 'other',
        street: 'Rua Agamenon Magalhaes',
        number: '230',
        cep: '58400-137',
        complement: 'Apto 1501',
        landmark: '',
        neighborhood: 'Centro',
        city: 'Alagoa Nova',
        state: 'Paraiba',
        description:
          'Rua Agamenon Magalhaes, 230 - Centro, Alagoa Nova - Paraiba, CEP: 58400-137',
      },
    ];
    let subtotal = 0;
    for (i = 0; i < cart.length; i++) {
      subtotal += cart[i].subtotal * cart[i].amount;
    }
    this.setState({orderSubtotal: subtotal, cart, restaurant, adresses});
  }

  getBackAdress = deliveryAdress => {
    console.log(deliveryAdress);
  };
  render() {
    const {navigation} = this.props;
    const {adresses, choiced, adress, cart, restaurant} = this.state;
    console.log(adresses);
    const adressesList = adresses.map((adress, i) => {
      return (
        <ListItem
          key={i}
          onPress={() => this.setState({choiced: i, adress: adresses[i]})}>
          <View style={styles.boxStyle}>
            <Radio value={i} selected={choiced == i} />
            <View style={styles.textView}>
              <Text style={styles.nameStyle}>{adress.title}</Text>
              <Text style={styles.descriptionStyle}>{adress.description}</Text>
            </View>
          </View>
        </ListItem>
      );
    });
    return (
      <Content contentContainerStyle={styles.content}>
        <View style={styles.viewStyle}>
          <List>{adressesList}</List>
          <View style={styles.buttonsView}>
            <Button
              style={styles.buttomStyle}
              onPress={() => {
                if (Object.entries(adress).length === 0) {
                  Alert.alert(
                    'Você precisa selecionar um endereço de entrega',
                    'Selecione um dos seus endereços de entrega ou crie um novo',
                    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                  );
                } else {
                  const pushAction = StackActions.push({
                    routeName: 'Payment',
                    params: {
                      cart: cart,
                      restaurant: restaurant,
                      adress: adress,
                    },
                  });
                  navigation.dispatch(pushAction);
                }
              }}>
              <Text>Selecionar forma da pagamento</Text>
            </Button>
          </View>
        </View>
      </Content>
    );
  }
}
