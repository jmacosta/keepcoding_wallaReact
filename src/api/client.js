import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});
client.interceptors.response.use(response => response.data);

export const setAuthorizationHeader = token =>
  (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);
export const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common['Authorization'];
};
export default client;
