import {initialAuthState, AuthActionEnum, UserSettingsAuthReducer, AuthState} from "./UserSettingsAuthReducer.tsx";
import {createContext, Dispatch, ReactNode, useReducer} from "react";
import {UserSettingsAction} from "../types/UserSettingsActionType.ts";

const defaultValueType = {
    state: initialAuthState,
    dispatch: () => null,
}

export const UserSettingsAuthContext = createContext<{
    state: AuthState,
    dispatch: Dispatch<UserSettingsAction<AuthActionEnum>>
}>(defaultValueType);

interface UserSettingsAuthProviderProps {
    children: ReactNode
}

export const UserSettingsAuthProvider = ({children}: UserSettingsAuthProviderProps) => {
    const [state, dispatch] = useReducer(UserSettingsAuthReducer, initialAuthState)

    return (
        <UserSettingsAuthContext.Provider value={{state, dispatch}}>
            {children}
        </UserSettingsAuthContext.Provider>
    )
}