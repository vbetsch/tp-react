import {MorpionBoard} from "./MorpionBoard.tsx";
import {useState} from "react";
import {MorpionSquare} from "./MorpionSquare.tsx";

interface GameProps {
    players: { name: string; shape: string }[];
    colNumber: number;
    rowNumber: number;
}

export const MorpionGame = ({players, colNumber, rowNumber}: GameProps) => {
    const [indexPlayer, setIndexPlayer] = useState(0);
    const [score, setScore] = useState(generateScore());

    function nextPlayer() {
        if (indexPlayer === players.length - 1) {
            setIndexPlayer(0);
        } else {
            setIndexPlayer(indexPlayer + 1);
        }
    }

    function updateScore(colPos: number, rowPos: number, shape: string) {
        let newScore = [...score]
        newScore[colPos][rowPos] = shape
        setScore(newScore)
    }

    function generateScore() {
        const initialScore = [];
        for (let row = 0; row < rowNumber; row++) {
            const rowScore = Array(colNumber).fill("");
            initialScore.push(rowScore);
        }
        return initialScore;
    }

    function generateGrid() {
        const squares = [];
        for (let row = 0; row < rowNumber; row++) {
            const rowItems = [];
            for (let col = 0; col < colNumber; col++) {
                const index = row * colNumber + col;
                rowItems.push(
                    <MorpionSquare
                        key={index}
                        position={[row, col]}
                        shapePlayer={players[indexPlayer].shape}
                        changePlayer={nextPlayer}
                        updateScore={updateScore}
                    />);
            }
            squares.push(<div className={"row"} key={row}>{rowItems}</div>);
        }
        return squares;
    }

    return (
        <div className="game">
            <p>It is the turn of <strong>{players[indexPlayer].name}</strong> ({players[indexPlayer].shape})</p>
            <MorpionBoard squares={generateGrid()}/>
        </div>
    );
};