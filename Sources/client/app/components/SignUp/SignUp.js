// @flow
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import Button from '@material-ui/core/Button/Button';
import { Link } from 'react-router-dom';
import styles from './SignUp.scss';
import routes from '../../constants/routes';
import SignUpForm from './SignUpForm/SignUpForm';
import DoSignUp from './DoSignUp/DoSignUp';

type Props = {};

export default class SignUp extends Component<Props> {
  props: Props;

  state = {
    password: '',
    confirmPassword: '',
    username: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  onUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      password,
      confirmPassword,
      username,
      firstName,
      lastName,
      email
    } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <Grid container spacing={24} className={styles.container}>
          {/* Left content */}
          <Grid item xs={6} className={styles.leftContent} />

          {/* Right content */}
          <Grid item xs={6} className={styles.rightContent}>
            <Link to={routes.LOGIN}>
              <Button className={styles.back}>{`<  Back to login`}</Button>
            </Link>

            {/* Title */}
            <h2 className={styles.mainTitle}>Gazette</h2>
            <p className={styles.subTitle}>
              Please complete to create your account
            </p>

            <Grid container spacing={24} justify="center" alignItems="center">
              <Grid item xs={8}>
                {/* Sign up form */}
                <SignUpForm
                  confirmPassword={confirmPassword}
                  email={email}
                  firstName={firstName}
                  lastName={lastName}
                  password={password}
                  username={username}
                  onUpdate={this.onUpdate}
                />

                {/* Sign up button */}
                <Grid
                  container
                  spacing={24}
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={6}>
                    <DoSignUp
                      email={email}
                      firstName={firstName}
                      lastName={lastName}
                      password={password}
                      username={username}
                    />
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
