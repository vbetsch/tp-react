import {MainPage} from "./templates/MainPage.tsx";
import {Link} from "react-router-dom";

export const HomePage = () => {
    return (
        <MainPage name={"home"}>
            <h1>Home</h1>
            <Link to={"/morpion"}>Morpion</Link>
            <Link to={"/miniblog"}>Mini-Blog</Link>
        </MainPage>
    )
}