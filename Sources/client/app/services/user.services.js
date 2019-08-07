/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import config from '../config/api';

const userService = {
  login,
  logout,
  register,
  forgotPassword,
  resetPassword
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
  localStorage.clear();
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

export default userService;
