import React from "react";
import { View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { RegistrationOptions } from "../screens/auth/Registration";
import theme, { Box } from "./Theme";

const RegistrationSteps = ({ steps, totalSteps }: RegistrationOptions) => {
  return (
    <Box style={{ width: widthPercentageToDP("100%"), flexDirection: "row" }}>
      {new Array(totalSteps).fill(0).map((_, idx) => {
        const color = steps >= idx + 1 ? theme.colors.primary : theme.colors.border;

        return (
          <View
            style={{
              width: `${80 / totalSteps}%`,
              height: 3,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: color,
              shadowColor: color,
              shadowOpacity: 0.6,
              marginHorizontal: 2,
              shadowRadius: 2,
              elevation: 6,
              backgroundColor: color,
            }}
          />
        );
      })}
    </Box>
  );
};

export default RegistrationSteps;
