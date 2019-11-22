import React from 'react';
import {Content, Text, Button, Icon, View, Card} from 'native-base';
import {StyleSheet, ScrollView } from 'react-native';
import OrderCard from '../components/OrderCard';

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: '#E8EAF6',
    flexGrow: 1
  },
  emptyViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTextStyle: {
    color: '#757575',
  },
});

const ReceivedScreen = ({navigation}) => {
  const orders = [
    /*
    {
      
      cart: [
        {
          name: 'Açai 500ml',
          description: 'Açai na tigela 500ml',
          value: 15.0,
          count: 1,
        },
        {
          name: 'Água 500ml',
          description: 'Açai na tigela 500ml',
          value: 2.0,
          count: 1,
        },
      ],
      date: new Date(2019, 10, 10, 21, 48, 11, 0),
      client: {
        name: 'Caio Felipe',
        avatar_url: 'https://scontent.fcpv7-1.fna.fbcdn.net/v/t1.0-9/42235727_1935246599926971_4459304010444177408_n.jpg?_nc_cat=101&_nc_oc=AQlTkJ1_QPg1AudwnxYWxyGNYWE_Hv14063tByU28uWZoLAxk41yzyID7zNPQqZ3U8XXiSVIOFtCoLkY4LpdZvgn&_nc_ht=scontent.fcpv7-1.fna&oh=72fe9fc841176cfe8cceb320fde2447b&oe=5E5B8DFE'
      },
      code: 5961,
      status: 1,
      values: {
        subtotal: 15.00,
        delivery: 7.0,
        total: 22.00,
      },
      address: 'Rua Agamenon Magalhaes, 230 - Centro, Alagoa Nova - Paraiba, CEP: 58400-137',
      paymentMethod: 'Dinheiro',
    },
    {
      cart: [
        {
          name: 'Arraia',
          description: 'Pão bola, frango desfiado, catupiry, bacon crocante, tomate, alface, milho e molho especial.',
          value: 18.0,
          count: 2,
        },
        {
          name: 'Refrigerante lata',
          description: 'Açai na tigela 500ml',
          value: 3.0,
          count: 1,
        },
      ],
      date: new Date(2019, 10, 10, 21, 45, 11, 0),
      client: {
        name: 'Fulano das Neves',
        avatar_url: 'https://elaele.com.br/img/anonimo.png'
      },
      code: 2351,
      status: 1,
      values: {
        subtotal: 51.00,
        delivery: 0,
        total: 51.00,
      },
      address: 'Av. Pref. Severino Bezerra Cabral, 1200 - loja 106 - Catolé, Campina Grande - PB, 58104-170',
      paymentMethod: 'MasterCard - Crédito',
    },
    
    {
      cart: [
        {
          name: 'Arraia',
          description: 'Pão bola, frango desfiado, catupiry, bacon crocante, tomate, alface, milho e molho especial.',
          value: 18.9,
          count: 2,
        },
        {
          name: 'Açai 500ml',
          description: 'Açai na tigela 500ml',
          value: 15.0,
          count: 1,
        },
      ],
      date: new Date(2019, 10, 10, 21, 30, 11, 0),
      client: {
        name: 'Francisco da Silva',
        avatar_url: 'https://scontent.fcpv7-1.fna.fbcdn.net/v/t1.0-9/37397721_10204590994612374_5701976862519984128_n.jpg?_nc_cat=103&_nc_oc=AQnBqQtBLeQAIe4GCo3OU-KY5pAVSUPAnIpefe0-JBEFBkuEewGzqvmKbkj50WWxMBZgjzwLWZWOcpl9rf1ZVqil&_nc_ht=scontent.fcpv7-1.fna&oh=f52b055012f6ecf36df4208773757913&oe=5E43B2C5'
      },
      code: 3958,
      status: 'ready',
      values: {
        subtotal: 51.90,
        delivery: 5,
        total: 56.9,
      },
      address: 'Rua Luiza Bezerra Motta, 720 - Centro, Alagoa Nova - Paraiba, CEP: 58410-410, Referencia: Em frente ao antigo sitio sao joao',
      paymentMethod: 'MasterCard - Crédito',
    },
    */
  ];
  const receivedOrders = receivedOrders => {
    console.log(orders);
    return receivedOrders.map((order, index) => (
      <OrderCard key={index} order={order} navigation={navigation} />
    ));
  };

  return (
    <Content scrollEnabled contentContainerStyle={styles.contentStyle}>
      {
        orders.length == 0 ? 
        <View style={styles.emptyViewStyle}>
        <Text style={styles.emptyTextStyle}>Não há pedidos</Text>
        </View>
        :
        <ScrollView>
          {receivedOrders(orders)}
        </ScrollView>

      }
    </Content>
  );
};

ReceivedScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Pedidos Recebidos',
    headerLeft: (
      <Button transparent>
        <Icon style={{color: '#FFCA73'}} name="md-menu" />
      </Button>
    ),
  };
};

export default ReceivedScreen;
