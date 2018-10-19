// @flow
import React, { Component } from 'react';
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import styles from './SignUpForm.scss';
import Grid from "@material-ui/core/Grid/Grid";

type Props = {};

export default class SignUpForm extends Component<Props> {
  props: Props;

  state = {
    password: '',
    confirmPassword: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    showPassword: false,
    showConfirmPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickShowConfirmPassword = () => {
    this.setState(state => ({ showConfirmPassword: !state.showConfirmPassword }));
  };

  render() {
    const {
      password, showPassword, confirmPassword, showConfirmPassword,
      username, firstName, lastName, email
    } = this.state;
    return (
      <div className={styles.container} data-tid="container">

        <Grid container spacing={24} justify="center" alignItems="center">

          <Grid item xs={6}>
            <FormControl className={styles.form}>
              <InputLabel htmlFor="adornment-first-name">First Name</InputLabel>
              <Input
                id="adornment-first-name"
                type='text'
                value={firstName}
                onChange={this.handleChange('firstName')}
              />
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl className={styles.form}>
              <InputLabel htmlFor="adornment-last-name">Last Name</InputLabel>
              <Input
                id="adornment-last-name"
                type='text'
                value={lastName}
                onChange={this.handleChange('lastName')}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl className={styles.form}>
              <InputLabel htmlFor="adornment-username">Username</InputLabel>
              <Input
                id="adornment-username"
                type='text'
                value={username}
                onChange={this.handleChange('username')}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl className={styles.form}>
              <InputLabel htmlFor="adornment-username">Email</InputLabel>
              <Input
                id="adornment-email"
                type='text'
                value={email}
                onChange={this.handleChange('email')}
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
                onChange={this.handleChange('password')}
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
              <InputLabel htmlFor="adornment-confirm-password">Confirm password</InputLabel>
              <Input
                id="adornment-confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={this.handleChange('confirmPassword')}
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
            </FormControl>
          </Grid>

        </Grid>

      </div>
    );
  }
}
