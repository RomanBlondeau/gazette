/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import config from '../config/api';

const contactsServices = {
  getContacts,
  addContacts,
  deleteContacts
};

function getContacts(userId) {
  return axios
    .get(`${config.contacts.getByUserId}/${userId}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`
      }
    })
    .then(contacts => {
      if (contacts.data) {
        localStorage.setItem(
          'contacts',
          JSON.stringify(contacts.data.contacts)
        );
      }
      return contacts.data.contacts;
    });
}

function addContacts(data) {
  return axios
    .post(`${config.contacts.newContact}`, data, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`
      }
    })
    .then(newContact => newContact.data.contact);
}

function deleteContacts(contactId) {
  return axios.delete(`${config.contacts.deleteContact}/${contactId}`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }
  });
}

export default contactsServices;
