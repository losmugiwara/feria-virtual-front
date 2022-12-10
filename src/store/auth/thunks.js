
import { loginApi } from '../../helpers/auth';
import { checkingCredentials, login, logout } from './';
import jwt_decode from "jwt-decode";

export const checkingAuthentication = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

    }
}
export const startLogin = (user) => {
    console.log(user)
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, token, errorMessage } = await loginApi(user);

        if (!ok) return dispatch(logout({ errorMessage }));
        
        console.log(token)
        const dectoken = jwt_decode(token);
        const { sub, roles } = dectoken;
        console.log({ sub, roles });
        dispatch(login({ token, sub, roles }))
    }
}