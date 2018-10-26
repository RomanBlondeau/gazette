// @flow
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import Button from '@material-ui/core/Button/Button';
import styles from './Login.scss';
import LoginForm from './LoginForm/LoginForm';
import RememberMe from './RememberMe/RememberMe';
import DoLogin from './DoLogin/DoLogin';
import history from '../../helpers/history';
import routes from '../../constants/routes';

type Props = {};

export default class Login extends Component<Props> {
  props: Props;

  state = {
    password: '',
    username: ''
  };

  onUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <Grid container spacing={24} className={styles.container}>
          {/* Left content */}
          <Grid item xs={6} className={styles.leftContent} />

          {/* Right content */}
          <Grid item xs={6} className={styles.rightContent}>
            {/* Title */}
            <h2 className={styles.mainTitle}>Gazette</h2>
            <p className={styles.subTitle}>Please login to your account</p>

            {/* Login Form */}
            <Grid container spacing={24} justify="center" alignItems="center">
              <Grid item xs={6} className={styles.rightContent}>
                <LoginForm
                  username={username}
                  password={password}
                  onUpdate={this.onUpdate}
                />

                <Grid
                  container
                  spacing={24}
                  justify="center"
                  alignItems="center"
                  className={styles.subcontainer}
                >
                  {/* Remember Me checkbox */}
                  <Grid item xs={6}>
                    <RememberMe />
                  </Grid>

                  {/* Forgot password button */}
                  <Grid item xs={6} className={styles.forgotPasswordContainer}>
                    <Button onClick={() => history.push(routes.FORGOTPASSWORD)}>
                      Forgot password
                    </Button>
                  </Grid>

                  {/* Login button */}
                  <Grid item xs={6}>
                    <DoLogin username={username} password={password} />
                  </Grid>

                  {/* sign up button */}
                  <Grid item xs={6}>
                    <Button
                      variant="outlined"
                      className={styles.signUpButton}
                      onClick={() => history.push(routes.SIGNUP)}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
