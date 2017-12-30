import axios from 'axios';

const apiURL = 'https://hacker-news.firebaseio.com/',
      apiVer = 'v0'

const api = axios.create({
  baseURL: `${apiURL}/${apiVer}`,
  timeout: 8000,
  headers: {
    accept: 'application/json',
  }
});

export default api;