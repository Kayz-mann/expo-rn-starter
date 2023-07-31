import { Platform } from "react-native";

export enum SCREENSTYPES {
    AuthNav = "AuthNav",
    Onboarding = "Onboarding",
    Home = "Home",
}

export const SCREENS: {[key in SCREENSTYPES]: any} = {
    ...Object.values(SCREENSTYPES)
} as any;

Object.keys(SCREENSTYPES).forEach((i) => {
    SCREENS[i as SCREENSTYPES] = i
})

export const isAndroid = Platform.OS === "android"
export const isIOS = Platform.OS === "ios"


export const Shadows = {
    small: {
      shadowColor: "#ECECEC",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.30,
      shadowRadius: 3.84,
  
      elevation: 2,
    },
    large: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.20,
      shadowRadius: 5.27,
  
      elevation: 4,
    },
  };

