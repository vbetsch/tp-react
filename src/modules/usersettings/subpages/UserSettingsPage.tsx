import {MainPage} from "../../../components/templates/MainPage.tsx";
import {UserSettingsAuthContext} from "../context/UserSettingsAuthProvider.tsx";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthActionEnum} from "../context/UserSettingsAuthReducer.tsx";

export const UserSettingsPage = () => {
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
        <MainPage title={"UserSettings"}>
            <div className="content">
                {state.currentUser ? (
                    <div className="sign">
                        <p>Hello {state.currentUser?.firstname} {state.currentUser?.lastname}</p>
                        <button onClick={logOut}>Logout</button>
                    </div>
                ) : (
                    <div className="sign">
                        <p>You are not logged</p>
                        <Link to={"/register"}>Register</Link>
                        <Link to={"/login"}>Login</Link>
                    </div>
                )}
            </div>
        </MainPage>
    )
}