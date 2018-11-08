import { connect } from 'react-redux';
import LoginForm from '../../components/Login/LoginForm/LoginForm';
import formActions from '../../actions/Form/form.actions';

const mapStateToProps = state => ({
  username: state.form.username,
  password: state.form.password,
  showPassword: state.form.showPassword
});

const mapDispatchToProps = dispatch => ({
  onUpdate: e => {
    dispatch(formActions.update(e));
  },
  handleClickShowPassword: () => {
    dispatch(formActions.togglePassword());
  }
});

const VisibleLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default VisibleLoginForm;
