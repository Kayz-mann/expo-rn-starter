import React, { FC, useRef } from "react";
import { StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import i18n from "./i18n";
import Paginator from "./Paginator";

import theme, { Box, Text } from "./Theme";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: wp(100),
        // marginTop: hp(20),
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
    },
});

export const data = [
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
        text: i18n.t("Manage & Pay for your\n Taxes"),
        subText: i18n.t(
            "Stay ahead of the curve; never miss an important update about your vehicle"
        ),
        height: 320,
        width: 299,
    },

    {
        id: 3,
        image: require("../../assets/images/onboarding1.png"),
        // footerImage: require("../../../assets/images/bottom3.png"),
        text: i18n.t("Submit Your VATs &\n Win Big"),
        subText: i18n.t(
            "Stay up to date the highway codes, and traffic rules. Learn about contraventions"
        ),
        height: 320,
        width: 299,
    },
];

interface Props {
    image?: any;
    text: string;
    subText: string;
    width: number;
    height: number;
}

const OnboardingSlider: FC<Props> = ({
    image,
    text,
    width,
    height,
    subText,
}) => {

    return (
        <Box style={styles.container}>
            {/* <Box style={styles.circle}>
        <Image
          source={image}
          style={{
            width,
            height,
            position: "absolute",
            top: -80,
          }}
        />
      </Box> */}

            <Box style={{ marginTop: 10 }}>
                <Text
                    variant="title1"
                    color="bg"
                    style={{
                        ...styles.topText,
                    }}
                    allowFontScaling={false}
                >
                    {text}
                </Text>

                <Text
                    color="bg"
                    style={{
                        ...styles.topText,
                        ...(theme.textVariants.text1 as any),
                        fontFamily: "Gilroy-Regular",
                        fontSize: 16,
                    }}
                    allowFontScaling={false}
                >
                    {subText}
                </Text>
            </Box>
        </Box>
    );
};

export default OnboardingSlider;
