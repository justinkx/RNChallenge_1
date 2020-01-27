import colors from './colors';
import { StyleSheet } from 'react-native';

const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.homeBackground
    }
});

export default global;