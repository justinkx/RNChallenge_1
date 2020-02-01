import React, {PureComponent} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './SliderEntry.style';
import {getRandomColor} from '../../../Theme/colors';

export default class SliderEntry extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const {
      data: {title, lastMessage},
    } = this.props;

    return (
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Groups',{
        data: this.props.data
      })} activeOpacity={1} style={styles.slideInnerContainer}>
        <View
          style={[styles.imageContainer, {backgroundColor: getRandomColor()}]}>
          <View style={styles.titleContainer}>
            <View style={styles.titleView}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.badgeView}>
              <View style={styles.badge}>
                <Text style={styles.count}>{lastMessage.count}</Text>
              </View>
            </View>
          </View>
          <View style={styles.lastMessage}>
            <View style={styles.messageContainer}>
              <Image
                source={{uri: lastMessage.image}}
                style={styles.lastUser}
              />
              <Text style={styles.message}>{lastMessage.message}</Text>
            </View>
            <View style={styles.usersContainer}>
                <View style={styles.usersView}>
                    {
                        lastMessage.replies.map((reply,index)=>(
                            <Image style={styles.replyImage} key={index} source={{uri: reply}}/>
                        ))
                    }
                </View>
                <View style={styles.timeView}>
                <Text style={styles.time}>{lastMessage.time}</Text>
                </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
