import { connect } from 'react-redux';
import Editor from '../../components/App/Editor/Editor';
import containerAction from '../../actions/Container/container.actions';

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  addProjectId: projectId => {
    dispatch(containerAction.setProjectId(projectId));
  }
});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);

export default VisibleDoLogin;
