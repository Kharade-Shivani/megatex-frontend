import axios from 'axios';


// export const baseURL= ' https://megatex-backend.onrender.com';
// export const baseURL= 'http://192.168.0.202:8585';
// export const baseURL= 'https://megatex-backend.onrender.com';
export const baseURL= 'https://megatex-backend-02y1.onrender.com/';






export const httpClient = axios.create({
    baseURL,
});

export default httpClient;