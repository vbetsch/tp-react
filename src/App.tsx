import {RouterProvider} from "react-router-dom";
import {Router} from "./Router.tsx";

export default function App() {
    return (
        <div className="app">
            <RouterProvider router={Router}/>
        </div>
    )
}