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
  },
  projects: {
    getById: `${baseUrl}/projects`,
    newProject: `${baseUrl}/projects/new`,
    deleteProject: `${baseUrl}/projects`,
    send: `${baseUrl}/projects/send`
  },
  contacts: {
    getByUserId: `${baseUrl}/contacts`,
    newContact: `${baseUrl}/contacts/new`,
    deleteContact: `${baseUrl}/contacts`
  },
  user: {
    getAllData: `${baseUrl}/user`
  }
};

export default api;
