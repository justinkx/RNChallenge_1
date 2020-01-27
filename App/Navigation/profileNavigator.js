import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../Screens/Profile/index';
const Stack = createStackNavigator();
export const ProfileNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
  </Stack.Navigator>
);
