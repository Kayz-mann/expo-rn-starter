import React, { FC, useRef } from "react";
import { StyleSheet, Image, TouchableOpacity, Text, Animated } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import i18n from "./i18n";
import Paginator from "./Paginator";

import theme, { Box } from "./Theme";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: wp(100),
        marginTop: hp(20),
    },
    topText: {
        marginTop: hp(1),
        width: wp(90),
        textAlign: "center",
    },
    bottomText: {
        marginTop: hp(1),
        width: wp(70),
        textAlign: "center",
        flexWrap: 'wrap',
    },
    circle: {
        height: wp(70),
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 80
    },
});

export const ImageData = [
    {
        id: 1,
        image: require("../../assets/images/onboarding1.png"),
        // footerImage: require("../../../assets/images/onboarding1.png"),
        text: i18n.t("Welcome to URA \n MyFriendlyVAT App"),
        subText: i18n.t(
            "lorem information, insurance, renewals, and management ipsum"
        ),
        height: 400,
        width: 299,
    },
    {
        id: 2,
        image: require("../../assets/images/onboarding1.png"),
        // footerImage: require("../../../assets/images/bottom2.png"),
        text: i18n.t("Keep Your Records Up To Date"),
        subText: i18n.t(
            "Stay ahead of the curve; never miss an important update about your vehicle"
        ),
        height: 400,
        width: 299,
    },

    {
        id: 3,
        image: require("../../assets/images/onboarding1.png"),
        // footerImage: require("../../../assets/images/bottom3.png"),
        text: i18n.t("Get Key Insights On Road Traffic Rules"),
        subText: i18n.t(
            "Stay up to date the highway codes, and traffic rules. Learn about contraventions"
        ),
        height: 400,
        width: 299,
    },
];

interface Props {
    image?: any;
    width?: string | number;
    height: string | number;

}

const OnboardingSlider: FC<Props> = ({
    image,
    width,
    height

    // footerWidth,
}) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <Box style={styles.container}>
            <Box style={styles.circle}>
                <Image
                    source={image}
                    style={{
                        width,
                        height,
                        position: "absolute",
                        top: -80,
                    }}
                />
            </Box>
        </Box>
    );
};

export default OnboardingSlider;
