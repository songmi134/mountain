import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../components/login/AuthProvider';

export const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorizations': ''
  }
});

axiosInstance.interceptors.request.use(
  config => {
    config.headers["Authorizations"] = localStorage.getItem('token');
    console.log("123 : "+config.headers["Authorizations"]);
    console.log("123 : "+config.headers);
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

axiosInstance.interceptors.response.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);
//export default axiosInstance;