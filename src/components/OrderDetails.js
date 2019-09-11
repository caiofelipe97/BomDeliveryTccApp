import React from 'react';
import {  StyleSheet } from 'react-native'
import { View, List, ListItem, Text, Card, CardItem, Icon } from 'native-base';
import {formatMoney} from '../utils/Util';

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'#800080',
    margin: 10,
    marginBottom:0
  },
  orderStyle:{
    flexDirection:'row',
    justifyContent: 'space-between',
    margin: 10
  },
  boxStyle:{
    flexDirection:'row',
    alignItems:'center'
  },
  nameStyle:{
    color:"black",
  },
  itemsStyle:{
    marginLeft: 10,
    flexDirection:'column'
  },
  valueStyle:{
    color: '#008000'
  },
  removeButton:{
      color:'#FF0000'
  },
  addButton:{
      color: '#008000'
  },
  cardStyle:{
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    flex:1,
    marginLeft:0,
    marginRight:0
  }
})


const OrderDetails = (props) =>
{
  const {orderDetails, handleMultipleChange} = props;
  const orderList = orderDetails.map( (order,i) =>
  (<ListItem  style={styles.orderStyle}>
    <View  style={styles.boxStyle}>
        <Icon  name="md-remove-circle" style={styles.removeButton} onPress={()=>{handleMultipleChange(i, 'minus')}}/>
        <Text> {order.amount}</Text>
        <Icon  name="md-add-circle" style={styles.addButton} onPress={()=>{handleMultipleChange(i, 'plus')}}/>
        <View style={styles.itemsStyle}>
            <Text style={styles.nameStyle}>{order.name} </Text>
            { order.productDetail.map((product,i)=>{
                return( i>0 && product.items.map(item => { return (<Text note>{item.name}</Text>)})
                )}
            )}
        </View>
    </View>
    { order.subtotal && order.amount && <Text style={styles.valueStyle}>{formatMoney(order.subtotal*order.amount)}</Text> }
  </ListItem>
  ));
	return(
        <Card>
          <CardItem style={styles.cardStyle}>
          <View style={{flex:1}}>
            <Text style={styles.titleStyle}>Detalhes do Pedido</Text>
            <List>
                {orderList}
            </List>
          </View>
          </CardItem>
        </Card>
	);
};

export default OrderDetails;