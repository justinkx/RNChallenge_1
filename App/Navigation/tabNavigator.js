import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Octicons from 'react-native-vector-icons/Octicons';
import { ProfileNavigator } from './profileNavigator';
import { HomeNavigator } from './homeNavigator';
import Feather from 'react-native-vector-icons/Feather'
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export const TabNavigator = () => (
  // @ts-ignore: `tabBar` also contains a DrawerNavigationProp
  <BottomTab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName ='home';
          return <Octicons name={iconName} size={size} color={color} />
        } else if (route.name === 'Profile') {
          iconName = 'user';
        }

        // You can return any component that you like here!
        return <Feather name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#615c97',
      inactiveTintColor: '#adacac',
    }}>
    <BottomTab.Screen name={'Home'} component={HomeNavigator} />
    <BottomTab.Screen name={'Profile'} component={ProfileNavigator} />
  </BottomTab.Navigator>
);
