// @flow
import React, { Component } from 'react';
import Button from '@material-ui/core/Button/Button';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './DoSignUp.scss';
import Alert from '../../Alert/Alert';
import { history } from '../../../store/configureStore';

const config = require('../../../../config');

type Props = {};

export default class DoSignUp extends Component<Props> {
  props: Props;

  state = {
    errorOpen: false,
    errorMessage: ''
  };

  handleChange = () => {
    const { password, username, firstName, lastName, email } = this.props;
    axios
      .post(config.routes.auth.register, {
        email,
        username,
        password,
        firstName,
        lastName
      })
      .then(res => {
        history.push('/');
        return res;
      })
      .catch(err => {
        this.setState({
          errorMessage:
            err.response !== undefined
              ? err.response.data.message
              : 'An error occured, please try again.',
          errorOpen: true
        });
      });
  };

  handleErrorClose = () => {
    this.setState({ errorOpen: false });
  };

  checkDisabled() {
    const {
      password,
      username,
      firstName,
      lastName,
      email,
      confirmPassword
    } = this.props;
    return !(
      password !== '' &&
      username !== '' &&
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      confirmPassword !== ''
    );
  }

  render() {
    const { errorMessage, errorOpen } = this.state;

    return (
      <div className={styles.container} data-tid="container">
        <Button
          variant="contained"
          className={styles.button}
          onClick={this.handleChange}
          disabled={this.checkDisabled()}
        >
          Sign up
        </Button>

        <Alert
          errorMessage={errorMessage}
          errorOpen={errorOpen}
          handleClose={this.handleErrorClose}
        />
      </div>
    );
  }
}

DoSignUp.propTypes = {
  password: PropTypes.string,
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  confirmPassword: PropTypes.string
};

DoSignUp.defaultProps = {
  password: '',
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  confirmPassword: ''
};
