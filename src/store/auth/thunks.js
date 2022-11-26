
import { loginApi } from '../../helpers/auth';
import { checkingCredentials, login } from './';
import jwt_decode from "jwt-decode";

export const checkingAuthentication = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

    }
}
export const startLogin = (user) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const token = await loginApi(user);
        const dectoken = jwt_decode(token);
        const { sub, roles } = dectoken;
        console.log({ sub, roles });
        dispatch(login({ token, sub, roles }))
    }
}