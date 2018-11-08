import { connect } from 'react-redux';
import LoginForm from '../../components/Login/LoginForm/LoginForm';
import userActions from '../../actions/user.actions';

const mapStateToProps = state => ({
  username: state.authentication.user.username,
  password: state.authentication.user.password,
  showPassword: state.authentication.showPassword
});

const mapDispatchToProps = dispatch => ({
  onUpdate: e => {
    dispatch(userActions.update(e));
  },
  handleClickShowPassword: () => {
    dispatch(userActions.togglePassword());
  }
});

const VisibleLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default VisibleLoginForm;
