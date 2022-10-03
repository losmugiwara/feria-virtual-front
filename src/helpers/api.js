import axios from "axios";

export const axiosAuth = axios.create({
    baseURL: 'http://44.204.234.29:8080/auth',
    mode: 'no-cors',
    cache: 'default'
});

