import {createBrowserRouter, Navigate} from "react-router-dom";
import {MorpionPage} from "./services/morpion/MorpionPage.tsx";

export const Router = createBrowserRouter([
    {
        path: "",
        element: <Navigate to="/morpion" replace={true} />
    },
    {
        path: "/morpion",
        element: <MorpionPage/>
    }
]);