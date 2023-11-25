import {useState} from "react";

export interface SquareProps {
    id: string | null
    shapePlayer: string
    changePlayer: () => void
}

export const Square = ({id, shapePlayer, changePlayer}: SquareProps) => {
    const [enable, setEnable] = useState(false)
    const [shape, setShape] = useState("")

    function clickOnSquare() {
        if (!enable) {
            setShape(shapePlayer)
            changePlayer()
            setEnable(true)
        }
    }

    return (
        <div id={id ?? ""} className="square" onClick={() => clickOnSquare()}>
            {enable && shape}
        </div>
    )
}