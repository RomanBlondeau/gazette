// @flow
import React from 'react';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import IconButton from '@material-ui/core/IconButton/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid/Grid';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';
import styles from './SignUpForm.scss';

const SignUpForm = ({
  showPassword,
  showConfirmPassword,
  passwordMatch,
  handleClickShowPassword,
  handleClickShowConfirmPassword,
  checkPassword,
  password,
  confirmPassword,
  username,
  firstName,
  lastName,
  email,
  onUpdate
}) => (
  <div className={styles.container} data-tid="container">
    <Grid container spacing={24} justify="center" alignItems="center">
      <Grid item xs={6}>
        <FormControl className={styles.form}>
          <InputLabel htmlFor="adornment-first-name">First Name</InputLabel>
          <Input
            id="adornment-first-name"
            type="text"
            value={firstName}
            name="firstName"
            onChange={onUpdate}
          />
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl className={styles.form}>
          <InputLabel htmlFor="adornment-last-name">Last Name</InputLabel>
          <Input
            id="adornment-last-name"
            type="text"
            value={lastName}
            name="lastName"
            onChange={onUpdate}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl className={styles.form}>
          <InputLabel htmlFor="adornment-username">Username</InputLabel>
          <Input
            id="adornment-username"
            type="text"
            value={username}
            name="username"
            onChange={onUpdate}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl className={styles.form}>
          <InputLabel htmlFor="adornment-username">Email</InputLabel>
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
        <FormControl className={styles.form}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
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
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl className={styles.form}>
          <InputLabel htmlFor="adornment-confirm-password">
            Confirm password
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
            <FormHelperText
              id="component-error-text"
              className={styles.warning}
            >
              Passwords must match
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
    </Grid>
  </div>
);

SignUpForm.propTypes = {
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  showPassword: PropTypes.bool,
  showConfirmPassword: PropTypes.bool,
  passwordMatch: PropTypes.bool,
  handleClickShowPassword: PropTypes.func.isRequired,
  handleClickShowConfirmPassword: PropTypes.func.isRequired,
  checkPassword: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

SignUpForm.defaultProps = {
  password: '',
  confirmPassword: '',
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  showPassword: false,
  showConfirmPassword: false,
  passwordMatch: false
};

export default SignUpForm;
