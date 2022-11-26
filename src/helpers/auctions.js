import { axiosApi } from "./api";

export const getAuctions = async () => {
    const token = localStorage.getItem("token");

    const resp = await axiosApi.get('/auctions', {
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    });

    const { data } = resp;
    console.log(data);

    return data;
};

export const getAuctionById = async (id) => {
    const token = localStorage.getItem("token");

    const resp = await axiosApi.get(`/auctions/${id}`, {
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    });

    const { data } = resp;
    console.log(data);

    return data;
};

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

