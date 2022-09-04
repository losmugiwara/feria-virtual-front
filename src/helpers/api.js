import axios from "axios";

export const axiosAuth = axios.create({
    baseURL: 'http://localhost:8080/auth',
    mode: 'no-cors',
    cache: 'default'
});
