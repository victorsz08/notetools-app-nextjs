import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:4000/";

export const api = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json"
    }
});

const token = Cookies.get("nextauth.token");


api.interceptors.request.use(
    function (config) {
      if(token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
);

api.defaults.headers['Authorization'] = `Bearer ${token}`;