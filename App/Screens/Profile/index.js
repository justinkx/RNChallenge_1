import React from 'react';
import { View,SafeAreaView,StyleSheet, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Profile</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1,
  justifyContent: 'center',
alignItems: 'center'},
});