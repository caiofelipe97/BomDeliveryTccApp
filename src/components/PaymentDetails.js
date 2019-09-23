import React from 'react';
import {  StyleSheet } from 'react-native'
import { View, Text, Card, CardItem } from 'native-base';
import {formatMoney} from '../utils/Util';

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'#800080',
    margin: 10,
    marginBottom:0
  },
  textBoxStyle:{
    flexDirection:'row',
    justifyContent: 'space-between',
    margin: 10
  },
  totalTextStyle:{
    fontWeight: 'bold'
  },
  valueStyle:{
    color: '#008000'
  },
})


const PaymentDetails = (props) =>
{
  const { deliveryPrice, orderSubtotal } = props;
  const orderTotal = deliveryPrice + orderSubtotal;
	return(
        <Card>
          <CardItem>
              <View  style={{flex:1}}>
                <Text style={styles.titleStyle}>Pagamento</Text>
                <View style={styles.textBoxStyle}>
                  <Text>Subtotal do pedido</Text>
                  <Text style={styles.valueStyle}>{formatMoney(orderSubtotal)}</Text>
                </View>
                <View style={styles.textBoxStyle}>
                  <Text>Taxa de entrega</Text>
                  <Text style={styles.valueStyle}>{formatMoney(deliveryPrice)}</Text>
                </View>
                <View style={styles.textBoxStyle}>
                  <Text style={styles.totalTextStyle}>Total do pedido</Text>
                  <Text style={[styles.valueStyle,styles.totalTextStyle]}>{formatMoney(orderTotal)}</Text>
                </View>
            </View>
          </CardItem>
        </Card>
	);
};

export default PaymentDetails;