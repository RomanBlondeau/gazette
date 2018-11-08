import { connect } from 'react-redux';
import DoLogin from '../../components/Login/DoLogin/DoLogin';
import userActions from '../../actions/user.actions';

const mapStateToProps = state => ({
  username: state.authentication.user.username,
  password: state.authentication.user.password
});

const mapDispatchToProps = dispatch => ({
  handleChange: (username, password) => {
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }
});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoLogin);

export default VisibleDoLogin;
