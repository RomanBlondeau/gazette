import { connect } from 'react-redux';
import SendForm from '../../../components/App/Send/SendContacts/SendContacts';
import sendActions from '../../../actions/Send/send.actions';

const mapStateToProps = state => ({
  contacts: state.contacts
});

const mapDispatchToProps = dispatch => ({
  onSelect: email => {
    dispatch(sendActions.selectContact(email));
  }
});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendForm);

export default VisibleDoLogin;
