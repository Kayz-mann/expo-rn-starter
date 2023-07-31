import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SCREENS } from "./constants";

declare global {

    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = typeof SCREENS;

export type RootStackScreenProps<
Screen extends keyof RootStackParamList
> = NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
    DashboardNav: undefined;
    ReceiptsNav: undefined;
    ProfileNav: undefined;
    MoreNav: undefined;
}

export type RootTabScreenProps<
  Screen extends keyof RootTabParamList
> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

// export interface LoginResponse {
//     data: { access_token: string };
// }

// export interface JWTDecode {
//     account_type: string;
//     exp: number;
//     iat: number;
//     sub: string;
//     username: string;
// }