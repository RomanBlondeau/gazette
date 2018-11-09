// @flow
import React from 'react';
import Button from '@material-ui/core/Button/Button';
import PropTypes from 'prop-types';
import styles from './DoPasswordForm.scss';

const DoPasswordForm = ({ handleChange, token, password, confirmPassword }) => {
  const checkDisabled = () => {
    return !(
      password !== '' &&
      password.length >= 8 &&
      token !== '' &&
      confirmPassword !== ''
    );
  };

  return (
    <div className={styles.container} data-tid="container">
      <Button
        variant="contained"
        color="primary"
        className={styles.button}
        onClick={() => handleChange(token, password)}
        disabled={checkDisabled()}
      >
        Update my password
      </Button>
    </div>
  );
};

export default DoPasswordForm;

DoPasswordForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  token: PropTypes.string
};

DoPasswordForm.defaultProps = {
  password: '',
  confirmPassword: '',
  token: ''
};
