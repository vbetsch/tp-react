import {createBrowserRouter} from "react-router-dom";
import {MorpionPage} from "./modules/morpion/MorpionPage.tsx";
import {HomePage} from "./components/HomePage.tsx";
import {MiniBlogPage} from "./modules/miniblog/MiniBlogPage.tsx";
import {UserSettingsPage} from "./modules/usersettings/UserSettingsPage.tsx";

export const Router = createBrowserRouter([
    {
        path: "",
        element: <HomePage/>
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