/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import config from '../config/api';
import authHeader from '../helpers/auth-header';

const userService = {
  login,
  logout,
  register,
  forgotPassword,
  resetPassword,
  getById,
  update,
  delete: _delete
};

function login(username, password) {
  return axios
    .post(config.auth.login, {
      username,
      password
    })
    .then(user => {
      if (user.data.token) {
        localStorage.setItem('user', JSON.stringify(user.data));
      }
      return user.data;
    });
}

function logout() {
  localStorage.removeItem('user');
}

function register(email, username, password, firstName, lastName) {
  return axios.post(config.auth.register, {
    email,
    username,
    password,
    firstName,
    lastName
  });
}

function forgotPassword(email) {
  return axios.post(config.auth.forgotPassword, {
    email
  });
}

function resetPassword(token, password) {
  return axios.post(config.auth.resetPassword, {
    resetToken: token,
    newPassword: password
  });
}

function getById(id) {
  axios
    .put(`${id}`, {
      headers: { ...authHeader(), 'Content-Type': 'application/json' }
    })
    .then(handleResponse);
}

function update(user) {
  axios
    .put('', {
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
      user
    })
    .then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  axios
    .put(`${id}`, {
      headers: { ...authHeader(), 'Content-Type': 'application/json' }
    })
    .then(handleResponse);
}

function handleResponse(response) {
  if (!response) {
    if (response.status === 401) {
      logout();
      window.location.reload(true);
    }
    const error = response.statusText;
    return Promise.reject(error);
  }
  return response;
}

export default userService;
