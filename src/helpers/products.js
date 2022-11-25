import { axiosApi, axiosAuth } from "./api";
import jwt_decode from "jwt-decode";

export const productsApi = async () => {
    const productsResp = await axiosApi.get('/products');

    const { data } = productsResp;
    // console.log(data)
    return data;
}
