import { axiosAuth } from "./api";

export const loginApi = async (user = null) => {

    if (!user) return ; 
    
    const resp = await axiosAuth.post("/login", user);
    const respJson = await resp.data;
    const {token} = respJson;

    return token;
};

export const registerApi = async (user = null) => {

    if (!user) return ;

    const resp = await axiosAuth.post("/register", user);
    const respJson = await resp.data;

    console.log(respJson);

};