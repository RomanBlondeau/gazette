import { connect } from 'react-redux';
import DoTokenForm from '../../components/ForgotPassword/TokenForm/DoTokenForm/DoTokenForm';
import userActions from '../../actions/User/user.actions';

const mapStateToProps = state => ({
  email: state.form.email
});

const mapDispatchToProps = dispatch => ({
  handleChange: email => {
    if (email) {
      dispatch(userActions.forgotPassword(email));
    }
  }
});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoTokenForm);

export default VisibleDoLogin;
