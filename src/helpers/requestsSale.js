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

export const getRequestsSaleByIdAPI = async (id) => {
    const token = localStorage.getItem("token");

    const resp = await axiosApi.get("/requests-sale/" + id, {
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    });

    const {data} = resp;
    console.log(data);

    return data;

};

export const updateRequestsSaleStatus = async (idRequest, approvalStatus) => {
    const token = localStorage.getItem("token");

    const url = `/requests-sale/request=${idRequest}/status=${approvalStatus}`;

    const resp = await axiosApi.put(url, {}, {
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    });

    const {data} = resp;
    console.log(data);
    
    return data;
};
