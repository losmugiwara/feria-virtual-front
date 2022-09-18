import axios from "axios";

export const axiosAuth = axios.create({
    baseURL: 'http://44.211.43.207:8080/auth',
    mode: 'no-cors',
    cache: 'default'
});

