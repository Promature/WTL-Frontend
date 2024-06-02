import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://wtl-backend.onrender.com',
    withCredentials: true, // Automatically send cookies
  });
  
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default instance;