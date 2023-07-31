
import React from 'react';
import { StyleSheet } from 'react-native';
import { goBack } from 'react-navigation-helpers';
import StackHeader from '../../components/StackHeader';
import theme, { Box, Text } from '../../components/Theme';



const Profile = (): JSX.Element => {
    return (
        <Box style={styles.container}>
            <StackHeader
                onBackPress={() => goBack()}
                title="Profile"
            />

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

export default Profile;
