import { connect } from 'react-redux';
import Home from '../../components/App/Homepage/Homepage';
import projectsActions from '../../actions/Projects/projects.actions';

const mapStateToProps = state => ({
  projects: state.projects,
  userId: state.authentication.user.id
});

const mapDispatchToProps = dispatch => ({
  onGet: userId => {
    dispatch(projectsActions.getProjects(userId));
  },
  onCreate: data => {
    dispatch(projectsActions.addProjects(data));
  },
  onDelete: projectId => {
    dispatch(projectsActions.deleteProjects(projectId));
  }
});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default VisibleDoLogin;
