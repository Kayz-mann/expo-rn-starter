import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SCREENS } from "../../../shared/constants";
import { useAppSelector } from "../../../store/hooks";
import theme, { Box, Text } from "../../components/Theme";
import FinalMerchantSignUp from "./Merchant/FinalMerchantSignUp";
import MerchantSignUp from "./Merchant/MerchantSignUp";
import SecondMerchantSignUp from "./Merchant/SecondMerchantSignUp";
import ThirdMerchantSignUp from "./Merchant/ThirdMerchantSignUp";
import SelectRole from "./SelectRole";
import FinalUserSignUp from "./User/FinalUserSignUp";
import NextUserSignUp from "./User/NextUserSignUp";
import UserSignUp from "./User/UserSignUp";



export interface RegistrationOptions {
    onNext?(): void;
    onPrev?(): void;
    steps: number;
    totalSteps: number;
}

const Registration = (): JSX.Element => {
    const { navigate } = useNavigation();
    const { userType } = useAppSelector((state) => state.global);
    const isMerchant = userType === "merchant";

    const [steps, setSteps] = useState<number>(1);
    const [totalSteps, setTotalSteps] = useState(isMerchant ? 5 : 3);

    useEffect(() => {
        setTotalSteps(isMerchant ? 4 : 3);
    }, [isMerchant]);

    const onNext = () => {
        if (steps + 1 > 4 && !isMerchant) {
            navigate(SCREENS.UserSignUpSuccess);
            return;
        }

        if (steps + 1 > 5 && isMerchant) {
            navigate(SCREENS.MerchantSignUpSuccess);
            return;
        }

        setSteps(steps + 1);
    };

    const onPrev = () => {
        setSteps(steps - 1);
    };

    const options = { onNext, onPrev, steps: steps - 1, totalSteps };

    return (
        <Box style={styles.container}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                {steps === 1 && <SelectRole {...options} />}

                {steps === 2 && !isMerchant && <UserSignUp {...options} />}
                {steps === 2 && isMerchant && <MerchantSignUp {...options} />}

                {steps === 3 && !isMerchant && <NextUserSignUp {...options} />}
                {steps === 3 && isMerchant && <SecondMerchantSignUp {...options} />}

                {steps === 4 && !isMerchant && <FinalUserSignUp {...options} />}
                {steps === 4 && isMerchant && <ThirdMerchantSignUp {...options} />}

                {steps === 5 && isMerchant && <FinalMerchantSignUp {...options} />}
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
});

export default Registration