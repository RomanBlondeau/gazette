// @flow
import React from 'react';
import Button from '@material-ui/core/Button/Button';
import PropTypes from 'prop-types';
import styles from './DoLogin.scss';

// eslint-disable-next-line no-unused-vars
const DoLogin = ({ handleChange, username, password }) => (
  <div className={styles.container} data-tid="container">
    <Button
      variant="contained"
      color="primary"
      className={styles.button}
      onClick={() => {
        handleChange(username, password);
      }}
    >
      Login
    </Button>
  </div>
);

DoLogin.propTypes = {
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string
};

DoLogin.defaultProps = {
  username: '',
  password: ''
};

export default DoLogin;
