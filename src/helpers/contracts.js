import { axiosApi, axiosAuth } from "./api";
import jwt_decode from "jwt-decode";

export const getContractsAPI = async () => {
    const token = localStorage.getItem("token");

    const resp = await axiosApi.get("/contracts", {
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    });

    const {data} = resp;

    return data;

}