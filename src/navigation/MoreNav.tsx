import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { SCREENS } from "../../shared/constants";
import { RootStackParamList } from "../../shared/types";
import DeleteAccount from "../screens/More/DeleteAccount";
import More from "../screens/More/More";
import Password from "../screens/More/Password";
import PIN from "../screens/More/PIN";
import Security from "../screens/More/Security";

const Stack = createNativeStackNavigator<RootStackParamList>();

function MoreNav(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.More} component={More} />
            <Stack.Screen name={SCREENS.Security} component={Security} />
            <Stack.Screen name={SCREENS.Password} component={Password} />
            <Stack.Screen name={SCREENS.PIN} component={PIN} />
            <Stack.Screen name={SCREENS.DeleteAccount} component={DeleteAccount} />
        </Stack.Navigator>
    );
}

export default MoreNav;
