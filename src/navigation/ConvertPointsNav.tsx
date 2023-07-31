import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SCREENS } from "../../shared/constants";
import ConvertPointSuccess from "../screens/Dashboard/ConvertPointSuccess";


export type ConvertPointsNavParamList = {
    ConverPointSuccess: undefined;
};

const Stack = createNativeStackNavigator<ConvertPointsNavParamList>();

function ConvertPointsNav(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.ConvertPointSuccess} component={ConvertPointSuccess} />
    </Stack.Navigator>
  );
}

export default ConvertPointsNav;
