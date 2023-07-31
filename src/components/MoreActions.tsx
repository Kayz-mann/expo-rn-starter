//import liraries
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Shadows } from '../../shared/constants';
import theme, { Box, Text } from './Theme';

interface Props {
    title: string;
    onPress: () => void;
}
const MoreActions: React.FC<Props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Box style={styles.flex}>
                <Text variant="text2" color="text2">{title}</Text>
                <Entypo name="chevron-right" size={20} color="#919191" />
            </Box>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(90),
        height: 66,
        borderRadius: 4,
        backgroundColor: theme.colors.bg,
        ...Shadows.large,
        paddingVertical: 22,
        paddingHorizontal: 10,
        marginBottom: 11,
        borderWidth: 1,
        borderColor: theme.colors.bg7
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

});


export default MoreActions;
