// @flow
import React, { Component } from 'react';
import Button from '@material-ui/core/Button/Button';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './DoSignUp.scss';

type Props = {};

export default class DoSignUp extends Component<Props> {
  props: Props;

  handleChange = () => {
    const { password, username, firstName, lastName, email } = this.props;
    console.log(password, username, firstName, lastName, email);
    console.log(process.env.REACT_APP_SERVER_URL);
    axios
      .post(process.env.REACT_APP_SERVER_URL, {
        email,
        username,
        password,
        firstName,
        lastName
      })
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Button
          variant="contained"
          className={styles.button}
          onClick={this.handleChange}
        >
          Sign up
        </Button>
      </div>
    );
  }
}

DoSignUp.propTypes = {
  password: PropTypes.string,
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string
};

DoSignUp.defaultProps = {
  password: '',
  username: '',
  firstName: '',
  lastName: '',
  email: ''
};
