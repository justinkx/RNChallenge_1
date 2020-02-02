import React from 'react';
import {View,Image, Text, StyleSheet} from 'react-native';
import colors from '../../Theme/colors';


export default function MessageBubble({message, bg}) {

  return (
    <View
      style={[
        styles.bubble,
        {justifyContent: message.name === 'You' ? 'flex-end' : 'flex-start'},
      ]}>
       {message.name !== 'You' && <Image style={styles.image} source={{uri: message.image}} />}
      <View
        style={[
          styles.bubbleView,
          {
            backgroundColor: message.name === 'You' ? 'white' : bg,
          },
        ]}>
        <Text style={{color: message.name === 'You' ? 'black' : 'white'}}>
          {message.message}
        </Text>
        <View
          style={{
            width: '100%',
            paddingTop: 10,
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: message.name === 'You' ? colors.text : 'white',
            }}>
            {message.time}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
    alignSelf: 'auto',
    marginBottom: 25,
    marginTop: 10,
  },
  bubbleView: {
    alignSelf: 'baseline',
    padding: 10,
    borderRadius: 6,
    maxWidth: '60%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 20,
    marginRight: 20
  }
});
