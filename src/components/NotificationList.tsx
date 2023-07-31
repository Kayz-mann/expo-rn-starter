//import liraries
import React, { Component, FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Shadows } from '../../shared/constants';
import StatusIcon from '../svg/StatusIcon';
import numberWithCommas from '../utils/numbersWithCommas';
import theme, { Box, Text } from './Theme';

export const NotificationListData = [
    {
        id: '1',
        title: 'Entebbe Lounge',
        date: '12th July 2023',
        amount: '7000'
    },
    {
        id: '2',
        title: 'Entebbe Lounge',
        date: 'Thursday, 14th July 2023',
        amount: '8000'
    },
    {
        id: '3',
        title: 'Entebbe Lounge',
        date: 'Tuesday, 14th July 2023',
        amount: '8000'
    },
    {
        id: '4',
        title: 'Entebbe Lounge',
        date: 'Wednesday, 12th July 2023',
        amount: '7000'
    },

]

interface Props {
    title: string;
    description: string;
    date: string;
    new?: string;

}

// create a component
const NotificationList: FC<Props> = ({ title, date, new, description }) => {
    return (
        <Box style={styles.container}>
            <Box>
                <StatusIcon />
            </Box>
            <Box ml="l" style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp(85)  }}>
                <Box>
                    <Text variant="text1" color="text2" >{title}</Text>
                    <Text variant="text1" color="text2" >{title}</Text>
                    <Text variant="text8" color="text3">{date}</Text>
                </Box>
                <Box>
                    <Text>New</Text>
                </Box>
            </Box>
        </Box>
    );
};


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.bg,
        flexDirection: 'row',
        width: wp(90),
        height: 79,
        marginBottom: 16,
        borderRadius: 4,
        ...Shadows.large
    },
});


export default NotificationList;
