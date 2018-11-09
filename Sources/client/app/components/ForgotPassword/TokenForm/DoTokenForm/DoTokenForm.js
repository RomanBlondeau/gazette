// @flow
import React from 'react';
import Button from '@material-ui/core/Button/Button';
import PropTypes from 'prop-types';
import styles from './DoTokenForm.scss';

const DoTokenForm = ({ handleChange, email }) => {
  const checkDisabled = () => !(email !== '');

  return (
    <div className={styles.container} data-tid="container">
      <Button
        variant="contained"
        color="primary"
        className={styles.button}
        onClick={() => handleChange(email)}
        disabled={checkDisabled()}
      >
        Send me a recovery token
      </Button>
    </div>
  );
};

export default DoTokenForm;

DoTokenForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  email: PropTypes.string
};

DoTokenForm.defaultProps = {
  email: ''
};
