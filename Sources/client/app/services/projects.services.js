/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import config from '../config/api';

const projectsServices = {
  getProjects,
  addProjects,
  deleteProjects
};

function getProjects(userId) {
  return axios
    .get(`${config.projects.getById}/${userId}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`
      }
    })
    .then(projects => {
      if (projects.data) {
        localStorage.setItem(
          'projects',
          JSON.stringify(projects.data.projects)
        );
      }
      return projects.data.projects;
    });
}

function addProjects(data) {
  return axios
    .post(`${config.projects.newProject}`, data, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`
      }
    })
    .then(newProject => newProject.data.project);
}

function deleteProjects(projectId) {
  return axios.delete(`${config.projects.deleteProject}/${projectId}`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }
  });
}

export default projectsServices;
