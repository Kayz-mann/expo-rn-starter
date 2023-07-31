import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { SCREENS } from "../../shared/constants";
import { RootStackParamList } from "../../shared/types";
import Profile from "../screens/Profile/Profile";


const Stack = createNativeStackNavigator<RootStackParamList>();

function ProfileNav(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.Profile} component={Profile} />
        </Stack.Navigator>
    );
}

export default ProfileNav;
