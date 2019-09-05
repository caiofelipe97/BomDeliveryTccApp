import React from 'react';
import {  StyleSheet } from 'react-native'
import { Card, CardItem, Body, Text,Left, Thumbnail, Icon, View } from 'native-base';
import { StackActions } from 'react-navigation';

const styles = StyleSheet.create({
  viewFlex: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})

const RestaurantCard = (props) =>
{
  const pushAction = StackActions.push({
    routeName: 'Restaurant',
    params: {
      restaurant: props.restaurant
    },
  });
    const {name, foods, img, timeToDelivery} = props.restaurant
    const { inactive } = props;
    let options = foods.join(", ")
	return(
		<Card>
          <CardItem button={!inactive} onPress={() =>
          {
            if(!inactive) props.navigation.dispatch(pushAction)
          }}>
            <Left>
              <Thumbnail square source={img} />
              <Body>
                <Text>{name}</Text>
                    <Text note >{options}</Text>
                    <View style={styles.viewFlex}>
                      <Icon style={{color: '#708090', marginRight:5}} name="time"/>
                      <Text note>{timeToDelivery}</Text>
                    </View>
              </Body>
            </Left>
          </CardItem>
        </Card>
	);
};

export default RestaurantCard;