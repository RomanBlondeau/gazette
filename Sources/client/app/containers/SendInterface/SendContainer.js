import { connect } from 'react-redux';
import Send from '../../components/App/Send/Send';

const mapStateToProps = state => ({
  projects: state.projects,
  sendInfo: state.send,
  email: state.container
});

const mapDispatchToProps = () => ({});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Send);

export default VisibleDoLogin;
