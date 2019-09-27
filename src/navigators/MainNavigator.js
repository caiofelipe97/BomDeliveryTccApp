import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import AppNavigator from './AppNavigator';

const SwitchNavigator = createSwitchNavigator(
  {
    App: AppNavigator,
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(SwitchNavigator);
