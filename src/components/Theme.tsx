import {
  createTheme,
  createText,
  createBox,
  VariantProps,
  createVariant,
  createRestyleComponent,
} from "@shopify/restyle";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const theme = createTheme({
  colors: {
    //background color
    bg: "#FFFFFF",
    bg1: "#D9D9D9",
    bg2: "#427AC3",
    bg3: "#F6F6F6",
    bg4: "#3FCE78",
    bg5: "#EB311D",
    bg6: "#F2F2F2",
    bg7: "#F4F4F4",
    bg8: "#AED1FF",
    bg9: "#EAF3FF",
    bg10: "#F9EA8A",
    bg11: "#FFFCEA",
    bg12: "#E9C717",

    primary: "#1755A6",
    secondary: "#FFF200",

    error: "#D90000",
    black: "#000000",
    gray: "#686868",
    orange: "#FF7300",
    green: "#379278",

    border: "#DBDBDB",
    border1: "#003861",
    border3: "#DFDFDF",

    //text color
    text: "#4F4F4F",
    text1: "#282828",
    text2: "#303030",
    text3: "#B9B9B9",
    text4: "#B8D7FF",
    text5: "#7B5A0A",
    text6: "#007B31",
  },
  // fonts
  textVariants: {
    title1: {
      fontSize: 26,
      fontFamily: "Gilroy-Bold",
      fontWeight: "700",
      lineHeight: 35.57,
    },
    title2: {
      fontSize: 26,
      fontFamily: "Gilroy-Bold",
      fontWeight: "700",
      lineHeight: 29.17,
    },
    title3: {
      fontSize: 24,
      fontFamily: "Gilroy-Bold",
      fontWeight: "700",
      lineHeight: 32.19,
    },
    title4: {
      fontSize: 32,
      fontFamily: "Gilroy-Bold",
      fontWeight: "700",
      lineHeight: 37.41,
    },
    text1: {
      fontSize: 16,
      fontFamily: "Gilroy-Regular",
      fontWeight: "400",
      lineHeight: 25.25,
    },
    text2: {
      fontSize: 16,
      fontFamily: "Gilroy-Regular",
      fontWeight: "500",
      lineHeight: 16.98,
    },
    text3: {
      fontSize: 16,
      fontFamily: "Gilroy-Regular",
      fontWeight: "700",
      lineHeight: 24.77,
    },
    text4: {
      fontSize: 15,
      fontFamily: "Gilroy-Regular",
      fontWeight: "700",
      lineHeight: 20.4,
    },

    text5: {
      fontSize: 14,
      fontFamily: "Gilroy-Regular",
      fontWeight: "500",
      lineHeight: 16.98,
    },
    text6: {
      fontSize: 16,
      fontFamily: "Gilroy-Bold",
      fontWeight: "600",
      lineHeight: 19.6,
    },
    text7: {
      fontSize: 14,
      fontFamily: "Gilroy-Regular",
      fontWeight: "400",
      lineHeight: 16.8,
    },
    text8: {
      fontSize: 13,
      fontFamily: "Gilroy-Regular",
      fontWeight: "500",
      lineHeight: 15.77,
    },
    text9: {
      fontSize: 11,
      fontFamily: "Gilroy-Regular",
      fontWeight: "600",
      lineHeight: 13.48,
    },
    text10: {
      fontSize: 20,
      fontFamily: "Gilroy-Bold",
      fontWeight: "600",
      lineHeight: 24.5,
    },
    text11: {
      fontSize: 18,
      fontFamily: "Gilroy-Regular",
      fontWeight: "500",
      lineHeight: 21.83,
    },

    defaults: {
      // We can define defaults for the variant here.
      // This will be applied after the defaults passed to createVariant and before the variant defined below.
    },
  },
  layout: {
    screenWidth: wp(90),
  },

  spacing: {
    xs: 2.5,
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
    xxl: 30,
    xxxl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();

export default theme;
