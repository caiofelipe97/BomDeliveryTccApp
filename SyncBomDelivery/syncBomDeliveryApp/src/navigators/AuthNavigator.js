import {createStackNavigator} from 'react-navigation';
import {LoginScreen} from '../screens';

export default createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerTransparent: true,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);
