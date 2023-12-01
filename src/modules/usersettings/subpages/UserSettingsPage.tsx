import {MainPage} from "../../../components/templates/MainPage.tsx";
import {UserSettingsAuthContext} from "../context/UserSettingsAuthProvider.tsx";
import {useContext} from "react";
import {Link} from "react-router-dom";

export const UserSettingsPage = () => {
    const {state} = useContext(UserSettingsAuthContext)

    return (
        <MainPage title={"UserSettings"}>
            <div className="content">
                {state.currentUser ? (
                    <p>Hello {state.currentUser?.firstname} {state.currentUser?.lastname}</p>
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