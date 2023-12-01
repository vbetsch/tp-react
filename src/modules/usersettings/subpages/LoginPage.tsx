import {useForm} from "react-hook-form";
import {UserSettingsUser} from "../types/UserSettingsUserType.ts";
import {MainPage} from "../../../components/templates/MainPage.tsx";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserSettingsAuthContext} from "../context/UserSettingsAuthProvider.tsx";
import {AuthActionEnum} from "../context/UserSettingsAuthReducer.tsx";

export const LoginPage = () => {
    const {register, handleSubmit} = useForm<UserSettingsUser>()
    const navigate = useNavigate();
    const {dispatch} = useContext(UserSettingsAuthContext)

    const onSubmit = (data: { email: string, password: string }) => {
        try {
            const newUser: UserSettingsUser = {
                id: 123,
                email: data.email,
                password: data.password,
                firstname: "BAR",
                lastname: "FOO"
            }
            dispatch({
                type: AuthActionEnum.LOGIN,
                payload: newUser
            })
        } catch (e) {
            console.error(e)
        } finally {
            navigate("/usersettings")
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
                        minLength={8}
                        placeholder="Mot de passe"
                        required
                    />
                </div>
                <button className="button">Login</button>
            </form>
        </MainPage>
    )
}