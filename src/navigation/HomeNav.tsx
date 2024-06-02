import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SCREENS } from "../../shared/constants";
import Home from "../screens/Home";
import { Transaction } from "@solana/web3.js";
import Transactions from "../screens/Transactions";

export type HomeNavParamList = {
  Home: undefined;
  Transactions: undefined;
};

const Stack = createNativeStackNavigator<HomeNavParamList>();

function HomeNav(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.Home} component={Home} />
      <Stack.Screen name={SCREENS.Transactions} component={Transactions} />
    </Stack.Navigator>
  );
}

export default HomeNav;
