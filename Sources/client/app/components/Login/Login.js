// @flow
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import styles from './Login.scss';
import LoginForm from './LoginForm/LoginForm';
import RememberMe from './RememberMe/RememberMe';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import DoLogin from './DoLogin/DoLogin';
import SignUp from './SignUp/SignUp';

type Props = {};

export default class Login extends Component<Props> {
  props: Props;

  render() {
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
                <LoginForm />

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
                  <Grid item xs={6}>
                    <ForgotPassword />
                  </Grid>

                  {/* Login button */}
                  <Grid item xs={6}>
                    <DoLogin />
                  </Grid>

                  {/* sign up button */}
                  <Grid item xs={6}>
                    <SignUp />
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
