import React from "react";
import { StyleSheet } from "react-native";
import { Easing } from "react-native-reanimated";

import theme, { Box, Text } from "../../components/Theme";

import { MotiView } from "@motify/components";
import Button from "../../components/Button";
import SuccessIcon from "../../svg/SuccessIcon";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../shared/constants";

const ConvertPointSuccess = (): JSX.Element => {
    const { navigate } = useNavigation();

    return (
        <Box style={styles.container}>
            <Box
                style={[styles.dot, { alignItems: "center", justifyContent: "center" }]}
            >
                {[...Array(3).keys()].map((index) => {
                    return (
                        <MotiView
                            from={{ opacity: 0.7, scale: 1 }}
                            animate={{ opacity: 0, scale: 4 }}
                            transition={{
                                type: "timing",
                                duration: 2000,
                                easing: Easing.out(Easing.ease),
                                delay: index * 400,
                                repeatReverse: false,
                                loop: true,
                            }}
                            key={index}
                            style={[StyleSheet.absoluteFillObject, styles.dot]}
                        />
                    );
                })}
                <Box style={{ alignItems: "center" }}>
                    <SuccessIcon />
                </Box>
            </Box>

            <Text style={{ marginTop: 50 }} variant="title3" color="bg">
                Congratulations!!
            </Text>
            <Text
                style={{ textAlign: "center", marginTop: 5 }}
                variant="text1"
                color="bg"
            >
                You have successfully converted <Text variant="text3">300{'\n'}reward points </Text>
                to<Text variant="text3">UGx 670. </Text> Your wallet will{'\n'}be credited immediately
            </Text>

            <Box style={{ marginTop: 30, flexDirection: "row" }}>
                <Button
                    type="secondary"
                    label="Done"
                    onPress={() => {
                        navigate(SCREENS.Dashboard)
                    }}
                />

            </Box>
        </Box>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.primary,
    },
    dot: {
        height: 140,
        width: 140,
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        borderRadius: 100,
    },
});

export default ConvertPointSuccess;
