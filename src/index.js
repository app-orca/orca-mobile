import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './navigators';

const App = () => (
  <NavigationContainer>
    <MainStackNavigator />
  </NavigationContainer>
);

export default App;
