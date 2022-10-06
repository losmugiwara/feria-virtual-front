import axios from "axios";

export const axiosAuth = axios.create({
    baseURL: 'http://54.242.14.190:8080/auth',
    mode: 'no-cors',
    cache: 'default'
});

