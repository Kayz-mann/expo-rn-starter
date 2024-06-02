import * as Haptics from "expo-haptics";
import * as Clipboard from "expo-clipboard";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useState, useEffect } from "react";
import { FontAwesome6 } from "@expo/vector-icons";

import { Box, Text } from "./Theme";
import { Shadows, maskString, truncateString } from "../../shared/constants";

export type BalanceCardType = {
  walletAddress: string;
  walletBalance: number;
};

const BalanceCard = ({ walletAddress, walletBalance }: BalanceCardType) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isMasked, setIsMasked] = useState(false);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    if (isCopied) {
      timeout = setTimeout(() => setIsCopied(false), 2000); // Hide hint after 2 seconds
    }
    return () => clearTimeout(timeout);
  }, [isCopied]);

  const handleCopyToClipboard = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    Clipboard.setStringAsync(`${walletAddress}`);
    setIsCopied(true);
  };

  return (
    <LinearGradient
      colors={["#1755A6", "#1E3C72"]}
      locations={[0, 1]}
      start={{ x: 1.2, y: 1.0 }}
      style={styles.gradient}
    >
      <Text variant="text9" color="bg">
        Wallet Address:
      </Text>

      <Box style={styles.flex}>
        <Text variant="text2" color="bg" mt="m" mr="l">
          {truncateString(walletAddress)}
        </Text>
        <TouchableOpacity
          onPress={handleCopyToClipboard}
          style={{
            backgroundColor: "inherit",
            ...Shadows.small,
            marginTop: 5,
          }}
        >
          <FontAwesome6 name="file-clipboard" size={16} color="white" />
        </TouchableOpacity>
      </Box>

      {isCopied && (
        <Animated.Text style={[styles.copiedHint, { opacity: 1 }]}>
          Copied
        </Animated.Text>
      )}

      <Box mt="xxl">
        <Text variant="text9" color="bg">
          Wallet Balance:
        </Text>

        <Box style={styles.walletFlex}>
          <Text mt="m" variant="title2" color="bg">
            {isMasked
              ? maskString(walletBalance as unknown as string)
              : walletBalance}{" "}
            SOL
          </Text>
          <TouchableOpacity
            style={{ ...Shadows.small }}
            onPress={() => setIsMasked(!isMasked)}
          >
            {isMasked ? (
              <Feather name="eye-off" size={16} color="white" />
            ) : (
              <Feather name="eye" size={16} color="white" />
            )}
          </TouchableOpacity>
        </Box>
      </Box>
    </LinearGradient>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  gradient: {
    height: hp(18),
    width: wp(90),
    borderRadius: 25,
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  copiedHint: {
    position: "absolute",
    bottom: 10,
    right: 20,
    color: "white",
    fontSize: 14,
  },
  walletFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
