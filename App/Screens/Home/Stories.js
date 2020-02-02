import React from 'react';
import {View, Image,TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import colors, {getRandomColor} from '../../Theme/colors';
import { useNavigation } from '@react-navigation/native';

export default function StoriesSwiper({stories}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingLeft: 20}}
       showsHorizontalScrollIndicator={false} horizontal={true}>
        {stories.map((story, index) => (
          <View
            key={index}
            style={[
              styles.avatarContainer,
              {
                justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
              },
            ]}>
            <TouchableOpacity
            onPress={()=> navigation.navigate('Stories',{story: story})}
              style={[
                styles.avatar,
                {
                  borderColor: getRandomColor(),
                },
              ]}>
              <Image style={styles.image} source={{uri: story.image}} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 120,
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
