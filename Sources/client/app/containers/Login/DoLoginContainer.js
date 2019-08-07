import { connect } from 'react-redux';
import DoLogin from '../../components/Login/DoLogin/DoLogin';
import userActions from '../../actions/User/user.actions';

const mapStateToProps = state => ({
  username: state.form.username,
  password: state.form.password
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
