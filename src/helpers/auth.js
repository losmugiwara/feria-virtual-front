import { axiosApi, axiosAuth } from "./api";
import jwt_decode from "jwt-decode";

export const loginApi = async (user = null) => {

    if (!user) return;
    try {
        const resp = await axiosAuth.post("/login", user);
        const respJson = await resp.data;
        const { token } = respJson;
        return {
            ok: true,
            token,
        }
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
};

export const registerApi = async (user = null) => {

    if (!user) return;

    const resp = await axiosAuth.post("/register", user);
    const respJson = await resp.data;

    return respJson;

};
export const userProfile = async () => {

    const token = localStorage.getItem('token');
    const dectoken = jwt_decode(token);
    const { sub } = dectoken;


    const resp = await axiosApi.get("/users/" + sub, {
        'headers': {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    const { data } = resp;
    console.log(data);

    return data;
};
export const addUser = async (user = null) => {


    const resp = await axiosApi.post("/register/account", user, {
        'headers': {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    console.log(resp);
}
export const allUsers = async () => {

    const resp = await axiosApi.get("/users", {
        'headers': {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    const { data } = resp;
    // console.log(data);

    return data;
}