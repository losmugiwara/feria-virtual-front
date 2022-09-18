import axios from "axios";

export const axiosAuth = axios.create({
    baseURL: 'http://34.201.46.23:8080/auth',
    mode: 'no-cors',
    cache: 'default'
});

