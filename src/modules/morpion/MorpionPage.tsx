import {MainPage} from "../../components/templates/MainPage.tsx";
import {MorpionGame} from "./MorpionGame.tsx";

export const MorpionPage = () => {
    const colsCount = 3
    const rowsCount = 3
    const players = [
        {
            name: "Bob",
            shape: "X"
        },
        {
            name: "John",
            shape: "O"
        }
    ]

    return (
        <MainPage name={"morpion"}>
            <h1>Morpion</h1>
            <MorpionGame colNumber={colsCount} rowNumber={rowsCount} players={players}/>
        </MainPage>
    )
}