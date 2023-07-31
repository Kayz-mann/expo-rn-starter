import React from 'react';
import { View, Animated, useWindowDimensions, StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import theme from './Theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 4,
    },
    dot: {
        borderRadius: hp(0.5),
        backgroundColor: theme.colors.secondary,
        marginHorizontal: wp(1.5),
    },
});

interface Props {
    data: any;
    scrollX: any;
    // eslint-disable-next-line react/require-default-props
    width?: number;
    // eslint-disable-next-line react/require-default-props
    height?: number;
}

const Paginator = ({ data, scrollX, width, height }: Props): JSX.Element => {
    const { width: windowWidth } = useWindowDimensions();

    return (
        <View style={styles.container}>
            {data.map((_: any, index: number) => {
                const inputRange = [
                    (index - 1) * windowWidth,
                    index * windowWidth,
                    (index + 1) * windowWidth,
                ];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [6, 32, 6],
                    extrapolate: 'clamp',
                });

                const dotOpacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View
                        key={index.toString()}
                        style={[
                            styles.dot,
                            {
                                opacity: dotOpacity,
                                width: dotWidth || 6,
                                height: height || 5,
                            },
                        ]}
                    />
                );
            })}
        </View>
    );
};

export default Paginator;
