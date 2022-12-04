import { axiosApi, axiosAuth } from "./api";
import jwt_decode from "jwt-decode";

export const loginApi = async (user = null) => {

    if (!user) return;
    console.log(user)
    const resp = await axiosAuth.post("/login", user);
    console.log(resp)
    const respJson = await resp.data;
    console.log(respJson)
    const { token } = respJson;

    return token;
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