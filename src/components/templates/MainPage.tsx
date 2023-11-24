import type {ReactNode} from "react";

interface MainPageProps {
    children: ReactNode
}

export const MainPage = ({children}: MainPageProps) => {
    return (
        <div className="main-page">
            {children}
        </div>
    )
}