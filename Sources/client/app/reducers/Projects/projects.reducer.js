import projectsConstants from '../../constants/Projects/projects.constants';

const userProjects = JSON.parse(localStorage.getItem('projects'));
const initialState = userProjects ? userProjects : [];

function projects(state = initialState, action) {
  switch (action.type) {
    case projectsConstants.ADD_SUCCESS:
      return [...state, action.newProject];
    case projectsConstants.GETALL_SUCCESS:
      return action.projects;
    case projectsConstants.DELETE_SUCCESS:
      return state.filter(el => el.id !== action.projectId);
    case projectsConstants.ADD_REQUEST:
    case projectsConstants.ADD_FAILURE:
    case projectsConstants.DELETE_REQUEST:
    case projectsConstants.DELETE_FAILURE:
    case projectsConstants.GETALL_REQUEST:
    case projectsConstants.GETALL_FAILURE:
    default:
      return state;
  }
}

export default projects;
