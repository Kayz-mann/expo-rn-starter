import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { RootState } from "..";
// import { MerchantDto, UserDto } from "../../api/auth";


export interface Auth {
    token: string;
    refreshToken: string;
    expiresAt: Date;
}

export interface Token {
    accessToken: string;
    refreshToken: string;
    expiresAt: Date;
}

interface UserDto {
    username: string;
    password: string;
    address: string;
}

interface MerchantDto {
    username: string;
    password: string;
    address: string;
}







interface AuthState {
    token?: Token;
    deviceId?: string;
    isUserOnboarded: boolean;
    userRegistration: UserDto | undefined;
    tempToken?: Token;
    userInfo?: UserDto | MerchantDto | any;
}

const initialState: AuthState = {
    isUserOnboarded: false,
    userRegistration: undefined,

};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        setUserRegistration: (state, action: PayloadAction<UserDto>) => {
            state.userRegistration = undefined;
            state.userRegistration = { ...action.payload } as any;
        },
        setUserInfo: (state, action: PayloadAction<any>) => {
            state.userInfo = {
                ...state.userInfo,
                ...action.payload,
            };
        },
        setToken: (state, action: PayloadAction<Token>) => {
            state.token = undefined;
            state.token = action.payload;
        },
        setTempToken: (state, action: PayloadAction<Token>) => {
            state.tempToken = action.payload;
        },
        setUserOnboarded: (state, action: PayloadAction<boolean>) => {
            state.isUserOnboarded = action.payload;
        },
        setLoginResponse: (state, action: PayloadAction<Auth>) => {
            state.token = {
                accessToken: action.payload.token,
                expiresAt: action.payload.expiresAt,
                refreshToken: action.payload.refreshToken,
            };
        },
        reset: (state) => {
            state.token = undefined;
            state.userRegistration = undefined;
            state.userInfo = undefined;
            state.tempToken = undefined;
        },
    },
});

export const {
    setToken,
    setLoginResponse,
    setTempToken,
    reset,
    setUserRegistration,
    setUserOnboarded,
    setUserInfo,
} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

const persistConfig = {
    key: "auth",
    storage: AsyncStorage,
};

export default persistReducer(persistConfig, authSlice.reducer);
