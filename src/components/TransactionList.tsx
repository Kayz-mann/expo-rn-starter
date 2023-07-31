//import liraries
import React, { Component, FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import StatusIcon from '../svg/StatusIcon';
import numberWithCommas from '../utils/numbersWithCommas';
import theme, { Box, Text } from './Theme';

export const transactionData = [
    {
        id: '1',
        name: 'Austine Kosamba',
        date: '12th July 2023',
        amount: '7000'
    },
    {
        id: '2',
        name: 'Felix Katongo',
        date: 'Thursday, 14th July 2023',
        amount: '8000'
    },
    {
        id: '3',
        name: 'Felix Katongo',
        date: 'Tuesday, 14th July 2023',
        amount: '8000'
    },
    {
        id: '4',
        name: 'Austine Kosamba',
        date: 'Wednesday, 12th July 2023',
        amount: '7000'
    },
    {
        id: '5',
        name: 'Austine Kosamba',
        date: 'Wednesday, 12th July 2023',
        amount: '7000'
    },
    {
        id: '6',
        name: 'Austine Kosamba',
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
const TransactionList: FC<Props> = ({ name, date, amount }) => {
    return (
        <Box style={styles.container}>
            <Box>
                <StatusIcon />
            </Box>
            <Box ml="l" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: wp(75) }}>
                <Box>
                    <Text variant="text1" color="text2" >Paid to {name}</Text>
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
        marginBottom: 27
    },
});

//make this component available to the app
export default TransactionList;
