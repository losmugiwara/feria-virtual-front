
import { loginApi } from '../../helpers/auth';
import { checkingCredentials, login } from './';

export const checkingAuthentication = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

    }
}
export const startLogin = (user) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const token = await loginApi(user);
        dispatch(login({token}))
    }
}