import {useForm} from "react-hook-form";
import {UserSettingsUser} from "../types/UserSettingsUserType.ts";
import {MainPage} from "../../../components/templates/MainPage.tsx";
import {useContext} from "react";
import {UserSettingsAuthContext} from "../context/UserSettingsAuthProvider.tsx";

export const LoginPage = () => {
    const {register, handleSubmit, formState} = useForm<UserSettingsUser>()
    const {errors} = formState
    const [, setAuthData] = useContext(UserSettingsAuthContext)

    const onSubmit = () => {} // TODO: use setAuthData for login

    return (
        <MainPage title={"Login"}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-fields">
                    <input
                        {...register("email", {required: true})}
                        className="input"
                        placeholder="Identifiant"
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
                <div className="errors">
                    {errors.email && (
                        <p className="error">email is required</p>
                    )}
                    {errors.password && (
                        <p className="error">password is required</p>
                    )}
                </div>
                <button className="button">Login</button>
            </form>
        </MainPage>
    )
}