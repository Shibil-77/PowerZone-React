import axios from 'axios';

export const userApi = axios.create({ baseURL:process.env.REACT_APP_PUBLIC_USER_API });