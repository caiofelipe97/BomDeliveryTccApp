import React, { Component } from 'react';
import {  StyleSheet } from 'react-native';
import { Content, Text, Button, View, Icon} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import  OrderDetails from '../components/OrderDetails';
import PaymemtDetails from '../components/PaymentDetails';
import { StackActions,NavigationEvents } from 'react-navigation';

const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color:'#800080',
        margin: 10,
        marginLeft: 20,
        marginBottom:0
      },
      buttonsView:{
          alignItems:'center'
      },
      textButtomStyle:{
          color:'#FF0000',
          fontWeight: 'bold',
          margin:10
      },
      buttomStyle:{
        backgroundColor:'#FF0000'
    },
})

export default class CartScreen extends Component {
     static navigationOptions =  ({ navigation }) => {
        const cart = navigation.getParam('cart', []);
        const restaurant = navigation.getParam('restaurant', {});
        const pushAction = StackActions.push({
            routeName: 'Restaurant',
            params: {
                cart: cart,
                restaurant: restaurant
            },
        });
        return {
            headerTitle: 'Carrinho',
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
   
    componentDidMount() {
        this.willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            () => {
                const { navigation } = this.props;
                const cart = navigation.getParam('cart', []);
                const restaurant = navigation.getParam('restaurant', {});
                let subtotal = 0;
                for (i = 0; i < cart.length; i++) {
                    subtotal += cart[i].subtotal * cart[i].amount;
                }
                this.setState({orderSubtotal: subtotal, cart, restaurant});
             }
          );
    }
    componentWillUnmount() {
        this.willFocusSubscription.remove();
      }

    handleMultipleChange(i, type) {
        let { cart, orderSubtotal } = this.state;
        if(type == 'minus'){
            if(cart[i].amount < 2){
                console.log("Tratar tirar item do carrinho");
            }else{
                cart[i].amount--;
                orderSubtotal -= cart[i].subtotal;
            }
        } else if(type=='plus') {
            cart[i].amount++;
            orderSubtotal += cart[i].subtotal;

        }

        this.setState({cart,orderSubtotal});
      }
     
  render() {
    const { navigation } = this.props;
    const {cart, restaurant, orderSubtotal} = this.state;
    const pushAction = StackActions.push({
        routeName: 'Restaurant',
        params: {
            cart: cart,
            restaurant: restaurant
        },
    });
    return (
      <Content>
        <View>
            <OrderDetails orderDetails={cart}  handleMultipleChange={this.handleMultipleChange.bind(this)} />
            <PaymemtDetails deliveryPrice={restaurant.deliveryPrice} orderSubtotal={orderSubtotal}/>
            <View style={styles.buttonsView} >
                <Button transparent onPress={() => { navigation.dispatch(pushAction) }}>
                    <Text  style={styles.textButtomStyle}>Adicionar Mais Itens</Text>
                </Button>
                <Button danger style={styles.buttomStyle}>
                    <Text>Selecionar forma da entrega</Text>
                </Button>
            </View>
        </View>
      </Content>
    );
  }
}