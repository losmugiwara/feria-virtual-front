import { axiosApi } from "./api";

export const productsApi = async () => {
    const productsResp = await axiosApi.get('/products');

    const { data } = productsResp;
    // console.log(data)
    return data;
}

export const productsApiByUser = async (id) => {

    const token = localStorage.getItem("token");
    const productsResp = await axiosApi.get(`/products/user=${id}`, {
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    });

    const { data } = productsResp;
    console.log(data);
    return data;
}

export const productCreate = async (userId, categoryId, qualityId, p) => {
    const token = localStorage.getItem("token");

    const productResp = await axiosApi.post(`/products/user=${userId}/category=${categoryId}/quality=${qualityId}`, p, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const { data } = productResp;
    console.log(data);

    return data;
}
