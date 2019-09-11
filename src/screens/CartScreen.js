import React, { Component } from 'react';
import {  StyleSheet } from 'react-native';
import { Content, Text, Button} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import  OrderDetails from '../components/OrderDetails';
import PaymemtDetails from '../components/PaymentDetails';

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

    handleMultipleChange(i, type) {
        console.log(i);
        console.log(type);
        let { cart } = this.state;
        if(type == 'minus'){
            if(cart[i].amount < 2){
                console.log("Tratar tirar item do carrinho");
            }else{
                cart[i].amount--;
            }
        } else if(type=='plus') {
            cart[i].amount++;
        }

        this.setState({cart});
      }
     
  render() {
    const {cart} = this.state;
    return (
      <Content>
        <ScrollView>
            <OrderDetails orderDetails={cart}  handleMultipleChange={this.handleMultipleChange.bind(this)} />
            <PaymemtDetails/>
            <Button transparent>
                <Text>Adicionar Mais Itens</Text>
            </Button>
            <Button block>
                <Text>Selecionar forma da entrega</Text>
            </Button>
        </ScrollView>
      </Content>
    );
  }
}