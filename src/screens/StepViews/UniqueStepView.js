import React from 'react';
import {  StyleSheet } from 'react-native'
import { View, List, ListItem, Text, Radio } from 'native-base';
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
    flexDirection:'row'
  },
  nameStyle:{
    color:"black",
    marginLeft: 10
  },
  valueStyle:{
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


const UniqueStepView = (props) =>
{
  const {title, options, min, max} = props.viewProps;
  const { choiced, handleUniqueChange, isFirstView, subtotal } = props;

  const optionsList = options.map( (option,i) =>
  (<ListItem  style={styles.optionStyle}  onPress={() => handleUniqueChange(i)}>
    <View  style={styles.boxStyle}>
      <Radio value={i} selected={choiced == i}/>
      <Text style={styles.nameStyle}>{option.name} </Text>
    </View>
      { option.value && <Text style={styles.valueStyle}>{formatMoney(option.value)}</Text> }
      { option.additional && <Text style={styles.valueStyle}>+{formatMoney(option.additional)}</Text>}
  </ListItem>
  ));
	return(
  <View>
		<Text style={styles.titleStyle}>{title}</Text>
    { !isFirstView &&
      <Text note style={styles.descriptionStyle}> Mínimo: {min} Máximo: {max}</Text>
    }
    <List>
      {optionsList}
    </List>
    { !isFirstView && 
      <View style={styles.subtotalView}>
          <Text style={styles.subtotalTextStyle}>Subtotal: </Text>
          <Text  style={styles.valueStyle}> {formatMoney(subtotal)}</Text>
      </View>
    } 
  </View>
	);
};

export default UniqueStepView;