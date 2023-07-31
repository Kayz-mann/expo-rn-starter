import { Platform } from "react-native";

export enum SCREENSTYPES {
    AuthNav = "AuthNav",
    Onboarding = "Onboarding",
    Registration = "Registration",
    SelectRole = "SelectRole",
    SignIn = "SignIn",
    UserSignUp = "UserSignUp",
    UserSignUpSuccess = "UserSignUpSuccess",
    NextUserSignUp = "NextUserSignUp",
    FinalUserSignUp = "FinalUserSignUp",
    MerchantSignUp = "MerchantSignUp",
    SecondMerchantSignUp = "SecondMerchantSignUp",
    ThirdMerchantSignUp = "ThirdMerchantSignUp",
    FinalMerchantSignUp = "FinalMerchantSignUp",
    MerchantSignUpSuccess = "MerchantSignUpSuccess",
    SubmitVATNav = "SubmitVATNav",
    SubmitVAT = "SubmitVAT",
    SubmitVATSuccess = "SubmitVATSuccess",
    ForgotPassword = "ForgotPassword",
    ForgotPasswordOTP = "ForgotPasswordOTP",
    NewPassword = "NewPassword",
    ForgotPasswordSuccess = "ForgotPasswordSuccess",
    BottomTabNav = "BottomTabNav",
    DashboardNav = "DashboardNav",
    Dashboard = "Dashboard",
    ReceiptsNav = "ReceiptsNav",
    Receipts = "Receipts",
    ProfileNav = "ProfileNav",
    Profile = "Profile",
    MoreNav = "MoreNav",
    More = "More",
    Notification = "Notification",
    Transfer = "Transfer",
    EnterPin = "EnterPin",
    TransferSuccess = "TransferSuccess",
    ConvertPointsNav = "ConvertPointsNav",
    ConvertPointSuccess = "ConvertPointSuccess",
    Security = "Security",
    Password = "Password",
    PIN = "PIN",
    DeleteAccount = "DeleteAccount",
    VATPaid = "VATPaid",

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

