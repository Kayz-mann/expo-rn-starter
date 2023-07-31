
import React from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { goBack } from 'react-navigation-helpers';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import StackHeader from '../../components/StackHeader';
import theme, { Box, Text } from '../../components/Theme';
import VATList, { vatData } from '../../components/VATList';
import ReceiptsBoard from '../../components/ReceiptsBoard';
import OutstandingIcon from '../../svg/Receipts/OutstandingIcon';
import numberWithCommas from '../../utils/numbersWithCommas';


const VATPaid = (): JSX.Element => {
    return (
        <Box style={styles.container}>
            <StackHeader
                onBackPress={() => goBack()}
                title="VAT Paid"
            />

            {/* <ReceiptsBoard
                icon={<OutstandingIcon />}
                amount={numberWithCommas('245379')}
                description={'Outstanding VAT payment'}
                totalReceipts={'4'}
            /> */}

            <Box style={{ alignItems: 'center' }}>
                <FlatList
                    data={vatData}
                    keyExtractor={(item) => item.id.toString()}
                    // showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <VATList
                                name={item.name}
                                date={item.date}
                                amount={item.amount}
                            />
                        )
                    }}
                />
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
});

//make this component available to the app
export default VATPaid;
