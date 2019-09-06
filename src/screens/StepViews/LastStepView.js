import React from 'react';
import {  StyleSheet } from 'react-native'
import { View, List, ListItem, Text, Button,Icon } from 'native-base';
import {formatMoney} from '../../utils/Util';

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'#800080',
    margin: 10,
    marginLeft: 20,
    marginBottom:0
  },
  valueStyle:{
    color: '#008000'
  },
  subtotalView:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical:10
  },
  subtotalTextStyle:{
    fontWeight: 'bold'
  }
})


const LastStepView = (props) =>
{
  const {title,productDetail,subtotal} = props;
	return(
  <View>
	<Text style={styles.titleStyle}>{title}</Text>
  <View style={styles.subtotalView}>
          <Text style={styles.subtotalTextStyle}>Subtotal: </Text>
          <Text  style={styles.valueStyle}> {formatMoney(subtotal)}</Text>
      </View>
  </View>
	);
};

export default LastStepView;