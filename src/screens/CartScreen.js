import React, { Component } from 'react';
import {  StyleSheet } from 'react-native'
import { Content, Text} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color:'#800080',
        margin: 10,
        marginLeft: 20,
        marginBottom:0
      },
})

export default class CartScreen extends Component {
    static navigationOptions = {
        title: 'Carrinho',
      };
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const cart = navigation.getParam('cart', {});
        this.state = {
          cart: cart
        };
    }
    componentDidMount() {
        }
     
  render() {
    const {cart} = this.state;
    return (
      <Content>
        <ScrollView>
            <Text style={styles.titleStyle}>Detalhes do pedido</Text>
            <Text>{JSON.stringify(cart)}  </Text>
        </ScrollView>
      </Content>
    );
  }
}