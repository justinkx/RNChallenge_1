import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../../Theme/colors';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.35;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(5);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 25;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18
    },
    
    imageContainer: {
        flex: 1,
        padding: 10,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius,
        justifyContent: 'space-between'
    },
    titleContainer: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 10,
        paddingTop: 15,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    titleView: {
        width: '75%',
        paddingTop: 10
    },
    badgeView: {
        width: '25%',
        alignItems: 'flex-end'
    },
    badge: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: colors.badge
    },
    title: {
        fontSize: 26,
        letterSpacing: 1.3,
        textTransform: 'uppercase',
        paddingTop: 5,
        fontWeight: 'bold',
        color: 'white'
    },
    count: {
        color: 'white'
    },
    lastMessage: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 13,
        minHeight: viewportHeight * 0.15,

    },
    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    lastUser :{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        borderRadius: 15,
        marginRight: 14
    },
    message: {
        color: colors.text,
        fontSize: 13,
        paddingTop: 5,
        maxWidth: '80%'
    },
    usersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "flex-start",
        marginTop: viewportHeight * 0.065,
    },
    usersView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    replyImage: {
        width: 22,
        height: 22,
        borderRadius: 11,
        marginRight: 5
    },
    timeView: {
        borderRadius: 12,
        padding: 5,
        backgroundColor: colors.homeBackground
    },
    time: {
        fontSize: 11,
    }
});