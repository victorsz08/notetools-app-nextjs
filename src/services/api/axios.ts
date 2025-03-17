import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:4000/";

export const api = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
});

api.interceptors.request.use(config => {
    const token = Cookies.get("nextauth.token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});
