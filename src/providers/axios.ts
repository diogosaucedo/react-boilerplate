import axios from 'axios';

const baseURL = 'http://localhost:3333/api';

export const Api = axios.create({ baseURL });
