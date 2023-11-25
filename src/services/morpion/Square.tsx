import {useState} from "react";

export interface SquareProps {
    id: string | null
    shape: string
}

export const Square = ({id, shape}: SquareProps) => {
    const [enable, setEnable] = useState(false)

    return (
        <div id={id ?? ""} className="square" onClick={() => setEnable(true)}>
            {enable && shape}
        </div>
    )
}