import axios from "axios";
import nookies from "nookies"

const baseURL = "http://localhost:8000/";

export const api = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(
    function (config) {
      const token = nookies.get(undefined, "nt-token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
);