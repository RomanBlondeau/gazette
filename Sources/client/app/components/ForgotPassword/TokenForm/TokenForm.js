// @flow
import React from 'react';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';
import DoTokenForm from '../../../containers/ForgotPassword/DoTokenFormContainer';
import styles from './TokenForm.scss';

const TokenForm = ({ email, onUpdate }) => (
  <div className={styles.container} data-tid="container">
    <Grid item xs={12}>
      <FormControl className={styles.form}>
        <InputLabel htmlFor="adornment-email">Email</InputLabel>
        <Input
          id="adornment-email"
          type="text"
          value={email}
          name="email"
          onChange={onUpdate}
        />
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <DoTokenForm />
    </Grid>
  </div>
);

TokenForm.propTypes = {
  email: PropTypes.string,
  onUpdate: PropTypes.func.isRequired
};

TokenForm.defaultProps = {
  email: ''
};

export default TokenForm;
