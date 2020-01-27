import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/Home/index';
const Stack = createStackNavigator();
export const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Profile" component={HomeScreen}></Stack.Screen>
  </Stack.Navigator>
);
