// @flow
import React from 'react';
import css from './SendContacts.scss';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import NewContact from '../../../../containers/Contacts/NewContact/NewContactContainer';

const SendContacts = ({ contacts, onSelect }) => (
  <div>
    <div className={css.header}>
      <p style={{ color: '#fff', marginLeft: 15 }}>{`My contacts`}</p>
      <NewContact />
    </div>
    <div className={css.contactsContainer}>
      {contacts.map(contact => (
        <div
          className={css.contactCard}
          key={contact.id}
          onClick={() => onSelect(contact.email)}
        >
          <AccountCircle className={css.contactPic} />
          <div className={css.contactInfoContainer}>
            <h5 className={css.contactName}>{contact.name}</h5>
            <h6 className={css.contactEmail}>{contact.email}</h6>
          </div>
        </div>
      ))}
    </div>
  </div>
);

SendContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

SendContacts.defaultProps = {};

export default SendContacts;
