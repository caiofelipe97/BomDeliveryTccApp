import React from 'react';
import {StyleSheet} from 'react-native';
import {View, ListItem, Text, Thumbnail} from 'native-base';
import {StackActions} from 'react-navigation';
import {formatMoney} from '../utils/Util'

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 18,
  },
  nameInactiveStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#800080',
  },
  descriptionStyle: {
    color: '#808080',
  },
  valueStyle: {
    color: '#008000',
  },
  viewStyle:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

const FoodCard = props => {
  const pushAction = StackActions.push({
    routeName: 'ItemPurchase',
    params: {
      item: props.food,
      restaurant: props.restaurant,
      cart: props.cart,
    },
  });

  const {name, description, value, img} = props.food;
  const {inactive} = props;

  if (!inactive) {
    return (
      <ListItem
        button
        onPress={() => {
          props.navigation.dispatch(pushAction);
        }}>
        <View style={styles.viewStyle}>
          <View>
            <Text style={styles.nameStyle}>{name}</Text>
            <Text style={styles.descriptionStyle}>{description}</Text>
            <Text style={styles.valueStyle}>A partir de {formatMoney(value)}</Text>
          </View>
          <Thumbnail square source={{uri: img}} />
        </View>
      </ListItem>
    );
  } else {
    return (
      <ListItem>       
       <View style={styles.viewStyle}>
          <View>
            <Text style={styles.nameInactiveStyle}>{name}</Text>
            <Text style={styles.descriptionStyle}>{description}</Text>
            <Text style={styles.valueStyle}>A partir de R${value}</Text>
          </View>
        <Thumbnail square source={{uri: img}} />
        </View>
      </ListItem>
    );
  }
};

export default FoodCard;
