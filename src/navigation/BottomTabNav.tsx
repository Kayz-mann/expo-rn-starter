import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Haptics from 'expo-haptics';
import { useTranslation } from "react-i18next";
import { SCREENS } from "../../shared/constants";
import { RootTabParamList } from "../../shared/types";
import { useAppSelector } from "../../store/hooks";
import theme from "../components/Theme";
import AuthNav from "./AuthNav";



const Tab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNav(): JSX.Element {
    const { t } = useTranslation();
    // const { userInfo } = useAppSelector((state) => state.auth);

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarAllowFontScaling: false,
                tabBarStyle: {},
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: "#919191",

            }}
        >
            <Tab.Screen
                name={SCREENS.AuthNav}
                component={AuthNav}
                options={() => ({
                    title: `${t("Home")}`,
                    tabBarShowLabel: true,
                    // tabBarIcon: ({ color }) => <HomeIcon stroke={color} />,
                })}
                listeners={() => ({
                    tabPress: () =>
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
                })}
            />

            <Tab.Screen
                name={SCREENS.AuthNav}
                component={AuthNav}
                options={() => ({
                    title: `${t("Receipts")}`,
                    tabBarShowLabel: true,
                    // tabBarIcon: ({ color }) => <ReceiptsIcon stroke={color} />,
                })}
                listeners={() => ({
                    tabPress: () =>
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
                })}
            />

            <Tab.Screen
                name={SCREENS.AuthNav}
                component={AuthNav}
                options={() => ({
                    title: `${t("Profile")}`,
                    tabBarShowLabel: true,
                    // tabBarIcon: ({ color }) => <ReceiptsIcon stroke={color} />,
                })}
                listeners={() => ({
                    tabPress: () =>
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
                })}
            />

            <Tab.Screen
                name={SCREENS.AuthNav}
                component={AuthNav}
                options={() => ({
                    title: `${t("More")}`,
                    tabBarShowLabel: true,
                    // tabBarIcon: ({ color }) => <MoreIcon stroke={color} />,
                })}
                listeners={() => ({
                    tabPress: () =>
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
                })}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNav;
