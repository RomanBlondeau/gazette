// @flow
import React, { Component } from 'react';
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import styles from './LoginForm.scss';

type Props = {};

export default class LoginForm extends Component<Props> {
  props: Props;

  state = {
    password: '',
    username: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { password, showPassword, username } = this.state;
    return (
      <div className={styles.container} data-tid="container">

        <div>
          <FormControl className={styles.form}>
            <InputLabel htmlFor="adornment-username">Username</InputLabel>
            <Input
              id="adornment-username"
              type='text'
              value={username}
              onChange={this.handleChange('username')}
            />
          </FormControl>
        </div>

        <div>
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
        </div>

      </div>
    );
  }
}
