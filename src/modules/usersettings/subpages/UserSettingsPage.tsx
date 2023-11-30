import {MainPage} from "../../../components/templates/MainPage.tsx";
import {UserSettingsAuthContext, UserSettingsAuthProvider} from "../context/UserSettingsAuthProvider.tsx";
import {useContext} from "react";
import {Link} from "react-router-dom";

export const UserSettingsPage = () => {
    const [authData,] = useContext(UserSettingsAuthContext)

    return (
        <MainPage title={"UserSettings"}>
            <UserSettingsAuthProvider>
                <div className="content">
                    {authData.currentUser ? (
                        <p>Hello {authData.currentUser?.firstname} {authData.currentUser?.lastname}</p>
                    ) : (
                        <div className="sign">
                            <p>You're not logged</p>
                            <Link to={"/register"}>Register</Link>
                            <Link to={"/login"}>Login</Link>
                        </div>
                    )}
                </div>
            </UserSettingsAuthProvider>
        </MainPage>
    )
}