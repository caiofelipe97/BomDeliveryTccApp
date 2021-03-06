import React from 'react';
import {Icon} from 'native-base';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import InfoScreen from '../screens/InfoScreen';
import ItemPurchaseScreen from '../screens/ItemPurchaseScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetails from '../screens/OrderDetailsScreen';
import CartScreen from '../screens/CartScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import PaymentScreen from '../screens/PaymentScreen';

const ExploreStack = createStackNavigator(
  {
    Home: MainScreen,
    Restaurant: RestaurantScreen,
    Info: InfoScreen,
    ItemPurchase: ItemPurchaseScreen,
    Cart: CartScreen,
    Delivery: DeliveryScreen,
    Payment: PaymentScreen,
  },
  {
    initialRouteKey: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#800080',
      },
      headerTintColor: '#FFFF00',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignContent: 'center',
      },
    },
  },
);
ExploreStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const OrdersStack = createStackNavigator(
  {
    Orders: OrdersScreen,
    OrderDetails: OrderDetails,
  },
  {
    initialRouteKey: 'Orders',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#800080',
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
        elevation: 0,
        shadowOpacity: 0,
        height: 45,
      },
      headerTintColor: '#FFFF00',
      headerTitleStyle: {
        fontWeight: 'bold',
        marginTop: 10,
      },
    },
  },
);

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    initialRouteKey: 'Profile',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#800080',
      },
      headerTintColor: '#FFFF00',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createBottomTabNavigator(
  {
    Home: {
      screen: ExploreStack,
      navigationOptions: {
        tabBarLabel: 'Inicio',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" style={{color: tintColor}} size={24} />
        ),
      },
    },
    Orders: {
      screen: OrdersStack,
      navigationOptions: {
        tabBarLabel: 'Pedidos',
        tabBarIcon: ({tintColor}) => (
          <Icon name="paper" style={{color: tintColor}} size={24} />
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'Perfil',
        tabBarIcon: ({tintColor}) => (
          <Icon name="person" style={{color: tintColor}} size={24} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    order: ['Home', 'Orders', 'Profile'],
    tabBarOptions: {
      activeTintColor: '#800080',
      inactiveTintColor: 'gray',
    },
  },
);
