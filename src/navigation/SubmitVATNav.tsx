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
import UserSignUpSuccess from "../screens/auth/User/UserSignUpSuccess";

export type SubmitVATNavParamList = {
  Onboarding: undefined;
  Registration: undefined;
  SelectRole: undefined;
  UserSignUpNav: undefined;
  PoliceSignUpNav: undefined;
};

const Stack = createNativeStackNavigator<SubmitVATNavParamList>();

function SubmitVATNav(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.SubmitVAT} component={SubmitVAT} />
      <Stack.Screen name={SCREENS.SubmitVATSuccess} component={SubmitVATSuccess} />
      <Stack.Screen name={SCREENS.SignIn} component={SignIn} />
    </Stack.Navigator>
  );
}

export default SubmitVATNav;
