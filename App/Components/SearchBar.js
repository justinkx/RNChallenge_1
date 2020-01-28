import React, { PureComponent } from 'react'
import { Text, View,TextInput, StyleSheet } from 'react-native'
import colors from '../Theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SearchBar extends PureComponent {
    render() {
        return (
            <View style={styles.searchContainer}>
                <TextInput
                style={{
                    backgroundColor: 'transparent',
                    minWidth: '90%',
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: colors.search
                }}
                placeholder="Contacts"></TextInput>
                <Icon color={colors.search} style={styles.down} size={25} name="ios-arrow-down"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 50,
        fontSize: 16,
        overflow: 'hidden',
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 40
    },
    down: {
        position: 'absolute',
        right: 15
    }
})