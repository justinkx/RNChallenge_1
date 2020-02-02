import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import global from '../../Theme/global';
import colors from '../../Theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import StoryContent from './StoryContent';

export default function StoriesScreen({}) {
  const navigation = useNavigation();
  const route = useRoute();
  const story = route.params.story;
  return (
    <SafeAreaView style={[global.safeArea, styles.container]}>
      <ImageBackground
        style={styles.header}
        source={{
          uri: story.bg,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}>
          <Icon name="md-arrow-back" color={'black'} size={22} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            paddingVertical: 20,
            paddingRight: 15,
          }}>
          <StoryContent story={story} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  header: {
    height: 250,
  },
  backButton: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius:  17.5,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    flexGrow: 1,
    borderTopLeftRadius: 35,
    paddingLeft: 25,
    position: 'absolute',
    backgroundColor: colors.homeBackground,
    top: 240,
    bottom: 0,
    borderTopRightRadius: 35,
  },
});
