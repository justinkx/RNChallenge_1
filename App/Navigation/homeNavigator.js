import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/Home/index';
import GroupsScreen from '../Screens/Groups/index';

const Stack = createStackNavigator();
export const HomeNavigator = ({navigation,route}) => {
  if(route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false: true
    });
  }
  return(
  <Stack.Navigator headerMode="none" screenOptions={{
    gestureEnabled: true,
    gestureDirection: 'horizontal'
  }}>
    <Stack.Screen name="Profile" component={HomeScreen}></Stack.Screen>
    <Stack.Screen name="Groups" component={GroupsScreen}></Stack.Screen>
  </Stack.Navigator>
)};
