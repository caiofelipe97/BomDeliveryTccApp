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
import {formatMoney, formatTime} from '../utils/Util';
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
    color: 'white',
    fontWeight: 'bold',
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

const OrderCard = props => {
  const {client, cart, date, code, status, values} = props.order;
  const {name, avatar_url} = client;
  const {navigation} = props;

  const cartList = cart.map(item => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{width:20, height:20, borderWidth:1, alignItems: 'center', justifyContent: 'center', borderColor:'#D3D3D3'}}>
        <Text note>{item.count}</Text>

        </View>
        <Text note style={{marginLeft:10}}>{item.name}</Text>
      </View>
    );
  });
  let statusText = ""
  let statusColorText = "black"
  let negativeText = ""
  let confirmText = ""
  switch(status){
    case 1:
      statusText = "Recebido";
      statusColorText = "red";
      negativeText = "Recusar";
      confirmText = "Aceitar";
      break;
    case 2:
      statusText = "Em Andamento";
      statusColorText = "blue";
      negativeText = "Cancelar";
      confirmText = "Marcar como Pronto";
      break;
    case 3:
      statusText = "Pronto";
      statusColorText = "green";
      negativeText = "Cancelar";
      confirmText = "Finalizar Pedido";
      break;
    default:
      break
  }

  return (
    <Card>
      <CardItem bordered>
        <View style={{marginHorizontal: 10}}>
          <Thumbnail size={200} source={{uri: avatar_url}} />
        </View>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <View>
            <Text>
              {name} ● {code}
            </Text>
            <Text style={{color: statusColorText}}>
              {statusText}
            </Text>
          </View>
          <Text note>Pedido recebido ás {formatTime(date)}</Text>
        </View>
      </CardItem>
      <CardItem bordered>
        <View style={{flexDirection: 'column'}}>{cartList}</View>
      </CardItem>
      <CardItem bordered>
      <View style={styles.buttonsView}>
              <Button danger onPress={() => {}}>
                <Text style={styles.textButtomStyle}>{negativeText}</Text>
              </Button>
              <Button success>
                <Text style={styles.textButtomStyle}>{confirmText}</Text>
              </Button>
            </View>
      </CardItem>
    </Card>
  );
};

export default OrderCard;
