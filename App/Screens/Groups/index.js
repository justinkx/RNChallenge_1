import React, {PureComponent} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import global from '../../Theme/global';
import colors from '../../Theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MessageBubble from './messageBubble';

export default class GroupsScreen extends PureComponent {
  state = {
    data: this.props.route.params.data,
  };
  render() {
    return (
      <SafeAreaView style={[global.safeArea, styles.container]}>
        <View style={styles.headerContainer}>
          <HeaderContent navigation={this.props.navigation} data={this.state.data} />
          <TouchableOpacity style={{width: '5%'}}>
              <Icon size={22} color={colors.text} name="ios-pin" />
          </TouchableOpacity>
        </View>
        <FlatList contentContainerStyle={{flexGrow: 1,
        paddingHorizontal: 8}}
        keyExtractor={(item,index) => index.toString()}
        data={this.state.data.messages}
        renderItem={({item,index})=> (<MessageBubble message={item} />)}
        >

        </FlatList>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  headerContainer: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    paddingRight: 8,
    color: colors.text,
  },
});

const HeaderContent = ({data,navigation}) => {
  return (
    <View style={{height: 40, flexDirection: 'row',justifyContent: 'flex-start',alignItems: 'center', width: '95%'}}>
      <TouchableOpacity onPress={()=> navigation.pop()} style={{paddingRight: 25}}>
        <Icon color={colors.text} size={24} name="md-arrow-back" />
      </TouchableOpacity>
      <Text style={styles.title}>{data.title}</Text>
      {data.lastMessage.replies.map((reply, index) => (
          <Image
          key={index}
            style={{width: 20,marginRight: 4, height: 20, borderRadius: 10}}
            source={{uri: reply}}
          />
      ))}
    </View>
  );
};
