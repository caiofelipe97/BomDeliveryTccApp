import React from 'react';
import {  StyleSheet } from 'react-native'
import { View, List, ListItem, Text, Card, CardItem } from 'native-base';

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'#800080',
    margin: 10,
    marginLeft: 20,
    marginBottom:0
  }
})


const PaymentDetails = (props) =>
{

	return(
        <Card>
          <CardItem>
          <View>
            <Text style={styles.titleStyle}>Pagamento</Text>
            <Text>Total do pedido</Text>
          </View>
          </CardItem>
        </Card>
	);
};

export default PaymentDetails;