import React from 'react';
import {Icon} from 'native-base';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import ReceivedScreen from '../screens/ReceivedScreen';
import InProgressScreen from '../screens/InProgressScreen';
import ReadyScreen from '../screens/ReadyScreen';

const ReceivedStack = createStackNavigator(
  {
    Received: ReceivedScreen,
  },
  {
    initialRouteKey: 'Received',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#6F1BB3',
      },
      headerTintColor: '#FFCA73',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignContent: 'center',
        marginLeft:0
      },
    },
  },
);

const InProgressStack = createStackNavigator(
  {
    InProgress: InProgressScreen,
  },
  {
    initialRouteKey: 'InProgress',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#6F1BB3',
      },
      headerTintColor: '#FFCA73',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignContent: 'center',
        marginLeft:0
      },
    },
  },
);

const ReadyStack = createStackNavigator(
  {
    Ready: ReadyScreen,
  },
  {
    initialRouteKey: 'Ready',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#6F1BB3',
      },
      headerTintColor: '#FFCA73',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignContent: 'center',
        marginLeft:0
      },
    },
  },
);

export default createBottomTabNavigator(
  {
    Received: {
      screen: ReceivedStack,
      navigationOptions: {
        tabBarLabel: 'Recebidos',
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-archive" style={{color: tintColor}} size={24} />
        ),
      }
    },
    InProgress: {
      screen: InProgressStack,
      navigationOptions: {
        tabBarLabel: 'Em Andamento',
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-time" style={{color: tintColor}} size={24} />
        ),
      },
    },
    Ready: {
      screen: ReadyStack,
      navigationOptions: {
        tabBarLabel: 'Prontos',
        tabBarIcon: ({tintColor}) => (
          <Icon name="md-checkmark" style={{color: tintColor}} size={24} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Received',
    order: ['Received', 'InProgress', 'Ready'],
    tabBarOptions: {
      activeTintColor: '#6F1BB3',
      inactiveTintColor: '#757575',
      labelStyle: {
        fontWeight: 'bold'
      },
    },
  },
);
