import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(SwitchNavigator);
