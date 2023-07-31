import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { SCREENS } from "../../shared/constants";
import { RootStackParamList } from "../../shared/types";
import Receipts from "../screens/Receipts/Receipts";
import VATPaid from "../screens/Receipts/VATPaid";


const Stack = createNativeStackNavigator<RootStackParamList>();

function ReceiptsNav(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.Dashboard} component={Receipts} />
            <Stack.Screen name={SCREENS.VATPaid} component={VATPaid} />
        </Stack.Navigator>
    );
}

export default ReceiptsNav;
