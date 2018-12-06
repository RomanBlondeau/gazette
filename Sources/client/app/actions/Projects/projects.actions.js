/* eslint-disable no-underscore-dangle */
import projectsConstants from '../../constants/Projects/projects.constants';
import projectsServices from '../../services/projects.services';
import alertActions from '../Alert/alert.actions';

function displayError(error) {
  if (error.response === undefined) {
    alert(error);
  } else {
    alert(`Error: ${error.response.data.message}`);
  }
}

function getProjects(userId) {
  function request() {
    return { type: projectsConstants.GETALL_REQUEST };
  }
  function success(projects) {
    return { type: projectsConstants.GETALL_SUCCESS, projects };
  }
  function failure(error) {
    return { type: projectsConstants.GETALL_FAILURE, error };
  }

  return dispatch => {
    dispatch(request());

    projectsServices.getProjects(userId).then(
      projects => {
        dispatch(success(projects));
      },
      error => {
        dispatch(failure(error.toString()));
        displayError(error);
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

function addProjects(data) {
  function request() {
    return { type: projectsConstants.ADD_REQUEST };
  }
  function success(newProject) {
    return { type: projectsConstants.ADD_SUCCESS, newProject };
  }
  function failure(error) {
    return { type: projectsConstants.ADD_REQUEST, error };
  }

  return dispatch => {
    dispatch(request());

    projectsServices.addProjects(data).then(
      newProject => {
        dispatch(success(newProject));
        alert(`New project created successfully`);
      },
      error => {
        dispatch(failure(error.toString()));
        displayError(error);
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

function deleteProjects(projectId) {
  function request() {
    return { type: projectsConstants.DELETE_REQUEST };
  }
  function success() {
    return { type: projectsConstants.DELETE_SUCCESS, projectId };
  }
  function failure(error) {
    return { type: projectsConstants.DELETE_FAILURE, error };
  }

  return dispatch => {
    dispatch(request());

    projectsServices.deleteProjects(projectId).then(
      () => {
        dispatch(success());
        alert(`Project deleted`);
      },
      error => {
        dispatch(failure(error.toString()));
        displayError(error);
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

const projectsActions = {
  getProjects,
  addProjects,
  deleteProjects
};

export default projectsActions;
