import React from 'react';
import {StyleSheet} from 'react-native';
import {View, ListItem, Text} from 'native-base';
import {StackActions} from 'react-navigation';

const styles = StyleSheet.create({
  viewFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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

  const {name, description, value} = props.food;
  const {inactive} = props;

  if (!inactive) {
    return (
      <ListItem
        button
        onPress={() => {
          props.navigation.dispatch(pushAction);
        }}>
        <View>
          <Text style={styles.nameStyle}>{name}</Text>
          <Text style={styles.descriptionStyle}>{description}</Text>
          <Text style={styles.valueStyle}>A partir de R${value}</Text>
        </View>
      </ListItem>
    );
  } else {
    return (
      <ListItem>
        <View>
          <Text style={styles.nameInactiveStyle}>{name}</Text>
          <Text style={styles.descriptionStyle}>{description}</Text>
          <Text style={styles.valueStyle}>A partir de R${value}</Text>
        </View>
      </ListItem>
    );
  }
};

export default FoodCard;
