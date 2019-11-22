import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Thumbnail,
  View,
  List,
  ListItem,
  Button,
} from 'native-base';
import {formatMoney, formatDate} from '../utils/Util';
import {StackActions} from 'react-navigation';

const styles = StyleSheet.create({
  viewFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueStyle: {
    color: '#008000',
    fontSize: 14,
  },
  textButtomStyle: {
    color: '#800080',
    fontWeight: 'bold',
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  cardStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
  },
});

const OrderCard = props => {
  const {restaurant, date, code, values} = props.order;
  const {img, name} = restaurant;
  const {navigation} = props;
  const pushAction = StackActions.push({
    routeName: 'OrderDetails',
    params: {
      order: props.order,
    },
  });
  return (
    <Card>
      <CardItem style={styles.cardStyle}>
        <List style={{flex: 1}}>
          <ListItem style={{flex: 1, marginLeft: 10}} onPress={() => {
                  navigation.dispatch(pushAction);
                }}>
            <Left>
              <Thumbnail square source={img} />
              <Body>
                <Text>
                  {name} ● ({code})
                </Text>
                <View style={styles.viewFlex}>
                  <Text note>{formatDate(date)}</Text>
                </View>
                <View style={styles.viewFlex}>
                  <Text style={styles.valueStyle}>
                    {formatMoney(values.total)}
                  </Text>
                </View>
              </Body>
            </Left>
          </ListItem>
          <ListItem style={{flex: 1, width: '100%', height: 50}}>
            <View style={styles.buttonsView}>
              <Button transparent onPress={() => {}}>
                <Text style={styles.textButtomStyle}>Avaliar</Text>
              </Button>
              <Button
                transparent
                onPress={() => {
                  navigation.dispatch(pushAction);
                }}>
                <Text style={styles.textButtomStyle}>Detalhes</Text>
              </Button>
            </View>
          </ListItem>
        </List>
      </CardItem>
    </Card>
  );
};

export default OrderCard;
