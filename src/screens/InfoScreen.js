import React, { Component } from 'react';
import {  StyleSheet } from 'react-native'
import { View ,Content, Text, Tab, Tabs, List, ListItem, ScrollableTab, Title, Icon} from 'native-base';
import RestaurantCard from '../components/RestaurantCard';
import { ScrollView } from 'react-native-gesture-handler';
import {formatMoney} from '../utils/Util';

const styles = StyleSheet.create({
    viewStyle:{
        marginVertical: 10,
        marginHorizontal: 20
      },
      titleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color:'#800080',
      },
      deliveryView:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
      },
      valueStyle:{
        color: '#008000'
      },
      methodTextStyle:{
        fontWeight: 'bold'
      },
      viewBorderStyle:{
        borderTopWidth:1,
        borderColor: "grey" 
      }
})

export default class InfoScreen extends Component {
    static navigationOptions = {
        title: 'Informações',          
        tabBarVisible:false
      };
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const restaurant = navigation.getParam('restaurant', {});
        this.state = {
          restaurant: restaurant
        };
    }
    componentDidMount() {
        }
     
  render() {
    const { restaurant } = this.state;
    const { paymentMethods,deliveryPrice, location } = this.state.restaurant;
    const paymentMethodView = paymentMethods.map( paymentMethod =>{
        return (
        <View>
            <Text style={styles.methodTextStyle}>{paymentMethod.method}</Text>
            {
                paymentMethod.options && paymentMethod.options.length > 0 && 
                paymentMethod.options.map( option =>{
                    return <Text> {option} </Text>
                })
            }
        </View>)
    })
    return (
      <Content>
        <ScrollView>
        <RestaurantCard restaurant={restaurant} inactive={true}/>
        <View style={[styles.deliveryView,styles.viewStyle]}>
            <Text style={styles.titleStyle}> Valor Da Entrega </Text>
            <Text style={styles.valueStyle}> {formatMoney(deliveryPrice)} </Text>
        </View>
        <View style={styles.viewBorderStyle}>
            <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Formas de pagamento</Text>
            {paymentMethodView}
            </View>
        
        </View>
        <View style={styles.viewBorderStyle}>
            <View style={styles.viewStyle}>
                <Text style={styles.titleStyle}>Localização</Text>
                <Text>{location}</Text>
            </View>
            
        </View>
        </ScrollView>
      </Content>
    );
  }
}