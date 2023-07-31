
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { goBack } from 'react-navigation-helpers';
import { SCREENS } from '../../../shared/constants';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import StackHeader from '../../components/StackHeader';
import theme, { Box, Text } from '../../components/Theme';



const PIN = (): JSX.Element => {
    const { navigate } = useNavigation();
    const { control, watch, handleSubmit, setValue } = useForm({
        // defaultValues: "",
        // resolver: yupResolver(RegisterUserSchema),
        mode: "onChange",
        reValidateMode: "onChange",
    });

    return (
        <Box style={styles.container}>
            <StackHeader
                onBackPress={() => goBack()}
                title="PIN"
            />

            <Box style={styles.content}>
                <Text textAlign="center" variant="text2" color="text1">
                    Please enter your PIN and your new
                    PIN to change your PIN
                </Text>

                <Box mt="xxxl">
                    <Box>
                        <Text mb="l" variant="text5" color="text">
                            Enter PIN
                        </Text>

                        <FormInput
                            type={"input"}
                            name={"pin"}
                            control={control}
                            keyboardType={"default"}
                            placeholder={"*******"}
                            secured
                        />
                    </Box>

                    <Box>
                        <Text mb="l" variant="text5" color="text">
                            New PIN
                        </Text>

                        <FormInput
                            type={"input"}
                            name={"newPin"}
                            control={control}
                            keyboardType={"default"}
                            placeholder={"*******"}
                            secured
                        />
                    </Box>

                    <Box>
                        <Text mb="l" variant="text5" color="text">
                            New PIN
                        </Text>

                        <FormInput
                            type={"input"}
                            name={"confirmPin"}
                            control={control}
                            keyboardType={"default"}
                            placeholder={"*******"}
                            secured
                        />
                    </Box>

                    <Box mt="xl">
                        <Button label="Change" onPress={() => navigate(SCREENS.Security)} type="primary" />
                    </Box>
                </Box>
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
    content: {
        width: wp(90),
        alignItems: 'center',
        marginTop: 33
    }
});

export default PIN;
