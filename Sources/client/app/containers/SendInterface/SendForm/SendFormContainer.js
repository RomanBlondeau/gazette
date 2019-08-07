import { connect } from 'react-redux';
import SendForm from '../../../components/App/Send/SendForm/SendForm';
import sendActions from '../../../actions/Send/send.actions';

const mapStateToProps = state => ({
  from: state.send.from,
  object: state.send.object,
  to: state.send.to
});

const mapDispatchToProps = dispatch => ({
  onUpdate: e => {
    e.persist();
    dispatch(sendActions.update(e));
  }
});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendForm);

export default VisibleDoLogin;
