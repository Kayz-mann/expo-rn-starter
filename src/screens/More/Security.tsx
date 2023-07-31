
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
                title="Security"
            />

            <Box mt="xxl">
                <MoreActions title="Password" onPress={() => navigate(SCREENS.Password)} />
                <MoreActions title="PIN" onPress={() => navigate(SCREENS.PIN)} />
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
