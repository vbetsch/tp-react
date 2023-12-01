import {Router} from "./Router.tsx";
import {UserSettingsAuthProvider} from "./modules/usersettings/context/UserSettingsAuthProvider.tsx";
import React from "react";

export default function App(): React.JSX.Element {
    return (
        <div className="app">
            <UserSettingsAuthProvider>
                <Router/>
            </UserSettingsAuthProvider>
        </div>
    )
}