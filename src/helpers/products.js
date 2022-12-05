import { axiosApi } from "./api";

export const productsApi = async () => {
    const productsResp = await axiosApi.get('/products');

    const { data } = productsResp;
    // console.log(data)
    return data;
}
