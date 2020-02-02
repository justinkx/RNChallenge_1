import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import global from '../../Theme/global';
import colors from '../../Theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default function StoryContent({story}) {
  return (
    <>
      <Text style={styles.title}>Freelance</Text>
      <Text style={styles.heading}>Why the freelance life may get easier</Text>
      <View style={styles.timeView}>
        <Icon name="md-alarm" color={colors.text} size={15} />
        <Text style={styles.time}>24sce ago</Text>
        <Icon
          size={15}
          name="ios-thumbs-up"
          color={colors.text}
          style={{marginLeft: 40}}
        />
        <Text style={styles.time}>524</Text>
      </View>
      <View style={[styles.timeView, {paddingVertical: 15}]}>
        <Image style={styles.image} source={{uri: story.image}} />
        <Text style={styles.name}>{story.name}</Text>
      </View>
      <Text style={styles.para}>
        As Deloitte’s new 2019 Global Human Capital Trends Report points out,
        the alternative workforce—made up of freelancers, contractors and gig
        workers—has gone mainstream as talent markets have tightened.
        Organizations are starting to look more strategically at the full gamut
        of work arrangements, including alternative ones, as they plan their
        growth.
      </Text>
      <Text style={styles.para}>
        With the number of self-employed people in the U.S. expected to hit 42
        million by 2020 and freelancers the fastest growing labor group in the
        U.K., many organizations are starting to embrace the trend when it comes
        to getting high-level work done. In Deloitte’s survey of nearly 10,000
        people in 119 countries, 33% of respondents said their organizations are
        using alternative work arrangements for IT, 25% for operations, 15% for
        marketing and 15% for research and development.
      </Text>
      <Text style={styles.para}>
        So has the existence of networks that focus on specific pools of
        employees—such as veterans or at-home parents. Among them are The Mom
        Project, The Second Shift and WeGoLook. They are now responsible for $2
        billion in outsourced activity, putting people to work around the world,
        the report notes.
      </Text>
    </>
  );
}
const styles = StyleSheet.create({
  title: {
    color: '#9b4947',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '400',
  },
  heading: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
    paddingVertical: 10,
    textTransform: 'capitalize',
  },
  timeView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  time: {
    fontSize: 12,
    paddingLeft: 5,
    color: colors.text,
  },
  image: {
    width: 30,
    height: 36,
    borderRadius: 5,
    resizeMode: 'cover',
    marginRight: 10,
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
  para: {
    fontSize: 17,
    color: '#636262',
    paddingBottom: 15,
  },
});
