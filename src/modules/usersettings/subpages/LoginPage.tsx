import {useForm} from "react-hook-form";
import {UserSettingsUser} from "../types/UserSettingsUserType.ts";
import {MainPage} from "../../../components/templates/MainPage.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserSettingsAuthContext} from "../context/UserSettingsAuthProvider.tsx";
import {AuthActionEnum} from "../context/UserSettingsAuthReducer.tsx";

export const LoginPage = () => {
    const {register, handleSubmit} = useForm<UserSettingsUser>()
    const navigate = useNavigate();
    const {state, dispatch} = useContext(UserSettingsAuthContext)

    console.log(`@vbetsch ||  - LoginPage || state.users`)
    console.log(state.users)

    const findUser = (email: string, password: string) => state.users.find(
        (user) =>
            user.email === email
            && user.password === password
    )

    const onSubmit = (data: { email: string, password: string }) => {
        try {
            if (state.users) {
                const newUser: UserSettingsUser | undefined = findUser(data.email, data.password)
                if (newUser) {
                    dispatch({
                        type: AuthActionEnum.LOGIN,
                        payload: newUser
                    })
                    navigate("/usersettings")
                } else {
                    console.error("User not found")
                }
            } else {
                console.error("No user found")
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <MainPage title={"Login"}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-fields">
                    <input
                        {...register("email", {required: true})}
                        type="email"
                        className="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        {...register("password", {required: true})}
                        className="input"
                        type="password"
                        placeholder="Mot de passe"
                        required
                    />
                </div>
                <button className="button">Login</button>
                <Link to={"/register"}>Register</Link>
            </form>
        </MainPage>
    )
}