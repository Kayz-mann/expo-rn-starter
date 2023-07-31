import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import * as Haptics from 'expo-haptics';
import { useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";
import { setUserType } from "../../../store/global";
import { useAppSelector } from "../../../store/hooks";
import Button from "../../components/Button";
import StackHeader from "../../components/StackHeader";
import theme, { Box, Text } from "../../components/Theme";
import { RegistrationOptions } from "./Registration"
import MerchantAndUserSelectionButton from "../../components/MerchantAndUserSelectionButton";
import { SCREENS } from "../../../shared/constants";



const SelectRole = ({ onNext, steps, totalSteps }: RegistrationOptions): JSX.Element => {
    const dispatchApp = useDispatch();
    const { userType } = useAppSelector((state) => state.global);

    const isMerchant = (userType && userType === "merchant") ?? false;
    const isUser = (userType && userType === "user") ?? false;

    const { canGoBack, navigate, goBack } = useNavigation();
    const [merchantSelected, setMerchantSelelcted] = useState(isMerchant);
    const [userSelected, setUserSelected] = useState(isUser);

    const handleSelect = () => {
        if (merchantSelected) {
            dispatchApp(setUserType("merchant"));
            onNext?.();
            return;
        }

        if (userSelected) {
            dispatchApp(setUserType("user"));
            onNext?.();
            navigate(SCREENS.UserSignUp)
            return;
        }
    };


    return (
        <Box style={styles.container}>
            <StackHeader {...(canGoBack() ? { onBackPress: () => goBack() } : {})} />

            <Box style={styles.content}>
                <Box style={{ width: wp(90) }}>
                    <Text
                        style={{ marginTop: 33 }}
                        allowFontScaling={false}
                        variant="title1"
                        color="text"
                    >
                        Get Started
                    </Text>
                    <Text variant="text2" color="text1" allowFontScaling={false}>
                        Select one option below to continue
                    </Text>
                </Box>

                <Text mt="xxl" variant="text3" color="text2">I want to register as a </Text>

                <Box style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
                    <TouchableOpacity
                        style={{}}
                        onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            setUserSelected(true);
                            setMerchantSelelcted(false);
                        }}
                    >
                        <MerchantAndUserSelectionButton
                            userRole={"user"}
                            selected={userSelected}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginLeft: 10 }}
                        onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            setMerchantSelelcted(true);
                            setUserSelected(false);
                        }}
                    >
                        <MerchantAndUserSelectionButton
                            userRole={"merchant"}
                            selected={merchantSelected}
                        />
                    </TouchableOpacity>

                </Box>

                <Box style={{ marginTop: 100 }}>
                    <Button type="primary" label="Next" onPress={handleSelect} />
                </Box>

                <Box style={{ marginTop: 20, alignItems: 'center' }}>
                    <Pressable onPress={() => navigate(SCREENS.SignIn)}>
                        <Text variant="text2" allowFontScaling={false}>
                            Already have an account? <Text variant="text3" color="primary">Sign In</Text>
                        </Text>
                    </Pressable>
                </Box>
            </Box>

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
        width: wp(90)
    }
});

export default SelectRole