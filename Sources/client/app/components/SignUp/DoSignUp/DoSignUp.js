// @flow
import React from 'react';
import Button from '@material-ui/core/Button/Button';
import PropTypes from 'prop-types';
import styles from './DoSignUp.scss';

const DoSignUp = ({
  handleChange,
  username,
  password,
  confirmPassword,
  firstName,
  lastName,
  email
}) => {
  const checkDisabled = () =>
    !(
      username !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      firstName !== '' &&
      lastName !== '' &&
      email !== ''
    );

  return (
    <div className={styles.container} data-tid="container">
      <Button
        variant="contained"
        className={styles.button}
        onClick={() =>
          handleChange(username, password, firstName, lastName, email)
        }
        disabled={checkDisabled()}
      >
        Sign up
      </Button>
    </div>
  );
};

export default DoSignUp;

DoSignUp.propTypes = {
  handleChange: PropTypes.func.isRequired,
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
