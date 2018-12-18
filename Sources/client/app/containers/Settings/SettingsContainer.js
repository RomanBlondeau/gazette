import { connect } from 'react-redux';
import Settings from '../../components/App/Settings/Settings';

const mapStateToProps = state => ({
  user: state.authentication.user,
});

const mapDispatchToProps = () => ({});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default VisibleDoLogin;
