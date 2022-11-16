import { axiosApi, axiosAuth } from "./api";
import jwt_decode from "jwt-decode";

export const getRequestsSaleAPI = async () => {
    const token = localStorage.getItem("token");

    const resp = await axiosApi.get("/requests-sale", {
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    });

    const {data} = resp;
    console.log(data);

    return data;

}