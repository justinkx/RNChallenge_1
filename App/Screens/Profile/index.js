import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import global, {width} from '../../Theme/global';
import colors from '../../Theme/colors';
export default function ProfileScreen() {
  const profiles = [
    {name: 'logo-facebook', color: '#425f9b'},
    {name: 'logo-linkedin', color: '#0077b5'},
    {name: 'logo-twitter', color: '#1ba1f2'},
    {name: 'logo-youtube', color: '#ff0000'},
  ];
  return (
    <SafeAreaView style={[global.safeArea, styles.container]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={[
            styles.settingBtn,
            {
              backgroundColor: colors.homeBackground,
            },
          ]}>
          <Icon name="ios-finger-print" color="black" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.settingBtn,
            {
              backgroundColor: colors.homeBackground,
            },
          ]}>
          <Icon name="ios-cog" color="black" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
            <Image
              style={styles.avatar}
              source={{
                uri:
                  'https://avatars2.githubusercontent.com/u/28846043?s=460&v=4',
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Text style={[global.textCenter, styles.name]}>Justin K Xavier</Text>
          <Text style={[global.textCenter, styles.role]}>
            Javascript Hybrid App Developer
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            {profiles.map((profile, index) => (
              <TouchableOpacity
                style={[styles.socialTouch, {backgroundColor: profile.color}]}>
                <Icon name={profile.name} size={18} color="white" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <ScrollView
          style={{
            flex: 1,
          }}
          contentContainerStyle={styles.scroll}></ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#2f9aba',
    position: 'relative',
  },
  header: {
    backgroundColor: '#2f9aba',
    height: 150,
    paddingTop: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  content: {
    flexGrow: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
  settingBtn: {
    width: 40,
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 70,
  },
  imageView: {
    position: 'relative',
    top: -60,
    left: width / 2 - 50,
    width: 100,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 12,
    height: 120,
  },
  avatar: {
    width: 92,
    height: 112,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  scroll: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    color: 'black',
    fontWeight: '500',
    paddingBottom: 8,
    paddingTop: 2,
  },
  role: {
    color: colors.text,
    fontSize: 17,
  },
  socialTouch: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 14,
  },
});
