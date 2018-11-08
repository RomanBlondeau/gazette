import { connect } from 'react-redux';
import DoSignUp from '../../components/SignUp/DoSignUp/DoSignUp';
import userActions from '../../actions/User/user.actions';

const mapStateToProps = state => ({
  username: state.form.username,
  password: state.form.password,
  confirmPassword: state.form.confirmPassword,
  firstName: state.form.firstName,
  lastName: state.form.lastName,
  email: state.form.email,
  dispatch: state.form.dispatch,
  disabled: state.registration.disabled
});

const mapDispatchToProps = dispatch => ({
  handleChange: (username, password, firstName, lastName, email) => {
    if (password && username && firstName && lastName && email) {
      dispatch(
        userActions.register(username, password, firstName, lastName, email)
      );
    }
  }
});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoSignUp);

export default VisibleDoLogin;
