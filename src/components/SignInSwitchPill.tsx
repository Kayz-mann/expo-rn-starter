import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import * as Haptics from 'expo-haptics';
import { StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import theme, { Box, Text } from "../components/Theme";
import { Shadows } from "../../shared/constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: wp(90),
        height: 51,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: theme.colors.bg7,
        borderColor: theme.colors.bg1,
        borderWidth: 1
    },
    qrcodePillActive: {
        width: "50%",
        backgroundColor: theme.colors.bg,
        alignItems: "center",
        justifyContent: "center",
        height: "90%",
        borderRadius: 12,
        ...Shadows.large,
        marginLeft: 2,
        marginRight: 2
    },
    qrcodePillInActive: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        height: "90%",
        borderRadius: 12,
    },
});

interface Props {
    active: string;
    handleSwitch: any;
}

const SignInSwitchPill: FC<Props> = ({ active, handleSwitch }) => {
    const { t } = useTranslation();
    const handlePress = (state: string) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        handleSwitch();
    };
    return (
        <Box style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => handlePress("user")}
                style={
                    active === "user"
                        ? styles.qrcodePillActive
                        : styles.qrcodePillInActive
                }
            >
                <Text
                    variant={active === "user" ? 'text2' : "text1"}
                    color={active === "user" ? "primary" : "text"}
                    fontSize={16}
                    allowFontScaling={false}
                >
                    {t("User")}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => handlePress("merchant")}
                style={
                    active === "merchant"
                        ? styles.qrcodePillActive
                        : styles.qrcodePillInActive
                }
            >
                <Text
                     variant={active === "user" ? 'text2' : "text1"}
                    color={active === "user" ? "text" : "primary"}
                    fontSize={16}
                    allowFontScaling={false}
                >
                    {t("Merchant")}
                </Text>
            </TouchableOpacity>
        </Box>
    );
};

export default SignInSwitchPill;
