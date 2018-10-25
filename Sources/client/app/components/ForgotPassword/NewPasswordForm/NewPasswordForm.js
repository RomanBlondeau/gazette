// @flow
import React, { Component } from 'react';
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
import DoPasswordForm from './DoPasswordForm/DoPasswordForm';

type Props = {};

export default class NewPasswordForm extends Component<Props> {
  props: Props;

  state = {
    showPassword: false,
    showConfirmPassword: false,
    passwordMatch: false
  };

  render() {
    const { showPassword, showConfirmPassword, passwordMatch } = this.state;
    const { password, onUpdate, confirmPassword, token } = this.props;
    return (
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
                this.checkPassword(e);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
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
              Confirm new password
            </InputLabel>
            <Input
              id="adornment-confirm-password"
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              name="confirmPassword"
              onChange={e => {
                onUpdate(e);
                this.checkPassword(e);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowConfirmPassword}
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

          <DoPasswordForm password={password} token={token} />
        </Grid>
      </div>
    );
  }
}

NewPasswordForm.propTypes = {
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  token: PropTypes.string,
  onUpdate: PropTypes.func.isRequired
};

NewPasswordForm.defaultProps = {
  password: '',
  confirmPassword: '',
  token: ''
};
