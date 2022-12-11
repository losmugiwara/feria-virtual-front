import { axiosApi } from "./api";

export const productsApi = async () => {
    const productsResp = await axiosApi.get('/products');

    const { data } = productsResp;
    return data;
}

export const productsApiByUser = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const productsResp = await axiosApi.get(`/products/user=${id}`, {
            'headers': {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(productsResp)
        const { data } = productsResp;
        return {
            ok: true,
            data
        }
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
}

export const productCreate = async (userId, categoryId, qualityId, p) => {
    try {
        const token = localStorage.getItem("token");

        const productResp = await axiosApi.post(`/products/user=${userId}/category=${categoryId}/quality=${qualityId}`, p, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const { data } = productResp;
        return {
            ok: true,
            data,
        }
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
}
