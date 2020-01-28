import React from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';
import colors, {getRandomColor} from '../../Theme/colors';

export default function StoriesSwiper({stories}) {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {stories.map((story, index) => (
          <View
            key={index}
            style={[
              styles.avatarContainer,
              {
                justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
              },
            ]}>
            <View
              style={[
                styles.avatar,
                {
                  borderColor: getRandomColor(),
                },
              ]}>
              <Image style={styles.image} source={{uri: story.image}} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 120,
    paddingLeft: 20,
    marginTop: 15,
  },
  image: {
    width: 62,
    height: 62,
    resizeMode: 'contain',
    borderRadius: 31,
  },
  avatarContainer: {
    width: 80,
    height: 120,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  avatar: {
    width: 71,
    height: 71,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35.5,
    borderWidth: 2,
  },
});
