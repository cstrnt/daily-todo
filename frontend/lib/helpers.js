import axios from 'axios';

const URL = 'http://localhost:3000';
export const get = endpoint => axios.get(`${URL}/${endpoint}`);

export const post = (endpoint, body) => axios.post(`${URL}/${endpoint}`, body);
