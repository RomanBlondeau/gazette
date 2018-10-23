// @flow
import React, { Component } from 'react';
import Button from '@material-ui/core/Button/Button';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './DoLogin.scss';
import Alert from '../../Alert/Alert';

const config = require('../../../../config');

type Props = {};

export default class DoLogin extends Component<Props> {
  props: Props;

  state = {
    errorOpen: false,
    errorMessage: ''
  };

  handleChange = () => {
    const { username, password } = this.props;
    console.log(username, password);
    axios
      .post(config.routes.auth.login, {
        username,
        password
      })
      .then(res => {
        if (res.status === 200) {
          alert('Connexion ok');
        }
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

  render() {
    const { errorMessage, errorOpen } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={this.handleChange}
        >
          Login
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

DoLogin.propTypes = {
  password: PropTypes.string,
  username: PropTypes.string
};

DoLogin.defaultProps = {
  password: '',
  username: ''
};
