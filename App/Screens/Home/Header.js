import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.HeaderContainer}>
        {props.children}
    </View>
  );
}

const styles=StyleSheet.create({
    HeaderContainer: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})