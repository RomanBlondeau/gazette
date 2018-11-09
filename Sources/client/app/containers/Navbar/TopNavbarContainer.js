import { connect } from 'react-redux';
import TopNavbar from '../../components/App/Navbars/TopNavbar/TopNavbar';

const mapStateToProps = state => ({
  firstName: state.authentication.user.firstName,
  lastName: state.authentication.user.lastName,
  notificationsCount: state.notifications.count,
  notificationsMessage: state.notifications.message
});

const mapDispatchToProps = () => ({});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavbar);

export default VisibleDoLogin;
