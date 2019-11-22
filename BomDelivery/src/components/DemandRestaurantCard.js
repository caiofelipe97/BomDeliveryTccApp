import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Thumbnail,
  Icon,
  View,
} from 'native-base';
import {StackActions} from 'react-navigation';
import {formatMoney} from '../utils/Util';

const styles = StyleSheet.create({
  viewFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueStyle: {
    color: '#008000',
    fontSize: 14,
  },
});

const DemandRestaurantCard = props => {
  const pushAction = StackActions.push({
    routeName: 'Restaurant',
    params: {
      restaurant: props.restaurant,
    },
  });
  const {name, foods, img, rating} = props.restaurant;
  let options = foods.join(', ');
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail square source={img} />
          <Body>
            <Text>{name}</Text>
            <View style={styles.viewFlex}>
              <Icon
                fontSize={5}
                style={{color: '#DAA520', marginRight: 5, fontSize: 20}}
                name="star"
              />
              <Text style={{color: '#DAA520'}}>{rating.toFixed(1)} </Text>
              <Text note>● {options}</Text>
            </View>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

export default DemandRestaurantCard;
