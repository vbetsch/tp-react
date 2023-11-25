import type {ReactNode} from "react";

interface MainPageProps {
    name: string
    children: ReactNode
}

export const MainPage = ({name, children}: MainPageProps) => {
    return (
        <div id={name + "-page"} className="main-page">
            {children}
        </div>
    )
}