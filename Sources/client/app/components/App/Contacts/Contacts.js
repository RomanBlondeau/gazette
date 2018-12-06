// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import css from './Contacts.scss';
import NewContact from '../../../containers/Contacts/NewContact/NewContactContainer';
import ContactCard from './ContactCard/ContactCard';

type Props = {
  classes: object,
  contacts: array,
  onCreate: func,
  onDelete: func,
  userId: number
};

const styles = () => ({
  root: {
    display: 'flex',
    backgroundColor: '#2E2E43',
    height: '100%'
  }
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class Contacts extends Component<Props> {
  props: Props;

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, contacts, userId, onDelete } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <div className={css.contentContainer}>
          <div className={css.titleContainer}>
            <h3>My contacts</h3>
            <NewContact />
          </div>
          <div className={css.contactsContainer}>
            {contacts.map(contact => (
              <ContactCard
                contact={contact}
                key={contact.id}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contacts);
