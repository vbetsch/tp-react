import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MorpionPage} from "./modules/morpion/MorpionPage.tsx";
import {HomePage} from "./components/HomePage.tsx";
import {MiniBlogPage} from "./modules/miniblog/MiniBlogPage.tsx";
import {LoginPage} from "./modules/usersettings/subpages/LoginPage.tsx";
import {RegisterPage} from "./modules/usersettings/subpages/RegisterPage.tsx";

export const Router = () => {
    return (
        <BrowserRouter basename={"/"}>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/morpion" element={<MorpionPage/>}/>
                <Route path="/miniblog" element={<MiniBlogPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}