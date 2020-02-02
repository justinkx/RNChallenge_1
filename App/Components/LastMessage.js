import React, {PureComponent} from 'react';
import {Text,Image,TouchableOpacity, View, StyleSheet} from 'react-native';
import colors from '../Theme/colors';
export default class LastMessage extends PureComponent {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.messageContainer}>
        <Text style={styles.message}> Messages <Text style={styles.count}>6</Text> </Text>
        <View style={styles.messageBody}>
            <ImageAvatar />
            <View style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingLeft: 20,
                width: '80%'
            }}>
                <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: colors.text,
                    paddingBottom: 3
                }}>Olivia Johnson</Text>
                <Text style={{
                    color: 'gray',
                    fontSize: 11
                }}>Who's is going to gym tonight?</Text>
            </View>
            <View style={{
                width: 50,
                height: 18,
                borderRadius: 8,
                borderColor: colors.text,
                borderWidth: 0.5,
                backgroundColor: colors.homeBackground,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    color: 'gray',
                    fontSize: 9,
                    paddingHorizontal: 5
                }}>1.29 PM</Text>
            </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  messageContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 90,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: colors.homeBackground,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  message: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
  },
  messageBody: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
  },
  count: {
      color: colors.badge,
      paddingLeft: 4
  },
  image: {
      width: 30,
      height: 30,
      borderRadius: 15,
      resizeMode: 'cover'
  },
  badge: {
      width: 15,
      height: 15,
      borderRadius: 7.5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.badge,
      position: 'absolute',
      left: 20
  },
  alert: {
      fontSize: 8,
      color: 'white'
  }
});
const ImageAvatar = ({}) => {
    return (
        <View style={{
            flexDirection: 'row',
            position: 'relative'
        }}>
            <Image style={styles.image} source={{uri: 'https://randomuser.me/api/portraits/men/35.jpg'}} />
            <View style={styles.badge}>
                <Text style={styles.alert}>3</Text>
            </View>
        </View>
    )
}