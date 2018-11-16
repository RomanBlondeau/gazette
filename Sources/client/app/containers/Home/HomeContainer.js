import { connect } from 'react-redux';
import Home from '../../components/App/Homepage/Homepage';

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = () => ({});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default VisibleDoLogin;
