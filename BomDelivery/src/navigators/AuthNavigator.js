import {createStackNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

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
    headerMode: 'float',
    initialRouteName: 'Login',
  },
);
