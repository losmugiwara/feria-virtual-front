import { axiosAuth } from "./api";

export const loginApi = async () => {
    
    const user = {
        userName: "admin2",
        password: "admin2"
    }

    if (!user) return ; 
    
    const resp = await axiosAuth.post("/login", user);
    const respJson = await resp.data;
    const {token} = respJson;

    return token;
};

export const registerApi = async (user = null) => {

};