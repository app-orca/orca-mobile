import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Calendar, Donations, Home, Lost, Pet, Tips} from '../pages';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Pet" component={Pet} />
    <Stack.Screen name="Lost" component={Lost} />
    <Stack.Screen name="Tips" component={Tips} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Calendar" component={Calendar} />
    <Stack.Screen name="Donations" component={Donations} />
  </Stack.Navigator>
);

export default MainStackNavigator;
