import React, { Component } from 'react';
import {  StyleSheet, Alert } from 'react-native';
import { Content, Text, Button, View, Icon, List, ListItem, Radio, Card, CardItem, Body} from 'native-base';
import { StackActions,NavigationActions } from 'react-navigation';
import {formatMoney} from '../utils/Util';

const styles = StyleSheet.create({
    buttomStyle:{
        backgroundColor:'#FF0000'
    },
    viewStyle:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color:'#800080',
        margin: 10,
        marginBottom:0
      },
    boxStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    nameStyle:{
        color:"black",
        marginHorizontal: 10
    },
    buttonsView:{
        marginBottom: 20,
        alignItems:'center'
    },
    totalViewStyle:{
      flexDirection:'row',
      justifyContent: 'space-between',
      margin: 10
    },
    totalTextStyle:{
      fontWeight: 'bold'
    },
    valueStyle:{
      color: '#008000'
    }
})

export default class PaymentScreen extends Component {
     static navigationOptions =  ({ navigation }) => {
        const popAction = StackActions.pop({
            n: 1,
          });
        return {
            headerTitle: 'Forma de pagamento',
            headerLeft: (
              <Icon
                onPress={() =>  navigation.dispatch(popAction) }
                name='arrow-back'
                style={{color: '#FFFF00', marginLeft:20, fontSize: 24 }}
            />),
            tabBarVisible:false
       }
    }

    constructor(props) {
        super(props);
        this.state = {
          cart: [],
          restaurant: {},
          adress: {},
          payment: "",
          choiced: -1
        };
    }
   componentDidMount(){
    const { navigation } = this.props;

    const cart = navigation.getParam('cart', []);
    const restaurant = navigation.getParam('restaurant', {});
    const adress = navigation.getParam('adress', {});
    this.setState({cart,restaurant, adress});
   }
  render() {
    const { navigation } = this.props;
    const { restaurant, cart, adress, choiced,payment } = this.state;
    let paymentOptions = [];
    console.log(restaurant)
    console.log(cart)
    console.log(adress)
    if(restaurant.paymentMethods){
        paymentOptions = restaurant.paymentMethods.map((paymentMethod,i) => {
            return(
                <ListItem key={i}    onPress={() => this.setState({choiced: i, payment:paymentMethod.method})}>
                    <View  style={styles.boxStyle}>
                        <Radio value={i} selected={choiced == i}/>
                        <Text style={styles.nameStyle}>{paymentMethod.method}</Text>
                    </View>
                </ListItem> 
              )
        })
    } 
    return (
      <Content>
            <View style={styles.viewStyle}>
                <View>
                    <Text style={styles.titleStyle}>Pagamento</Text>
                    <List>
                        {paymentOptions}
                    </List>
                    <CardItem style={{ backgroundColor: "#DCDCDC",margin:20, paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0}}>
                    <Body>
                        <List>
                            <ListItem key={'adress'} style={{borderBottomWidth: 2, borderBottomColor:"#A9A9A9"}}>
                            <View>
                                <Text style={styles.totalTextStyle}>Endereço de entrega</Text>
                                <Text style={styles.descriptionStyle}>{adress.description}</Text>
                            </View>
                            </ListItem>
                            <ListItem key={'total'}  style={styles.totalViewStyle}>
                                <Text style={styles.totalTextStyle}>Total</Text>
                                <Text style={[styles.valueStyle,styles.totalTextStyle]}>{formatMoney(20)}</Text>
                            </ListItem> 
                        </List>
                    </Body>
                    </CardItem>
                    </View>
                <View style={styles.buttonsView} >
                    <Button style={styles.buttomStyle} onPress={() =>{
                    if(payment === "") Alert.alert("Você precisa selecionar uma forma de pagamento", "Selecione uma das formas de pagamento disponíveis no estabelecimento", [
                        {text: 'OK', onPress: () => console.log('OK Pressed')}])
                    else{
                        const resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'Home' })],
                        });
                        navigation.dispatch(resetAction);
                    }
                    }}>
                        <Text>Mostrar Resumo da Compra</Text>
                    </Button>
                </View>
            </View>
      </Content>
    );
  }
}