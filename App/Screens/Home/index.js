import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  View
} from 'react-native';
import global from '../../Theme/global';
import colors from '../../Theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../Components/SearchBar';
import Header from './Header';
import {stories} from '../../Apis/stories';
import StoriesSwiper from './Stories';
import GroupCarousel from './carousel/Groups';
import { groups } from '../../Apis/groups';

export default function HomeScreen() {
  return (
    <SafeAreaView style={[global.safeArea, styles.container]}>
      <Header>
        <SearchBar />
        <TouchableOpacity style={styles.plusButton}>
          <Icon size={28} name="ios-add" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.plusButton}>
          <Icon size={28} name="ios-reorder" />
        </TouchableOpacity>
      </Header>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Text style={[styles.stories, styles.groups]}>Stories</Text>
        <StoriesSwiper stories={stories} />
        <View style={styles.groupContainer}>
          <Text style={styles.groups}>Groups</Text>
          <Text style={styles.groupCount}>4</Text>
        </View>
        <GroupCarousel groups={groups} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  plusButton: {
    width: 25,
    padding: 5,
    height: 40,
    marginLeft: 15,
  },
  groups: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
  },
  stories: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  groupContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  groupCount: {
    color: colors.badge,
    paddingLeft: 5,
    fontSize: 22,
  },
});
