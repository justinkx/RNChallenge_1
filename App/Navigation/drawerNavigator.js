import React from 'react';
import {createDrawerNavigator,DrawerContentScrollView} from '@react-navigation/drawer';
import {TabNavigator} from './tabNavigator';
import { Text,TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => (
    <Drawer.Navigator drawerStyle={{
        backgroundColor: '#8e91f3',
        width: 240,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
      }}
      drawerContent={drawerContent}
      >
        <Drawer.Screen name="Home" component={TabNavigator}></Drawer.Screen>
    </Drawer.Navigator>
)

const drawerContent = ({state,navigation,descriptors,progress}) => {
    return (
        <DrawerContentScrollView style={{
            paddingLeft: 30,
            paddingVertical: 20
        }}>
            <Item navigation={navigation} name="Profile" icon="ios-person" />
            <Item navigation={navigation} name="Create Poll" icon="ios-albums" />
            <Item navigation={navigation} name="Create MeetUps" icon="ios-contacts" />
            <Item navigation={navigation} name="Location" icon="ios-pin" />
        </DrawerContentScrollView>
    )
}

const Item = ({name,icon,navigation}) => {
    return (
        <TouchableOpacity onPress={()=>{
            navigation.closeDrawer();
        }} style={styles.Item}>
<Text style={styles.name}>{name}</Text>
            <Icon style={[styles.name,styles.right]} name={icon} />
         </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        paddingBottom: 30,
        borderBottomWidth: 0.5,
        borderBottomColor: 'white'
    },
    name: {
        color: 'white',
        fontSize: 18,
    },
    right: {
        marginRight: 30,
        fontSize: 22
    }
})