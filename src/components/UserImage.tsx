import { Image } from "@motify/components";
import React from "react";
import theme, { Box } from "./Theme";

interface Props {
  width?: number;
  height?: number;
  bgColor?: any;
  border?: any;
  imageUrl?: any;
}

const UserImage: React.FC<Props> = ({
  width,
  height,
  bgColor,
  border,
  imageUrl,
}) => {
  // const uri = "www.alt.com";

  return (
    <Box style={{ alignItems: "center" }}>
      <Image
        source={imageUrl}
        style={{
          width: width || 24,
          height: height || 24,
          backgroundColor: bgColor ? bgColor : theme.colors.gray,
          borderRadius: 100,
          borderWidth: border ? 2 : 0,
          borderColor: border ? border : null,
        }}
      />
    </Box>
  );
};

export default UserImage;