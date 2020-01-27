import React from 'react';
import { View,SafeAreaView,StyleSheet, Text } from 'react-native';
import global from '../../Theme/global';
import colors from '../../Theme/colors';
export default function ProfileScreen() {
  return (
    <SafeAreaView style={[global.safeArea, styles.container]}>
        <Text>Profile</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1,
  justifyContent: 'center',
alignItems: 'center'},
});