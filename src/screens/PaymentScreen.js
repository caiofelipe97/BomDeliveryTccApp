import React, { Component } from 'react';
import {  StyleSheet } from 'react-native';
import { Content, Text, Button, View, Icon} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import  OrderDetails from '../components/OrderDetails';
import PaymemtDetails from '../components/PaymentDetails';
import { StackActions,NavigationEvents } from 'react-navigation';

const styles = StyleSheet.create({
    buttomStyle:{
        backgroundColor:'#FF0000'
    }
})

export default class DeliveryScreen extends Component {
     static navigationOptions =  ({ navigation }) => {
        const cart = navigation.getParam('cart', []);
        const restaurant = navigation.getParam('restaurant', {});
        const pushAction = StackActions.push({
            routeName: 'Cart',
            params: {
                cart: cart,
                restaurant: restaurant
            },
        });
        return {
            headerTitle: 'Forma de entrega',
            headerLeft: (
              <Icon
                onPress={() =>  navigation.dispatch(pushAction) }
                name='arrow-back'
                style={{color: '#FFFF00', marginLeft:20, fontSize: 24 }}
            />),
            tabBarVisible:false
       }
    }

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const cart = navigation.getParam('cart', []);
        const restaurant = navigation.getParam('restaurant', {});
        this.state = {
          cart: cart,
          restaurant: restaurant,
          orderSubtotal: 0
        };
    }
   conponentDidMount(){

   }
  render() {
    return (
      <Content>
        <View>
            <Text>Tela de pagamento</Text>
        </View>
      </Content>
    );
  }
}