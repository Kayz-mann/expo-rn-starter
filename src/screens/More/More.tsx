
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { goBack } from 'react-navigation-helpers';
import { SCREENS } from '../../../shared/constants';
import MoreActions from '../../components/MoreActions';
import StackHeader from '../../components/StackHeader';
import theme, { Box, Text } from '../../components/Theme';



const More = (): JSX.Element => {
    const { navigate } = useNavigation();
    return (
        <Box style={styles.container}>
            <StackHeader
                onBackPress={() => goBack()}
                title="More"
            />

            <Box mt="xxl">
                <MoreActions title="Get Help" onPress={() => { }} />
                <MoreActions title="Security" onPress={() => navigate(SCREENS.Security)} />
                <MoreActions title="Terms & Conditions" onPress={() => { }} />
                <MoreActions title="Privacy Policy" onPress={() => { }} />
                <MoreActions title="Delete Account" onPress={() => navigate(SCREENS.DeleteAccount)} />
            </Box>

        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.bg
    },
});

export default More;
