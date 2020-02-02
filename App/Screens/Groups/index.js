import React, {PureComponent} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import global from '../../Theme/global';
import colors, {shadeColor} from '../../Theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MessageBubble from './messageBubble';

export default class GroupsScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.flatlistRef = null;
  }
  componentDidMount() {
    setTimeout(() => {
      this.flatlistRef.scrollToEnd({animated: true});
    }, 400);
  }
  state = {
    data: this.props.route.params.data,
    newMessage: '',
  };
  render() {
    return (
      <SafeAreaView
        style={[
          global.safeArea,
          styles.container,
          {backgroundColor: this.state.data.bg},
        ]}>
        <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
          <View style={styles.headerContainer}>
            <HeaderContent
              navigation={this.props.navigation}
              data={this.state.data}
            />
            <TouchableOpacity style={{width: '5%'}}>
              <Icon size={22} color={colors.text} name="ios-pin" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: colors.homeBackground,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <FlatList
              ref={ref => (this.flatlistRef = ref)}
              contentContainerStyle={{
                flexGrow: 1,

                paddingHorizontal: 15,
              }}
              keyExtractor={(item, index) => index.toString()}
              data={this.state.data.messages}
              renderItem={({item, index}) => (
                <MessageBubble bg={this.state.data.bg} message={item} />
              )}></FlatList>
          </View>

          <View style={styles.textBoxContainer}>
            <View
              style={[
                styles.textBox,
                {backgroundColor: shadeColor(this.state.data.bg, 20)},
              ]}>
              <TextInput
                placeholder="Write your message here"
                placeholderTextColor={'white'}
                value={this.state.newMessage}
                onChangeText={newMessage => this.setState({newMessage})}
                style={styles.textInput}
              />
              
            </View>
            <TouchableOpacity style={styles.button}>
                <Icon color="white" name="ios-camera" size={26}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Icon color="white" name="ios-attach"  size={26}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Icon color="white" name="md-send"  size={26}/>
              </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
    backgroundColor: colors.homeBackground,
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    paddingRight: 8,
    color: colors.text,
  },
  textBoxContainer: {
    backgroundColor: 'transparent',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textBox: {
    width: '70%',
    borderRadius: 20,
    marginRight: 8,
    height: 45,
    paddingVertical: 8,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  textInput: {
    color: 'white',
    fontSize: 14,
    width: '100%'
  },
  button: {
    width: 38,
    justifyContent: 'center',
    height: 60,
    marginRight: 5
  }
});

const HeaderContent = ({data, navigation}) => {
  return (
    <View
      style={{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '95%',
      }}>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={{paddingRight: 25}}>
        <Icon color={colors.text} size={24} name="md-arrow-back" />
      </TouchableOpacity>
      <Text style={styles.title}>{data.title}</Text>
      {data.lastMessage.replies.map((reply, index) => (
        <Image
          key={index}
          style={{width: 20, marginRight: 4, height: 20, borderRadius: 10}}
          source={{uri: reply}}
        />
      ))}
    </View>
  );
};
