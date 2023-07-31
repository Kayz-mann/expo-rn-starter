
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { goBack } from 'react-navigation-helpers';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ReceiptsBoard from '../../components/ReceiptsBoard';
import StackHeader from '../../components/StackHeader';
import theme, { Box, Text } from '../../components/Theme';
import DisputeIcon from '../../svg/Receipts/DisputeIcon';
import OutstandingIcon from '../../svg/Receipts/OutstandingIcon';
import PaidIcon from '../../svg/Receipts/PaidIcon';
import PendingIcon from '../../svg/Receipts/PendingIcon';
import RejectedIcon from '../../svg/Receipts/RejectedIcon';
import numberWithCommas from '../../utils/numbersWithCommas';
import UnpaidIcon from '../../svg/Receipts/UnpaidIcon';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../shared/constants';

const Receipts = (): JSX.Element => {
    const { navigate } = useNavigation();
    return (
        <Box style={styles.container}>
            <StackHeader
                onBackPress={() => goBack()}
                title="Receipts"
            />
            <ScrollView style={{ width: wp(100) }} showsVerticalScrollIndicator={false}>
                <Box mt="xxl" alignItems="center">
                    <TouchableOpacity onPress={() => navigate(SCREENS.VATPaid)}>
                        <ReceiptsBoard
                            icon={<PaidIcon />}
                            amount={numberWithCommas('245379')}
                            description={'VAT Paid'}
                            totalReceipts={'4'}
                        />
                    </TouchableOpacity>

                    <ReceiptsBoard
                        icon={<OutstandingIcon />}
                        amount={numberWithCommas('245379')}
                        description={'Outstanding VAT payment'}
                        totalReceipts={'4'}
                    />

                    <ReceiptsBoard
                        icon={<PendingIcon />}
                        amount={numberWithCommas('245379')}
                        description={'Pending Verification'}
                        totalReceipts={'4'}
                    />

                    <ReceiptsBoard
                        icon={<RejectedIcon />}
                        amount={numberWithCommas('245379')}
                        description={'Rejected VAT Payment'}
                        totalReceipts={'4'}
                    />

                    <ReceiptsBoard
                        icon={<DisputeIcon />}
                        amount={numberWithCommas('245379')}
                        description={'Dispute'}
                        totalReceipts={'4'}
                    />

                    <ReceiptsBoard
                        icon={<UnpaidIcon />}
                        amount={numberWithCommas('245379')}
                        description={'Unpaid Tax'}
                        totalReceipts={'4'}
                    />
                </Box>
            </ScrollView>
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
export default Receipts;
