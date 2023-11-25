import {Square} from "./Square.tsx";
import {Board} from "./Board.tsx";

interface GameProps {
    colNumber: number
    rowNumber: number
    shape: string
}

export const Game = ({colNumber, rowNumber, shape}: GameProps) => {

    const squaresCount = colNumber * rowNumber

    const squares = [];
    for (let row = 0; row < rowNumber; row++) {
        const rowItems = [];
        for (let col = 0; col < colNumber; col++) {
            const index = row * colNumber + col;
            if (index < squaresCount) {
                rowItems.push(<Square key={index} id={(index + 1).toString()} shape={shape}/>);
            } else {
                rowItems.push(<div key={`empty-${col}`}>empty</div>);
            }
        }
        squares.push(<div className={"row"} key={row}>{rowItems}</div>);
    }

    return (
        <div className="game">
            <Board squares={squares}/>
        </div>
    )
}