

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { DrawerNavigation } from './App/Navigation/drawerNavigator';
import { NavigationNativeContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationNativeContainer>
      <DrawerNavigation/>
    </NavigationNativeContainer>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
