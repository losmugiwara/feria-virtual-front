import axios from "axios";

export const axiosAuth = axios.create({
    baseURL: 'http://50.17.114.46:8080/auth',
    mode: 'no-cors',
    cache: 'default'
});

