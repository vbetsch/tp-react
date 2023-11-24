import {MainPage} from "../../components/templates/MainPage.tsx";
import {Game} from "./Game.tsx";

export const MorpionPage = () => {
    return (
        <MainPage>
            <h1>Morpion</h1>
            <Game/>
        </MainPage>
    )
}