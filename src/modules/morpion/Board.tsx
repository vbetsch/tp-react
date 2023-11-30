import {ReactElement} from "react";

interface BoardProps {
    squares: ReactElement<any, any>[]
}

export const Board = ({squares}: BoardProps) => {
    return (
        <div className="board">
            {squares}
        </div>
    )
}