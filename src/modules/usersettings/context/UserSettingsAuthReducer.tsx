import {UserSettingsUser} from "../types/UserSettingsUserType.ts";
import {UserSettingsAction} from "../types/UserSettingsActionType.ts";

export enum AuthActionEnum {
    SET_LOADING = 'SET_LOADING',
    REGISTER = 'REGISTER',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export interface AuthState {
    users: UserSettingsUser[],
    currentUser: UserSettingsUser | undefined,
    isLoading: boolean,
}

export const initialAuthState: AuthState = {
    users: [],
    currentUser: undefined,
    isLoading: false,
}

export const UserSettingsAuthReducer = (state: AuthState, action: UserSettingsAction<AuthActionEnum>) => {
    switch (action.type) {
        case AuthActionEnum.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case AuthActionEnum.REGISTER:
            return {
                ...state,
                isLoading: false,
                users: [...state.users, action.payload]
            };
        case AuthActionEnum.LOGIN:
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload,
            };
        case AuthActionEnum.LOGOUT:
            return {
                ...state,
                isLoading: false,
                currentUser: undefined,
            };
        default:
            return state;
    }
}