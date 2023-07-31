import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { goBack } from "react-navigation-helpers";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { SCREENS } from "../../../../shared/constants";
import { useAppSelector } from "../../../../store/hooks";
import Button from "../../../components/Button";
import FormInput from "../../../components/FormInput";

import StackHeader from "../../../components/StackHeader";
import theme, { Box, Text } from "../../../components/Theme";





const ForgotPasswordOTP = (): JSX.Element => {
    const { navigate } = useNavigation();
    const { userType } = useAppSelector((state) => state.global);
    const isMerchant = userType === "merchant";
    const [value, setValue] = useState("");
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const [activeItem, setActiveItem] = useState<"user" | "merchant">(
        "user"
    );

    const CELL_COUNT = 6;

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });




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
                        <Text variant="title1" color="text1">OTP Confirmation</Text>

                        <Box
                            style={{
                                paddingTop: 10,
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text variant="text2" color="text">Enter your OTP sent to, </Text>
                            <Box style={{ flexDirection: 'row' }}>
                                <Text variant="text3" color="primary">
                                    {'account@email.com'}
                                </Text>
                                <Text mt="s" ml="s" variant="text2" color="text">
                                    to
                                </Text>
                            </Box>
                        </Box>
                        <Text variant="text2" color="text">
                            continue.
                        </Text>
                    </Box>

                    <Box style={{ marginTop: 40, alignItems: 'center' }}>

                        <Box style={{ width: wp(90), alignItems: 'center'}} mt="l">
                            <Text mb="l" variant="text5" color="text">
                                OTP
                            </Text>
                            <CodeField
                                ref={ref}
                                {...props}
                                value={value}
                                onChangeText={setValue}
                                cellCount={CELL_COUNT}
                                rootStyle={styles.codeFieldRoot}
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                renderCell={({ index, symbol, isFocused }) => (
                                    <Box
                                        style={{
                                            borderWidth: 1,
                                            borderRadius: 10,
                                            marginHorizontal: 7,
                                            marginBottom: 15,
                                            paddingBottom: 10,
                                            alignItems: "center",
                                            borderColor:
                                                value.length < CELL_COUNT
                                                    ? theme.colors.orange
                                                    : theme.colors.primary,
                                        }}
                                        onLayout={getCellOnLayoutHandler(index)}
                                        key={index}
                                    >
                                        <Text style={[styles.cell]}>
                                            {symbol || (isFocused ? <Cursor /> : null)}
                                        </Text>
                                    </Box>
                                )}
                            />
                        </Box>

                        <Box mt="xxl">
                            <Button type={"primary"} label="Reset Password" onPress={() => navigate(SCREENS.NewPassword)} />
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
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 24,

        textAlign: "center",
    },
    codeFieldRoot: { marginTop: 20 },
});

export default ForgotPasswordOTP