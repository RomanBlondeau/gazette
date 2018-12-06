// @flow
import React, { Component } from 'react';
import css from './NewContact.scss';
import Modal from '@material-ui/core/Modal/Modal';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import axios from 'axios';
import config from '../../../../config/api';

type Props = {
  classes: object,
  contacts: object,
  userId: number,
  onCreate: func
};

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#2E2E43',
    height: '100%'
  },
  button: {
    backgroundColor: 'pink'
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
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

class NewContact extends Component<Props> {
  props: Props;

  state = {
    open: false,
    name: '',
    email: ''
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onUpdate = e => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  };

  createContact = () => {
    const { userId, onCreate } = this.props;
    const { name, email } = this.state;
    const data = { userId, name, email };
    onCreate(data);
    this.handleClose();
  };

  render() {
    const { classes, contacts } = this.props;
    const { open, name, email } = this.state;
    return (
      <div>
        <button
          className={css.addContactButton}
          onClick={() => {
            this.handleOpen();
          }}
        >
          {`Ajouter un contact`}
        </button>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Create new contact
            </Typography>
            <div>
              <FormControl className={css.form}>
                <InputLabel htmlFor="adornment-name">Name</InputLabel>
                <Input
                  id="adornment-name"
                  type="text"
                  value={name}
                  name="name"
                  onChange={this.onUpdate}
                />
              </FormControl>
            </div>
            <div>
              <FormControl className={css.form}>
                <InputLabel htmlFor="adornment-email">Email</InputLabel>
                <Input
                  id="adornment-email"
                  type="text"
                  value={email}
                  name="email"
                  onChange={this.onUpdate}
                />
              </FormControl>
            </div>
            <button
              className={css.createContactButton}
              onClick={this.createContact}
            >
              Create
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(NewContact);
