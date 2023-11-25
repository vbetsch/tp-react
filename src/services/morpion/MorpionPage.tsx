import {MainPage} from "../../components/templates/MainPage.tsx";
import {Game} from "./Game.tsx";

export const MorpionPage = () => {
    const shape = "X"

    return (
        <MainPage name={"morpion"}>
            <h1>Morpion</h1>
            <h3>It's up to player {shape}</h3>
            <Game colNumber={3} rowNumber={3} shape={shape}/>
        </MainPage>
    )
}