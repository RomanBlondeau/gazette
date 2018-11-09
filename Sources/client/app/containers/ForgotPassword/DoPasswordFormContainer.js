import { connect } from 'react-redux';
import DoPasswordForm from '../../components/ForgotPassword/NewPasswordForm/DoPasswordForm/DoPasswordForm';
import userActions from '../../actions/User/user.actions';

const mapStateToProps = state => ({
  password: state.form.password,
  confirmPassword: state.form.confirmPassword,
  token: state.form.token
});

const mapDispatchToProps = dispatch => ({
  handleChange: (token, password) => {
    if (token && password) {
      dispatch(userActions.resetPassword(token, password));
    }
  }
});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoPasswordForm);

export default VisibleDoLogin;
