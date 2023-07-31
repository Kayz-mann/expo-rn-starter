//import liraries
import React, { Component, FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Shadows } from '../../shared/constants';
import StatusIcon from '../svg/StatusIcon';
import numberWithCommas from '../utils/numbersWithCommas';
import theme, { Box, Text } from './Theme';

export const vatData = [
    {
        id: '1',
        name: 'Entebbe Lounge',
        date: '12th July 2023',
        amount: '7000'
    },
    {
        id: '2',
        name: 'Entebbe Lounge',
        date: 'Thursday, 14th July 2023',
        amount: '8000'
    },
    {
        id: '3',
        name: 'Entebbe Lounge',
        date: 'Tuesday, 14th July 2023',
        amount: '8000'
    },
    {
        id: '4',
        name: 'Entebbe Lounge',
        date: 'Wednesday, 12th July 2023',
        amount: '7000'
    },

]

interface Props {
    name: string;
    date: string;
    amount: string;

}

// create a component
const VATList: FC<Props> = ({ name, date, amount }) => {
    return (
        <Box style={styles.container}>
            <Box>
                <StatusIcon />
            </Box>
            <Box ml="l" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: wp(70)  }}>
                <Box>
                    <Text variant="text1" color="text2" >{name}</Text>
                    <Text variant="text8" color="text3">{date}</Text>
                </Box>
                <Box>
                    <Text variant="text2" color="error">UGx {numberWithCommas(`${amount}`)}</Text>
                </Box>
            </Box>
        </Box>
    );
};

// define your styles
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
        borderWidth: 1,
        borderColor: theme.colors.bg7,
        paddingHorizontal: 10,
        ...Shadows.large
    },
});

//make this component available to the app
export default VATList;
