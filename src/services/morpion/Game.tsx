import {Board} from "./Board.tsx";
import {useState} from "react";
import {Square} from "./Square.tsx";

interface GameProps {
    players: { name: string; shape: string }[];
    colNumber: number;
    rowNumber: number;
}

export const Game = ({players, colNumber, rowNumber}: GameProps) => {
    const [indexPlayer, setIndexPlayer] = useState(0);

    function nextPlayer() {
        if (indexPlayer === players.length - 1) {
            setIndexPlayer(0);
        } else {
            setIndexPlayer(indexPlayer + 1);
        }
    }

    function generateGrid() {
        const squaresCount = colNumber * rowNumber

        const squares = [];
        for (let row = 0; row < rowNumber; row++) {
            const rowItems = [];
            for (let col = 0; col < colNumber; col++) {
                const index = row * colNumber + col;
                if (index < squaresCount) {
                    rowItems.push(<Square key={index} id={(index + 1).toString()} shapePlayer={players[indexPlayer].shape} changePlayer={nextPlayer}/>);
                } else {
                    rowItems.push(<div key={`empty-${col}`}>empty</div>);
                }
            }
            squares.push(<div className={"row"} key={row}>{rowItems}</div>);
        }
        return squares;
    }

    return (
        <div className="game">
            <p>It is the turn of <strong>{players[indexPlayer].name}</strong></p>
            <Board squares={generateGrid()}/>
        </div>
    );
};