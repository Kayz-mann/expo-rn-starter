import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { goBack } from "react-navigation-helpers";
import { SCREENS } from "../../../../shared/constants";
import { useAppSelector } from "../../../../store/hooks";
import Button from "../../../components/Button";
import FormInput from "../../../components/FormInput";
import SignInSwitchPill from "../../../components/SignInSwitchPill";
import StackHeader from "../../../components/StackHeader";
import theme, { Box, Text } from "../../../components/Theme";
import SendIcon from "../../../svg/SendIcon";
import TemporarySpacing from "../../../svg/TemporarySpacing";




const NewPassword = (): JSX.Element => {
    const { navigate } = useNavigation();
    const { userType } = useAppSelector((state) => state.global);
    const isMerchant = userType === "merchant";
    const [activeItem, setActiveItem] = useState<"user" | "merchant">(
        "user"
    );

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
            />
            <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>
                <Box style={styles.content}>
                    <Box>
                        <Image style={styles.image} source={require('../../../../assets/images/ura.png')} />
                    </Box>

                    <Box mt="xl">
                        <Text variant="title1" color="text1">New Password</Text>
                        <Text mt="l" variant="text2" color="text">Set new password for your account</Text>
                    </Box>

                    <Box style={{ marginTop: 40, alignItems: 'center' }}>

                        <Box mt="xxxl">
                            <Text mb="l" variant="text5" color="text">
                                Password
                            </Text>
                            <FormInput
                                type={"input"}
                                name={"password"}
                                control={control}
                                placeholder={"********"}
                            />
                        </Box>

                        <Box mt="xl">
                            <Text mb="l" variant="text5" color="text">
                                Confirm Password
                            </Text>
                            <FormInput
                                type={"input"}
                                name={"confirmPassword"}
                                control={control}
                                placeholder={"********"}
                            />
                        </Box>

                        <Box mt="xxl">
                            <Button type={"primary"} label="Save" onPress={() => navigate(SCREENS.ForgotPasswordSuccess)} />
                        </Box>
                    </Box>
                </Box>
            </ScrollView>
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.bg,

    },
    content: {
        width: wp(90),
        marginTop: 30,

    },
    image: {
        width: 56,
        height: 53
    },
    forgotPass: {
        flexDirection: 'row',
        width: wp(90),
        justifyContent: 'flex-end',
        marginTop: -15
    }
});

export default NewPassword