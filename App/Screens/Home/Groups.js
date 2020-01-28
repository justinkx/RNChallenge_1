import React from 'react';
import { View, ScrollView,StyleSheet } from 'react-native';
import {width as deviceWidth } from '../../Theme/global'
import colors, {getRandomColor} from '../../Theme/colors';

export default function GroupCarousel({groups}) {
    
  return (
    <View style={styles.container}>
        <ScrollView horizontal
        contentContainerStyle={{
             justifyContent : 'center'}}
        pagingEnabled
        scrollEventThrottle={200}
        decelerationRate="fast"
        
        showsHorizontalScrollIndicator={false}
        >
            {
                groups.map((group,index)=> (
                    <View key={index} style={{
                        width: deviceWidth - 120,
                        borderRadius: 20,
                        marginRight: 30,
                        height: deviceWidth - 110,
                        marginLeft: 30,
                        backgroundColor: getRandomColor()
                    }}>

                    </View>
                ))
            }
        </ScrollView>
    </View>
  );
}

const GroupContent = ({group}) => {
    return (
        <View>
            <View></View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    height: deviceWidth - 110,
    marginTop: 15,
  },
});