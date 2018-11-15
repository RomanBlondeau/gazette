import userConstants from '../../constants/User/user.constants';

const userProjects = JSON.parse(localStorage.getItem('projects'));
const initialState = userProjects ? userProjects : [];

function projects(state = initialState, action) {
  switch (action.type) {
    case userConstants.GETALL_PROJECTS_REQUEST:
    case userConstants.GETALL_PROJECTS_FAILURE:
    case userConstants.GETALL_PROJECTS_SUCCESS:
    default:
      return state;
  }
}

export default projects;
