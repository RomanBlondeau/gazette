import { connect } from 'react-redux';
import formActions from '../../actions/Form/form.actions';
import TokenForm from '../../components/ForgotPassword/TokenForm/TokenForm';

const mapStateToProps = state => ({
  email: state.form.email
});

const mapDispatchToProps = dispatch => ({
  onUpdate: e => {
    dispatch(formActions.update(e));
  }
});

const VisibleLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenForm);

export default VisibleLoginForm;
