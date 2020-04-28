import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {MainStackNavigator} from './navigators';

const OrcaTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fbfbfb',
  },
};

const App = () => (
  <NavigationContainer theme={OrcaTheme}>
    <MainStackNavigator />
  </NavigationContainer>
);

export default App;
