import React from 'react';
import {Provider} from 'react-redux';
import {Root} from 'native-base';
import {MainNavigator} from './navigators';
import store from './store';


const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <MainNavigator />
      </Root>
    </Provider>
  );
};

export default App;
