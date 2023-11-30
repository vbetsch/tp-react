import {initialAuthState, AuthActionEnum, UserSettingsAuthReducer, AuthState} from "./UserSettingsAuthReducer.tsx";
import {createContext, Dispatch, ReactNode, useReducer} from "react";
import {UserSettingsAction} from "../types/UserSettingsActionType.ts";

export const UserSettingsAuthContext = createContext<[AuthState, Dispatch<UserSettingsAction<AuthActionEnum>>]>([
    initialAuthState,
    () => null,
]);

interface UserSettingsAuthProviderProps {
    children: ReactNode
}

export const UserSettingsAuthProvider = ({children}: UserSettingsAuthProviderProps) => {
    const [state, dispatch] = useReducer(UserSettingsAuthReducer, initialAuthState)

    return (
        <UserSettingsAuthContext.Provider value={[state, dispatch]}>
            {children}
        </UserSettingsAuthContext.Provider>
    )
}