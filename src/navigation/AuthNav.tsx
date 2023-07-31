import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SCREENS } from "../../shared/constants";
import ForgotPassword from "../screens/auth/ForgotPassword/ForgotPassword";
import ForgotPasswordOTP from "../screens/auth/ForgotPassword/ForgotPasswordOTP";
import ForgotPasswordSuccess from "../screens/auth/ForgotPassword/ForgotPasswordSuccess";
import NewPassword from "../screens/auth/ForgotPassword/NewPassword";
import MerchantSignUpSuccess from "../screens/auth/Merchant/MerchantSignUpSuccess";
import Onboarding from "../screens/auth/Onboarding";
import Registration from "../screens/auth/Registration";
import SelectRole from "../screens/auth/SelectRole";
import SignIn from "../screens/auth/SignIn";
import SubmitVAT from "../screens/auth/SubmitVAT";
import SubmitVATSuccess from "../screens/auth/SubmitVATSuccess";
import UserSignUp from "../screens/auth/User/UserSignUp";
import UserSignUpSuccess from "../screens/auth/User/UserSignUpSuccess";
import BottomTabNav from "./BottomTabNav";
import SubmitVATNav from "./SubmitVATNav";

export type AuthNavParamList = {
  Onboarding: undefined;
  Registration: undefined;
  SelectRole: undefined;
  UserSignUpNav: undefined;
  PoliceSignUpNav: undefined;
  BottomTabNav: undefined;
};

const Stack = createNativeStackNavigator<AuthNavParamList>();

function AuthNav(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.Onboarding} component={Onboarding} />
      <Stack.Screen name={SCREENS.Registration} component={Registration} />
      <Stack.Screen name={SCREENS.SignIn} component={SignIn} />
      <Stack.Screen name={SCREENS.SubmitVATNav} component={SubmitVATNav} />
      <Stack.Screen name={SCREENS.UserSignUpSuccess} component={UserSignUpSuccess} />
      <Stack.Screen name={SCREENS.MerchantSignUpSuccess} component={MerchantSignUpSuccess} />
      <Stack.Screen name={SCREENS.ForgotPassword} component={ForgotPassword} />
      <Stack.Screen name={SCREENS.ForgotPasswordOTP} component={ForgotPasswordOTP} />
      <Stack.Screen name={SCREENS.NewPassword} component={NewPassword} />
      <Stack.Screen name={SCREENS.ForgotPasswordSuccess} component={ForgotPasswordSuccess} />
      <Stack.Screen name={SCREENS.BottomTabNav} component={BottomTabNav} />

    </Stack.Navigator>
  );
}

export default AuthNav;
