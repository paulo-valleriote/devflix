import axios from 'axios';

const verifyENV = () => {
  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : 'https://my-devflix.herokuapp.com';

  return URL;
};

const API = axios.create({
  baseURL: verifyENV(),
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export default API;
