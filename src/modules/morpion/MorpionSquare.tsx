import {useState} from "react";

export interface SquareProps {
    position: [number, number]
    shapePlayer: string
    changePlayer: () => void
    updateScore: (colPos: number, rowPos: number, shape: string) => void
}

export const MorpionSquare = ({position, shapePlayer, changePlayer, updateScore}: SquareProps) => {
    const [enable, setEnable] = useState(false)
    const [shape, setShape] = useState("")

    function clickOnSquare() {
        if (!enable) {
            setShape(shapePlayer)
            updateScore(position[0], position[1], shapePlayer)
            changePlayer()
            setEnable(true)
        }
    }

    return (
        <div className="square" onClick={() => clickOnSquare()}>
            {enable && shape}
        </div>
    )
}