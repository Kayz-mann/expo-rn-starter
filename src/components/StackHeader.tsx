import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather as Icon } from "@expo/vector-icons";

import theme, { Box, Text } from "./Theme";

interface Props {
  title?: string;
  rightHandTitle?: string;
  onBackPress?: () => void;
  icon1?: React.ReactNode;
  icon2?: React.ReactNode;
  onPressIcon1?: () => void;
  onPressIcon2?: () => void;
  iconLeft?: React.ReactNode;
  onPressIconLeft?: () => void;
  wrapperStyle?: ViewStyle;
  iconSpacing?: boolean;
}

const StackHeader: FC<Props> = ({
  title,
  wrapperStyle,
  rightHandTitle,
  onBackPress,
  icon1,
  icon2,
  onPressIcon1,
  onPressIcon2,
  iconLeft,
  onPressIconLeft,
  iconSpacing
}) => {
  return (
    <Box style={[styles.container, wrapperStyle]}>
      <Box
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "70%",
          justifyContent: "center",
        }}
      >
        <Text
          variant="title3"
          style={[{ alignItems: "center", fontSize: 20 }]}
          allowFontScaling={false}
        >
          {title}
        </Text>
      </Box>

      {onBackPress && (
        <TouchableOpacity
          onPress={onBackPress}
          style={styles.burgerOnBackPress}
        >
          <Icon name="chevron-left" color={theme.colors.black} size={24} />
        </TouchableOpacity>
      )}

      {iconLeft && (
        <TouchableOpacity
          onPress={onPressIconLeft}
          style={styles.burgerOnBackPress1}
        >
          <Text>{iconLeft}</Text>
        </TouchableOpacity>
      )}

      {icon1 && (
        <TouchableOpacity onPress={onPressIcon1} style={styles.icon1Container}>
          <Text style={{ marginRight: iconSpacing ? 30 : 0 }}>{icon1}</Text>
        </TouchableOpacity>
      )}

      {icon2 && (
        <TouchableOpacity onPress={onPressIcon2} style={styles.icon1Container}>
          <Text>{icon2}</Text>
        </TouchableOpacity>
      )}
    </Box>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    height: hp(7),
    justifyContent: "center",
    width: wp(100),
    // borderBottomWidth: 0.5,
    // borderColor: 'rgba(60, 60, 67, 0.36)',
  },
  burgerOnBackPress: {
    width: 45,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 4,
    flexDirection: "row",
  },

  burgerOnBackPress1: {
    width: 45,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: -18,
    left: 4,
    flexDirection: "row",
  },
  icon1Container: {
    position: "absolute",
    right: 20,
  },
});

export default StackHeader;
