import axios from "axios";
import { parseCookies } from "nookies"

const baseURL = "http://localhost:8000/";

export const api = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json"
    }
});

const cookies = parseCookies();
const token = cookies['nextauth.token'] 


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