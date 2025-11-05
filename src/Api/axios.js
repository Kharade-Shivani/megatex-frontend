import axios from 'axios';


export const baseURL= 'https://megatex-backend.onrender.com'


export const httpClient = axios.create({
    baseURL,
});

export default httpClient;