import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function MessageBubble({message}) {
  return (
   <View style={styles.bubble}>
       <Text style={{color: 'white'}} >{message.message}</Text>
   </View>
  );
}
const styles = StyleSheet.create({
    bubble: {
        padding: 10,
        backgroundColor: 'gray',
        maxWidth: '70%',
        alignSelf: 'baseline',
        
        flex: 1,
        alignSelf: 'auto',
        marginBottom: 30,
        borderRadius: 6
    }
})