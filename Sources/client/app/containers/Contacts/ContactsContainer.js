import { connect } from 'react-redux';
import Contacts from '../../components/App/Contacts/Contacts';
import contactsActions from '../../actions/Contacts/contacts.actions';

const mapStateToProps = state => ({
  contacts: state.contacts,
  userId: state.authentication.user.id
});

const mapDispatchToProps = dispatch => ({
  onGet: userId => {
    dispatch(contactsActions.getContacts(userId));
  },
  onCreate: data => {
    dispatch(contactsActions.addContacts(data));
  },
  onDelete: contactId => {
    dispatch(contactsActions.deleteContacts(contactId));
  }
});

const VisibleDoLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);

export default VisibleDoLogin;
