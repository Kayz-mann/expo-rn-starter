import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { SCREENS } from "../../../shared/constants";
import { useAppSelector } from "../../../store/hooks";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import SignInSwitchPill from "../../components/SignInSwitchPill";
import theme, { Box, Text } from "../../components/Theme";
import SendIcon from "../../svg/SendIcon";
import TemporarySpacing from "../../svg/TemporarySpacing";




const SignIn = (): JSX.Element => {
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
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <Box style={styles.content}>
                    <Image style={styles.image} source={require('../../../assets/images/ura.png')} />

                    <Box mt="xxl" style={{ width: wp(90) }}>
                        <Text variant="title1" color="text1">Welcome Back 👋 </Text>

                        <Box
                            style={{
                                paddingVertical: 10,
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text variant="text2" color="text">Don't have an account,</Text>
                            <TouchableOpacity style={{ marginTop: -2 }} onPress={() => navigate(SCREENS.Registration)}>
                                <Text ml="s" variant="text3" color="primary">
                                    Create account.
                                </Text>
                            </TouchableOpacity>
                        </Box>
                        <Text variant="text2" color="text">It takes less than 1 minute</Text>
                    </Box>

                    <Box style={{ marginTop: 40, alignItems: 'center' }}>
                        <SignInSwitchPill active={activeItem} handleSwitch={() => {
                            setActiveItem(
                                activeItem === "merchant" ? "user" : "merchant"
                            )
                        }} />


                        {activeItem === "user" && (
                            <>
                                <Box mt="xl">
                                    <Text mb="l" variant="text5" color="text">
                                        Wallet number
                                    </Text>
                                    <FormInput
                                        type={"input"}
                                        name={"walletNumber"}
                                        control={control}
                                        placeholder={"Wallet number"}
                                    />
                                </Box>

                                <Box style={{ marginTop: -10 }}>
                                    <Text mb="l" variant="text5" color="text">
                                        Password
                                    </Text>
                                    <FormInput
                                        type={"input"}
                                        name={"password"}
                                        control={control}
                                        secured
                                        placeholder={"*********"}
                                    />
                                    <TouchableOpacity
                                        onPress={() => navigate(SCREENS.ForgotPassword)}
                                        activeOpacity={0.6}
                                        style={styles.forgotPass}
                                    >
                                        <Text variant="text3" color="primary">Forgot password?</Text>
                                    </TouchableOpacity>
                                </Box>
                            </>
                        )}


                        {activeItem === "merchant" && (
                            <>
                                <Box mt="xl">
                                    <Text mb="l" variant="text5" color="text">
                                        Email address
                                    </Text>
                                    <FormInput
                                        type={"input"}
                                        name={"email"}
                                        control={control}
                                        placeholder={"mail@gmail.com"}
                                        keyboardType="email-address"
                                    />
                                </Box>

                                <Box style={{ marginTop: -10 }}>
                                    <Text mb="l" variant="text5" color="text">
                                        Password
                                    </Text>
                                    <FormInput
                                        type={"input"}
                                        name={"password"}
                                        control={control}
                                        secured
                                        placeholder={"*********"}
                                    />
                                    <TouchableOpacity activeOpacity={0.6} style={styles.forgotPass}>
                                        <Text variant="text3" color="primary">Forgot password?</Text>
                                    </TouchableOpacity>
                                </Box>
                            </>
                        )}

                        <Box mt="xl">
                            <Button type={"primary"} label="Sign In" onPress={() => navigate(SCREENS.BottomTabNav)} />

                            <Box style={{ width: wp(90), marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <Box style={styles.border} />
                                <Text ml="l" mr="l" variant="text2" color="text1">or</Text>
                                <Box style={styles.border} />
                            </Box>

                            <Box pb="xxxl">
                                <Button
                                    type={"secondaryAlert"}
                                    label="Submit VAT"
                                    icon={<SendIcon />}
                                    onPress={() => navigate(SCREENS.SubmitVATNav)}
                                />
                            </Box>
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
        marginTop: 15

    },
    image: {
        width: 56,
        height: 53
    },
    forgotPass: {
        flexDirection: 'row',
        width: wp(90),
        justifyContent: 'flex-end',
        marginTop: -25
    },
    border: {
        borderBottomColor: theme.colors.border,
        borderBottomWidth: 1,
        width: wp(40)
    }
});

export default SignIn