import axios from 'axios';

const BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    accept: '*/*',
  },
});