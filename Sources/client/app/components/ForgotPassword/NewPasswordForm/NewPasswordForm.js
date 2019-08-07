// @flow
import React from 'react';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import PropTypes from 'prop-types';
import styles from './NewPasswordForm.scss';
import Grid from '@material-ui/core/Grid/Grid';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import IconButton from '@material-ui/core/IconButton/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';
import DoPasswordForm from '../../../containers/ForgotPassword/DoPasswordFormContainer';

const NewPasswordForm = ({
  showPassword,
  showConfirmPassword,
  passwordMatch,
  password,
  confirmPassword,
  token,
  checkPassword,
  handleClickShowPassword,
  handleClickShowConfirmPassword,
  onUpdate
}) => (
  <div className={styles.container} data-tid="container">
    <Grid item xs={12}>
      <FormControl className={styles.form}>
        <InputLabel htmlFor="adornment-email">Token</InputLabel>
        <Input
          id="adornment-token"
          type="text"
          value={token}
          name="token"
          onChange={onUpdate}
        />
      </FormControl>
    </Grid>

    <Grid item xs={12}>
      <FormControl className={styles.form}>
        <InputLabel htmlFor="adornment-password">New password</InputLabel>
        <Input
          id="adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          name="password"
          onChange={e => {
            onUpdate(e);
            checkPassword(e, password, confirmPassword);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {password.length < 8 && (
          <FormHelperText id="component-error-text" className={styles.warning}>
            Password must be at least 8 characters long
          </FormHelperText>
        )}
      </FormControl>
    </Grid>

    <Grid item xs={12}>
      <FormControl className={styles.form}>
        <InputLabel htmlFor="adornment-confirm-password">
          Confirm new password
        </InputLabel>
        <Input
          id="adornment-confirm-password"
          type={showConfirmPassword ? 'text' : 'password'}
          value={confirmPassword}
          name="confirmPassword"
          onChange={e => {
            onUpdate(e);
            checkPassword(e, password, confirmPassword);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={handleClickShowConfirmPassword}
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {!passwordMatch && (
          <FormHelperText id="component-error-text" className={styles.warning}>
            Passwords must match
          </FormHelperText>
        )}
      </FormControl>

      <DoPasswordForm />
    </Grid>
  </div>
);

NewPasswordForm.propTypes = {
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  token: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
  showPassword: PropTypes.bool,
  showConfirmPassword: PropTypes.bool,
  passwordMatch: PropTypes.bool,
  checkPassword: PropTypes.func.isRequired,
  handleClickShowPassword: PropTypes.func.isRequired,
  handleClickShowConfirmPassword: PropTypes.func.isRequired
};

NewPasswordForm.defaultProps = {
  password: '',
  confirmPassword: '',
  token: '',
  showPassword: false,
  showConfirmPassword: false,
  passwordMatch: false
};

export default NewPasswordForm;
