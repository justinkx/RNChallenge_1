import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from './tabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigator}></Drawer.Screen>
    </Drawer.Navigator>
)