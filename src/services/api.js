import axios from 'axios';

const baseURL = 'https://kenziehub.herokuapp.com';

export const api = axios.create({ baseURL, timeout: 8000 });
