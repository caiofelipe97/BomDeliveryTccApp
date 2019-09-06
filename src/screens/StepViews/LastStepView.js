import React from 'react';
import {  StyleSheet } from 'react-native'
import { View, List, ListItem, Text, Button,Icon, Input } from 'native-base';
import {formatMoney} from '../../utils/Util';

const styles = StyleSheet.create({
  viewStyle:{
    marginHorizontal: 20,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'#800080',
    marginTop: 10,
  },
  valueStyle:{
    color: '#008000'
  },
  subtotalView:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginVertical:10
  },
  subtotalTextStyle:{
    fontWeight: 'bold'
  },
  itemStyle:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  itemTitleStyle:{
    fontWeight:'bold'
  }
})


const LastStepView = (props) =>
{
  const {title,productDetail,subtotal} = props;
  const productDetailList = productDetail.map( detail =>
  { if(detail.items.length > 0){
    return (<View>
    <Text style={styles.itemTitleStyle}>{detail.title}</Text>
    {detail.items.map(item => (
      <View style={styles.itemStyle}>
        <Text note>{item.name} </Text>
        { item.value && <Text style={styles.valueStyle}>+{formatMoney(item.value)}</Text> }
        { item.additional && <Text style={styles.valueStyle}>+{formatMoney(item.additional)}</Text>}
      </View>))}
    </View>   )
  }
      
  });
  

	return(
  <View style={styles.viewStyle}>
	<Text style={styles.titleStyle}>{title}</Text>
  {productDetailList}
  <View style={styles.subtotalView}>
    <Text style={styles.subtotalTextStyle}>Subtotal: </Text>
    <Text  style={styles.valueStyle}> {formatMoney(subtotal)}</Text>
  </View>
  <Text style={styles.titleStyle}>Observações</Text>
  <Input placeholder="Escreva aqui suas observações do produto"/>
  </View>
	);
};

export default LastStepView;