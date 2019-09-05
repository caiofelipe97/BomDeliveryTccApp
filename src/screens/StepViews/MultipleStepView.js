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
  descriptionStyle:{
    marginLeft: 20
  },
  optionStyle:{
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
    marginLeft: 10
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
  subtotalView:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  subtotalTextStyle:{
    fontWeight: 'bold'
  }
})


const MultipleStepView = (props) =>
{
  const {title, options, min, max } = props.viewProps;
  const { choiced, handleMultipleChange, subtotal} = props;
console.log(options)
  const optionsList = options.map( (option,i) =>
  (<ListItem  style={styles.optionStyle}>
    <View  style={styles.boxStyle}>
        <Icon  name="md-remove-circle" style={styles.removeButton} onPress={()=>{handleMultipleChange(i, 'minus')}} />
        <Text> {choiced[i]}</Text>
        <Icon  name="md-add-circle" style={styles.addButton} onPress={()=>{handleMultipleChange(i, 'plus')}}/>
      <Text style={styles.nameStyle}>{option.name} </Text>
    </View>
    { option.value && <Text style={styles.valueStyle}>{formatMoney(option.value)}</Text> }
    { option.additional && <Text style={styles.valueStyle}>+{formatMoney(option.additional)}</Text>}
  </ListItem>
  ));
	return(
  <View>
	<Text style={styles.titleStyle}>{title}</Text>
    <Text note style={styles.descriptionStyle}> Mínimo: {min} Máximo: {max}</Text>
    <List>
      {optionsList}
    </List>
    <View style={styles.subtotalView}>
          <Text style={styles.subtotalTextStyle}>Subtotal: </Text>
          <Text style={styles.valueStyle}> {formatMoney(subtotal)}</Text>
    </View>
  </View>
	);
};

export default MultipleStepView;