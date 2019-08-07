import { connect } from 'react-redux';
import formActions from '../../actions/Form/form.actions';
import NewPasswordForm from '../../components/ForgotPassword/NewPasswordForm/NewPasswordForm';

const mapStateToProps = state => ({
  showPassword: state.form.showPassword,
  showConfirmPassword: state.form.showConfirmPassword,
  passwordMatch: state.form.passwordMatch,
  password: state.form.password,
  confirmPassword: state.form.confirmPassword,
  token: state.form.token
});

const mapDispatchToProps = dispatch => ({
  onUpdate: e => {
    dispatch(formActions.update(e));
  },
  handleClickShowPassword: () => {
    dispatch(formActions.togglePassword());
  },
  handleClickShowConfirmPassword: () => {
    dispatch(formActions.toggleConfirmPassword());
  },
  checkPassword: (e, password, confirmPassword) => {
    if (e.target.name === 'password') {
      if (confirmPassword === e.target.value)
        dispatch(formActions.passwordMatch(true));
      else dispatch(formActions.passwordMatch(false));
    } else if (e.target.name === 'confirmPassword') {
      if (password === e.target.value)
        dispatch(formActions.passwordMatch(true));
      else dispatch(formActions.passwordMatch(false));
    }
  }
});

const VisibleLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPasswordForm);

export default VisibleLoginForm;
