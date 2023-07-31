import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { SCREENS } from "../../shared/constants";
import { RootStackParamList } from "../../shared/types";
import ConvertPointSuccess from "../screens/Dashboard/ConvertPointSuccess";
import Dashboard from "../screens/Dashboard/Dashboard";
import EnterPin from "../screens/Dashboard/EnterPin";
import Notification from "../screens/Dashboard/Notification";
import Transfer from "../screens/Dashboard/Transfer";
import TransferSuccess from "../screens/Dashboard/TransferSuccess";

const Stack = createNativeStackNavigator<RootStackParamList>();

function DashboardNav(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.Dashboard} component={Dashboard} />
      <Stack.Screen name={SCREENS.Notification} component={Notification} />
      <Stack.Screen name={SCREENS.Transfer} component={Transfer} />
      <Stack.Screen name={SCREENS.EnterPin} component={EnterPin} />
      <Stack.Screen name={SCREENS.TransferSuccess} component={TransferSuccess} />
      <Stack.Screen name={SCREENS.ConvertPointSuccess} component={ConvertPointSuccess} />
    </Stack.Navigator>
  );
}

export default DashboardNav;
