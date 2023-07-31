import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";

export type Authentication = "login" | "register" ;
export type UserType = "merchant" | "user" ;

export interface GlobalState {
    isOnline: boolean;
    pushNotificationAllowed: boolean;
    isReady: boolean;
    previousOnlineState: boolean;
    isOnboarded: boolean;
    onBoardUser?: string;
    authenticate?: Authentication;
    userType?: UserType;
}

export interface Error {
    response: { data: any }
}

const initialState: GlobalState = {
    isOnline: true,
    previousOnlineState: true,
    isReady: false,
    pushNotificationAllowed: false,
    isOnboarded: false
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setOnboarding: (state: GlobalState, action: PayloadAction<boolean>) => {
            state.isOnboarded = action.payload;
        },
        setAuthentication: (
            state: GlobalState,
            action: PayloadAction<Authentication>
        ) => {
            state.authenticate = action.payload;
        },
        setUserType: (state: GlobalState, action: PayloadAction<UserType>) => {
            state.userType = action.payload;
        },
        setIsReady: (state: GlobalState, action: PayloadAction<boolean>) => {
            state.isReady = action.payload;
        },
        setOnline: (state: GlobalState, action: PayloadAction<boolean>) => {
            state.previousOnlineState = state.isOnline;
            state.isOnline = action.payload;
        },
        setPushNotificationAllowed: (
            state: GlobalState,
            action: PayloadAction<boolean>) => { 
                state.pushNotificationAllowed = action.payload;
            },
        },
});

export const {
    setOnline,
    setOnboarding,
    setAuthentication,
    setUserType,
    setPushNotificationAllowed,
    setIsReady,
} = globalSlice.actions;

export const selectGlobal = (state: any) => state.global;
export const showOnce = (key: string) => (state: any) =>
  state.global.showOnce[key];

export default persistReducer(
  { key: "global", storage: AsyncStorage, blacklist: ["isOnline"] },
  globalSlice.reducer
);