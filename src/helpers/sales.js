import { axiosApi } from "./api";

export const getSalesAndContractsByCarrier = async (idCarrier) => {
    const token = localStorage.getItem("token");

    const resp = await axiosApi.get(`/sales/carrier=${idCarrier}`, {
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    });

    const { data } = resp;

    // console.log(data);

    return data;
}

export const updateSaleByIdStatus = async (idSale, status) => {
    const token = localStorage.getItem("token");

    const resp = await axiosApi.put(`/sales/sale=${idSale}/status=${status}`,{},  {
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    });

    const { data } = resp;

    // console.log(data);

    return data;
}

