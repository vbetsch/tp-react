import {createBrowserRouter} from "react-router-dom";
import {MorpionPage} from "./modules/morpion/MorpionPage.tsx";
import {HomePage} from "./components/HomePage.tsx";
import {MiniBlogPage} from "./modules/miniblog/MiniBlogPage.tsx";
import {UserSettingsPage} from "./modules/usersettings/subpages/UserSettingsPage.tsx";
import {LoginPage} from "./modules/usersettings/subpages/LoginPage.tsx";
import {RegisterPage} from "./modules/usersettings/subpages/RegisterPage.tsx";

export const Router = createBrowserRouter([
    {
        path: "",
        element: <HomePage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/morpion",
        element: <MorpionPage/>
    },
    {
        path: "/miniblog",
        element: <MiniBlogPage/>
    },
    {
        path: "/usersettings",
        element: <UserSettingsPage/>
    }
]);