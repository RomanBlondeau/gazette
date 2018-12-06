import { connect } from 'react-redux';
import Editor from '../../components/App/Editor/Editor';

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = () => ({});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);

export default VisibleDoLogin;
