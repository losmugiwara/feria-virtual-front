
import { axiosApi } from './api';



export const getWallet = async (id) => {

    try {
        const token = localStorage.getItem("token");
        const resp = await axiosApi.get(`/wallets/${id}`, {
            'headers': {
                'Authorization': `Bearer ${token}`
            }
        });
        const { data } = resp;
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