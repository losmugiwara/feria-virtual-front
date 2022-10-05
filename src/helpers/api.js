import axios from "axios";

export const axiosAuth = axios.create({
    baseURL: 'http://52.201.253.10:8080/auth',
    mode: 'no-cors',
    cache: 'default'
});

