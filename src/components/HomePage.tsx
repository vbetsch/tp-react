import {MainPage} from "./templates/MainPage.tsx";
import {Link} from "react-router-dom";

export const HomePage = () => {
    return (
        <MainPage title={"Home"}>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/morpion"}>Morpion</Link>
            <Link to={"/miniblog"}>MiniBlog</Link>
            <Link to={"/usersettings"}>UserSettings</Link>
        </MainPage>
    )
}