import contactsConstants from '../../constants/Contacts/contacts.constants';

const userContacts = JSON.parse(localStorage.getItem('contacts'));
const initialState = userContacts ? userContacts : [];

function contacts(state = initialState, action) {
  switch (action.type) {
    case contactsConstants.ADD_SUCCESS:
      return [...state, action.newContact];
    case contactsConstants.GETALL_SUCCESS:
      return action.contacts;
    case contactsConstants.DELETE_SUCCESS:
      return state.filter(el => el.id !== action.contactId);
    case contactsConstants.ADD_REQUEST:
    case contactsConstants.ADD_FAILURE:
    case contactsConstants.DELETE_REQUEST:
    case contactsConstants.DELETE_FAILURE:
    case contactsConstants.GETALL_REQUEST:
    case contactsConstants.GETALL_FAILURE:
    default:
      return state;
  }
}

export default contacts;
