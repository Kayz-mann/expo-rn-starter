import { View } from "@motify/components";
import React, { useEffect, useRef } from "react";
import { ActivityIndicator } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export interface LoadingIndicatorProps {
  isLoading?: boolean;
}

const LoadingIndicator = ({ isLoading }: LoadingIndicatorProps) => {
  const rbSheetRef = useRef<RBSheet>();
  const color = "#fff";

  useEffect(() => {
    if (isLoading) {
      rbSheetRef.current?.open();
    } else {
      rbSheetRef.current?.close();
    }
  }, [isLoading]);

  return (
    <RBSheet
      ref={rbSheetRef as any}
      height={heightPercentageToDP("100%")}
      closeOnDragDown={false}
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: "transparent",
        },
      }}
      closeOnPressMask={false}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: widthPercentageToDP("100%"),
          height: heightPercentageToDP("100%"),
          backgroundColor: "transparent",
        }}
      >
        <ActivityIndicator color={"#fff"} size={100} />
      </View>
    </RBSheet>
  );
};

export default LoadingIndicator;
