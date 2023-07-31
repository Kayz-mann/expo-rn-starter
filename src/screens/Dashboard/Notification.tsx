//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { StyleSheet, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { goBack } from 'react-navigation-helpers';
import { SCREENS } from '../../../shared/constants';
import StackHeader from '../../components/StackHeader';
import theme, { Box, Text } from '../../components/Theme';
import EmptyNotification from '../../svg/EmptyNotification';


// create a component
const Notification = (): JSX.Element => {
    const { navigate } = useNavigation();
    return (
        <Box style={styles.container}>
            <Box>
                <StackHeader
                    onBackPress={() => goBack()}
                    title="Notification"
                />
            </Box>
            <Box style={{ justifyContent: 'center', marginTop: 100, alignItems: 'center' }}>
                <EmptyNotification />
                <Text mt="s" variant="text3" color="text2">No Notification</Text>
                <Text variant="text4" color="text3">You currently don't have any notification</Text>
            </Box>

        </Box>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.bg
    },
    content: {
        width: wp(90),
        marginTop: 26
    },
    image: {
        width: 38,
        height: 38,
        borderRadius: 9,
        backgroundColor: theme.colors.gray,
    },
    boardSpacing: {
        alignItems: 'center',
    },
    board: {
        width: wp(90),
        height: 197,
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
    },
    pointBoard: {
        width: wp(55),
        height: 59,
        borderRadius: 33,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.colors.bg2,
        marginTop: 27,
    },
    vatBg: {
        height: hp(8),
        width: wp(44),
        backgroundColor: '#FFFADC',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#FFF195',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pointsBg: {
        height: hp(8),
        width: wp(44),
        backgroundColor: '#DEECFF',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#B2D4FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    transactBg: {
        height: hp(8),
        width: wp(90),
        backgroundColor: '#E1FFED',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#B1EEC9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        flexDirection: 'row'
    },
    footer: {
        marginTop: 33,
        width: wp(90)
    }
});

//make this component available to the app
export default Notification;
