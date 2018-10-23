import axios from 'axios';
import { Service } from 'axios-middleware';
import jwt from 'jwt-decode';

const token = localStorage.getItem('token');

const service = new Service(axios);

service.register({
  onRequest(request) {
    if (request.baseURL === process.env.REACT_APP_SERVER_URL) {
      const delta = jwt(request.headers.Authorization).exp * 1000 - Date.now();
      if (delta < 0) {
        window.location.reload();
      }
    }
    return request;
  }
});

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    Authorization: token,
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export default instance;
