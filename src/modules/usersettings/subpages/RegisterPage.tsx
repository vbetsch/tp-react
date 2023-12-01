import {MainPage} from "../../../components/templates/MainPage.tsx";
import {useForm} from "react-hook-form";
import {UserSettingsUser} from "../types/UserSettingsUserType.ts";
import {AuthActionEnum} from "../context/UserSettingsAuthReducer.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserSettingsAuthContext} from "../context/UserSettingsAuthProvider.tsx";

export const RegisterPage = () => {
    const {register, handleSubmit} = useForm<UserSettingsUser>()
    const navigate = useNavigate();
    const {dispatch} = useContext(UserSettingsAuthContext)

    const onSubmit = (data: {
        email: string,
        password: string,
        firstname: string,
        lastname: string
    }) => {
        try {
            dispatch({
                type: AuthActionEnum.REGISTER,
                payload: {
                    id: Math.floor(Math.random() * 100),
                    ...data
                }
            })
            navigate("/login")
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <MainPage title={"Register"}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-fields">
                    <input
                        {...register("firstname", {required: true})}
                        className="input"
                        type="text"
                        placeholder="First Name"
                        required
                    />
                    <input
                        {...register("lastname", {required: true})}
                        className="input"
                        type="text"
                        placeholder="Last Name"
                        required
                    />
                    <input
                        {...register("email", {required: true})}
                        className="input"
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        {...register("password", {required: true})}
                        className="input"
                        type="password"
                        placeholder="Password"
                        minLength={8}
                        required
                    />
                </div>
                <button className="button">Register</button>
                <Link to={"/login"}>Login</Link>
            </form>
        </MainPage>
    )
}