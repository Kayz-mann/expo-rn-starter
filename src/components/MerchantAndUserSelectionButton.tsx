import { View } from "@motify/components";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ImageBackground, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { UserType } from "../../store/global";
import CheckedMerchant from "../svg/SelectRole/CheckedMerchant";
import CheckedUser from "../svg/SelectRole/CheckedUser";
import UncheckedMerchant from "../svg/SelectRole/UncheckedMerchant";
import UncheckedUser from "../svg/SelectRole/UncheckedUser";
import theme, { Box, Text } from "./Theme";

export interface MerchantAndUserSelectionButtonProps {
    userRole: UserType;
    selected: boolean;
}

const MerchantAndUserSelectionButton = ({
    userRole,
    selected,
}: MerchantAndUserSelectionButtonProps) => {
    const { t } = useTranslation();

    const getImage = useCallback(() => {
        // switch (userRole) {
        //     case "merchant":
        //         return selected
        //             ? require("../../assets/images/merchant-checked.png")
        //             : require("../../assets/images/merchant-unchecked.png");
        //     case "user":
        //         return selected
        //             ? <Box style={styles.uncheckedUser}>
        //                 <Text>Hey</Text>
        //             </Box>
        //             : (
        //                 <Box style={styles.uncheckedUser}>
        //                     <Text>Hey</Text>
        //                 </Box>
        //             )
        // }


    }, [userRole, selected]);

    const userSelect = () => {
        switch (userRole) {
            case "merchant":
                return selected
                    ? <Box style={styles.checkedMerchant}>
                        <CheckedMerchant />
                        <Text textAlign="center" variant="text11" color="bg12" mt="xxl">Merchant</Text>
                    </Box>
                    : (
                        <Box style={styles.uncheckedMerchant}>
                            <UncheckedMerchant />
                            <Text textAlign="center" variant="text11" color="text1" mt="xxl">Merchant</Text>
                        </Box>
                    )
            case "user":
                return selected
                    ? <Box style={styles.checkedUser}>
                        <CheckedUser />
                        <Text textAlign="center" variant="text11" color="primary" mt="xxl">User</Text>
                    </Box>
                    : (
                        <Box style={styles.uncheckedUser}>
                            <UncheckedUser />
                            <Text textAlign="center" variant="text11" color="text1" mt="xxl">User</Text>
                        </Box>
                    )
        }
    }

    return (
        <View
            style={{
                // width: widthPercentageToDP("30%"),

            }}
        >

            <Box>
                <Text>{userSelect()}</Text>
            </Box>
        </View>
    );
};

const styles = StyleSheet.create({
    uncheckedUser: {
        width: widthPercentageToDP(44),
        height: 214,
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: theme.colors.bg9,
        borderColor: theme.colors.bg8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    checkedUser: {
        width: widthPercentageToDP(44),
        height: 214,
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: theme.colors.bg9,
        borderColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    uncheckedMerchant: {
        width: widthPercentageToDP(44),
        height: 214,
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: theme.colors.bg11,
        borderColor: theme.colors.bg10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    checkedMerchant: {
        width: widthPercentageToDP(44),
        height: 214,
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: theme.colors.bg11,
        borderColor: theme.colors.bg12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
})

export default MerchantAndUserSelectionButton;
