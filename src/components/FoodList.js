import React from 'react';
import {  StyleSheet } from 'react-native'
import { View, ListItem, Text } from 'native-base';
import FoodCard from './FoodCard';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})


const FoodList = (props) =>
{
  const {title, foods, restaurant} = props;
  const foodList = foods.map( (food,i)=>(<FoodCard key={i} food={food}  navigation={props.navigation} restaurant={restaurant} />));

	return(
  <View>
		<ListItem itemDivider>
          <Text style={styles.titleStyle}>{title}</Text>
    </ListItem>
    {foodList}
  </View>
	);
};

export default FoodList;