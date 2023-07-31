import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SCREENS } from "../../shared/constants";
import { View, Text } from "react-native";
import Onboarding from "../screens/auth/Onboarding";


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
    </Stack.Navigator>
  );
}

export default AuthNav;
