import { PublicKey } from "@solana/web3.js";
import { Platform } from "react-native";

export enum SCREENSTYPES {
    HomeNav = "HomeNav",
    Home = "Home",
    Transactions = "Transactions",
}

export const SCREENS: {[key in SCREENSTYPES]: any} = {
    ...Object.values(SCREENSTYPES)
} as any;

Object.keys(SCREENSTYPES).forEach((i) => {
    SCREENS[i as SCREENSTYPES] = i
})

export const isAndroid = Platform.OS === "android"
export const isIOS = Platform.OS === "ios"



export const isValidPublicKey = (address: string): boolean => {
  try {
    new PublicKey(address);
    return true;
  } catch (e) {
    return false;
  }
};

export const truncateString = (str: string, startLength = 12, endLength = 4) => {
  if (str.length <= startLength + endLength) {
    return str;
  }
  return `${str.slice(0, startLength)}...${str.slice(-endLength)}`;
};

export const maskString = (value: string | number): string => {
  // Convert the input to a string if it's a number
  const stringValue = value.toString();

  // Replace each character with '*'
  return stringValue.replace(/./g, '*');
}


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

