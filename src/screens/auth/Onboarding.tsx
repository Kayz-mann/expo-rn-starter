//import liraries
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Animated, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";

import {
    heightPercentageToDP,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import * as NavigationService from "react-navigation-helpers";
import { SCREENS } from "../../../shared/constants";
import Button from "../../components/Button";
import OnboardingSlider, { data } from "../../components/OnboardingSlider";
import theme, { Box, Text } from "../../components/Theme";
import i18n from "../../components/i18n";
import Paginator from "../../components/Paginator";
import OnboardingImageSlider, { ImageData } from "../../components/OnboardingImageSlider";



export interface OnboardingProps {
    skip?(): void;
}

const Onboarding = ({ skip }: OnboardingProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const [scrollingRightSideAmount, setScrollingRightSideAmount] = useState(0);
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    const slidesRef1 = useRef<any>();
    const slidesRef2 = useRef<any>();

    const { t } = useTranslation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <Box style={styles.content}>
                <Box style={{ marginTop: 40, marginLeft: 20, position: 'absolute' }}>
                    <Image source={require('../../../assets/images/ura.png')} />
                </Box>
                <Animated.FlatList
                    data={ImageData}
                    renderItem={({ item }: any) => {
                        return (
                            <Box key={item}>
                                <OnboardingImageSlider
                                    image={item.image}
                                    width={item.width}
                                    height={item.height}
                                />
                            </Box>
                        );
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item: any) => item.id.toString()}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {
                            useNativeDriver: false,
                        }
                    )}
                    style={{
                        height: heightPercentageToDP("60%"),
                    }}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef1}
                />


                <Box style={{ flex: 1, marginTop: heightPercentageToDP(-55), backgroundColor: theme.colors.primary, borderTopRightRadius: 50, borderTopLeftRadius: 50 }}>
                    <Box style={{ alignItems: 'center', marginTop: 30 }}>
                        <Paginator data={data} scrollX={scrollX} />
                    </Box>

                    <Animated.FlatList
                        data={data}
                        renderItem={({ item }: any) => {
                            return (
                                <Box key={item}>
                                    <OnboardingSlider
                                        text={item.text}
                                        subText={item.subText}
                                        width={item.width}
                                        height={item.height}
                                    />
                                </Box>
                            );
                        }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces={false}
                        keyExtractor={(item: any) => item.id.toString()}
                        scrollEventThrottle={32}
                        onScroll={e => {
                            setScrollingRightSideAmount(e.nativeEvent.contentOffset.x)
                            slidesRef1.current.scrollToOffset({ offset: e.nativeEvent.contentOffset.x, animated: true });
                        }}
                        onViewableItemsChanged={viewableItemsChanged}
                        viewabilityConfig={viewConfig}
                        ref={slidesRef2}
                    />

                    <Box
                        style={{
                            alignItems: "center",
                            marginBottom: heightPercentageToDP(2),
                            marginTop: 4
                        }}
                    >
                        <Button
                            type={"secondary"}
                            label={t("Register")}
                            onPress={() => {
                                skip?.();
                                NavigationService.navigate(SCREENS.Registration);
                            }}
                        />
                        <Box mt="l">
                            <Button
                                type={"secondaryAlert"}
                                label={t("Sign In")}
                                onPress={() => {
                                    skip?.();
                                    setTimeout(() => {
                                        NavigationService.navigate(SCREENS.SignIn);
                                    }, 500);
                                }}
                            />
                        </Box>
                    </Box>
                </Box>


            </Box>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.bg,
        alignItems: "center",
        flex: 1,
        // justifyContent: 'center'
    },
    content: {
        // width: wp(90),
    },
});

//make this component available to the app
export default Onboarding;
