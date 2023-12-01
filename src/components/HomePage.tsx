import {MainPage} from "./templates/MainPage.tsx";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserSettingsAuthContext} from "../modules/usersettings/context/UserSettingsAuthProvider.tsx";
import {AuthActionEnum} from "../modules/usersettings/context/UserSettingsAuthReducer.tsx";

export const HomePage = () => {
    const {state, dispatch} = useContext(UserSettingsAuthContext)

    const logOut = () => {
        try {
            dispatch({
                type: AuthActionEnum.LOGOUT,
                payload: {}
            })
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <MainPage title={"Home"}>
            {state.currentUser ? (
                <div className="sign">
                    <p>Hello {state.currentUser?.firstname} {state.currentUser?.lastname}</p>
                    <button onClick={logOut}>Logout</button>
                </div>
            ) : (
                <div className="sign">
                    <p>You are not logged</p>
                </div>
            )}
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/morpion"}>Morpion</Link>
            <Link to={"/miniblog"}>MiniBlog</Link>
        </MainPage>
    )
}