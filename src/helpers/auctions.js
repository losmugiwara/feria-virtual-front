import { axiosApi } from "./api";

export const createAuction = async (idRequest) => {
    const token = localStorage.getItem("token");

    const resp = await axiosApi.post(`/auctions/${idRequest}`, {}, {
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    });

    const {data} = resp;
    console.log(data);
    
    return data;
};

export const updateActiveAuction = async (idAuction, active) => {
    const token = localStorage.getItem("token");
    const resp = await axiosApi.get(`/auctions/auction=${idAuction}/active=${active}`, {
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    });

    const {data} = resp;
    console.log(data);

    return data;
}
