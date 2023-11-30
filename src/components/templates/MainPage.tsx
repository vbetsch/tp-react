import type {ReactNode} from "react";

interface MainPageProps {
    title: string
    children: ReactNode
}

export const MainPage = ({title, children}: MainPageProps) => {
    return (
        <div id={title.toLowerCase() + "-page"} className="main-page">
            <h1>{title}</h1>
            <div className="page-content">
                {children}
            </div>
        </div>
    )
}