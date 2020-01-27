import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import global from '../../Theme/global';
import colors from '../../Theme/colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={[global.safeArea, styles.container]}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
