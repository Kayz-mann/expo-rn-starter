
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { goBack } from 'react-navigation-helpers';
import { SCREENS } from '../../../shared/constants';
import Button from '../../components/Button';
import StackHeader from '../../components/StackHeader';
import theme, { Box, Text } from '../../components/Theme';



const DeleteAccount = (): JSX.Element => {
    const { navigate } = useNavigation();
    return (
        <Box style={styles.container}>
            <StackHeader
                onBackPress={() => goBack()}
                title="Delete Account"
            />

            <Box mt="xl">
                <Text textAlign="center" variant="text1" color="text1">
                    Are you sure you want to delete this{'\n'} account?
                    Your details will be removed from{'\n'} our database
                </Text>
            </Box>

            <Box mt="xxxl">
                <Button type="primary" label="Delete" onPress={() => navigate(SCREENS.Security)} />
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

export default DeleteAccount;
