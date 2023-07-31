import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { RootStackParamList } from "../../shared/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

function DashboardNav(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name={SCREENS.Dashboard} component={Dashboard} /> */}
    </Stack.Navigator>
  );
}

export default DashboardNav;
