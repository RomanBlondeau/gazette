/* eslint-disable no-underscore-dangle */
import contactsConstants from '../../constants/Contacts/contacts.constants';
import contactsServices from '../../services/contacts.services';
import alertActions from '../Alert/alert.actions';

function displayError(error) {
  if (error.response === undefined) {
    alert(error);
  } else {
    alert(`Error: ${error.response.data.message}`);
  }
}

function getContacts(userId) {
  function request() {
    return { type: contactsConstants.GETALL_REQUEST };
  }
  function success(contacts) {
    return { type: contactsConstants.GETALL_SUCCESS, contacts };
  }
  function failure(error) {
    return { type: contactsConstants.GETALL_FAILURE, error };
  }

  return dispatch => {
    dispatch(request());

    contactsServices.getContacts(userId).then(
      contacts => {
        dispatch(success(contacts));
      },
      error => {
        dispatch(failure(error.toString()));
        displayError(error);
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

function addContacts(data) {
  function request() {
    return { type: contactsConstants.ADD_REQUEST };
  }
  function success(newContact) {
    return { type: contactsConstants.ADD_SUCCESS, newContact };
  }
  function failure(error) {
    return { type: contactsConstants.ADD_FAILURE, error };
  }

  return dispatch => {
    dispatch(request());

    contactsServices.addContacts(data).then(
      newContact => {
        dispatch(success(newContact));
        alert(`New contact created successfully`);
      },
      error => {
        dispatch(failure(error.toString()));
        displayError(error);
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

function deleteContacts(contactId) {
  function request() {
    return { type: contactsConstants.DELETE_REQUEST };
  }
  function success() {
    return { type: contactsConstants.DELETE_SUCCESS, contactId };
  }
  function failure(error) {
    return { type: contactsConstants.DELETE_FAILURE, error };
  }

  return dispatch => {
    dispatch(request());

    contactsServices.deleteContacts(contactId).then(
      () => {
        dispatch(success());
        alert(`Contact deleted`);
      },
      error => {
        dispatch(failure(error.toString()));
        displayError(error);
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

const contactsActions = {
  getContacts,
  addContacts,
  deleteContacts
};

export default contactsActions;
