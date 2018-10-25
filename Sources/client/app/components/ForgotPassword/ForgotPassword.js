// @flow
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button/Button';
import routes from '../../constants/routes';
import DoSignUp from '../SignUp/DoSignUp/DoSignUp';
import styles from './ForgotPassword.scss';
import TokenForm from './TokenForm/TokenForm';
import NewPasswordForm from './NewPasswordForm/NewPasswordForm';

type Props = {};

export default class ForgotPassword extends Component<Props> {
  props: Props;

  state = {
    password: '',
    confirmPassword: '',
    email: '',
    token: ''
  };

  onUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { password, confirmPassword, email, token } = this.state;
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
            <h2 className={styles.mainTitle}>Password recovery</h2>
            <p className={styles.subTitle}>
              Fill-in your email to receive a unique token used to reset your
              password.
            </p>

            <Grid container spacing={24} justify="center" alignItems="center">
              <Grid item xs={8}>
                {/* Token form */}
                <TokenForm email={email} onUpdate={this.onUpdate} />

                {/* Sign up button */}
                <NewPasswordForm
                  password={password}
                  confirmPassword={confirmPassword}
                  token={token}
                  onUpdate={this.onUpdate}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
