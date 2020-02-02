import colors from './colors';
import { StyleSheet, Dimensions } from 'react-native';

const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.homeBackground
    },
    textCenter: {
        textAlign: 'center'
    }
});
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export default global;