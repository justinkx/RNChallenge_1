import React from 'react';
import {View, StyleSheet,SafeAreaView, Text} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {flex: 1,
  justifyContent: 'center',
alignItems: 'center'},
});
