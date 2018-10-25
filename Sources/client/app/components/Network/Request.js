import axios from 'axios';
import { Service } from 'axios-middleware';
import jwt from 'jwt-decode';

const config = require('../../config/config');

const token = localStorage.getItem('token');

const service = new Service(axios);

service.register({
  onRequest(request) {
    if (request.baseURL === config.network.baseUrl) {
      const delta = jwt(request.headers.Authorization).exp * 1000 - Date.now();
      if (delta < 0) {
        window.location.reload();
      }
    }
    return request;
  }
});

const instance = axios.create({
  baseURL: config.network.baseUrl,
  headers: {
    Authorization: token,
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export default instance;
