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
    console.log(data);

    return data;

}
export const getContractByIdAPI = async (id) => {
    const token = localStorage.getItem("token");

    const resp = await axiosApi.get("/contracts/" + id, {
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    });

    const {data} = resp;
    console.log(data);

    return data;

}