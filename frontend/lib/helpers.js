import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://daily-todo.frexeptabel.now.sh/api';

export const get = endpoint => axios.get(`${URL}/${endpoint}`);

export const post = (endpoint, body) => axios.post(`${URL}/${endpoint}`, body);
