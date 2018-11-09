/**
 * Url of node back-end server
 */
const baseUrl = 'http://localhost:3000';

/**
 * Back-end routes list
 */
const api = {
  auth: {
    register: `${baseUrl}/user/register`,
    login: `${baseUrl}/user/login`,
    forgotPassword: `${baseUrl}/user/forgotPassword`,
    resetPassword: `${baseUrl}/user/resetPassword`,
    verify: `${baseUrl}/user/verify`
  }
};

export default api;
