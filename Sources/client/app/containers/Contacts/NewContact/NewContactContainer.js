import { connect } from 'react-redux';
import NewContact from '../../../components/App/Contacts/NewContact/NewContact';
import contactsActions from '../../../actions/Contacts/contacts.actions';

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
)(NewContact);

export default VisibleDoLogin;
