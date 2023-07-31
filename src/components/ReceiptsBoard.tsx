//import liraries
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Shadows } from '../../shared/constants';
import BgStyle from '../svg/Receipts/BgStyle';
import theme, { Box, Text } from './Theme';

interface Props {
    icon: React.ReactNode;
    amount: string | number;
    description: string
    totalReceipts: string | number
}
const ReceiptsBoard: React.FC<Props> = ({ icon, amount, description, totalReceipts }) => {
    return (
        <Box style={styles.container}>
            <Box style={styles.flex}>
                <>
                    <Box mr="l">
                        {icon}
                    </Box>
                    <Box>
                        <Box flexDirection="row" alignItems="center">
                            <Text style={{ marginTop: 8 }} variant="text3" color="text2" mr="s">UGx</Text>
                            <Text variant="title1" color="text2">{amount}</Text>
                        </Box>
                        <Box>
                            <Text mt="l" variant="text5" color="text3">{description}</Text>
                        </Box>
                    </Box>
                </>
                <Box style={{ flexDirection: 'column' }}>
                    <Box style={styles.receiptTag}>
                        <Text color="text1">{totalReceipts} Receipts</Text>
                    </Box>
                    <Box style={styles.position}>
                        <BgStyle />
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(90),
        height: hp(12),
        borderRadius: 4,
        backgroundColor: theme.colors.bg,
        ...Shadows.large,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 24,
    },
    flex: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-around',

    },
    receiptTag: {
        width: wp(24),
        height: hp(4),
        backgroundColor: theme.colors.bg6,
        borderWidth: 1,
        borderColor: theme.colors.border3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28
    },
    position: {
        // justifyContent: 'flex-end',
        position: 'absolute',
        // // width: wp(90),
        // marginLeft: 282,
        marginTop: 26,
        paddingLeft: 55
    }
});


export default ReceiptsBoard;
