// @flow
import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button/Button';
import routes from '../../constants/routes';
import styles from './ForgotPassword.scss';
import TokenForm from '../../containers/ForgotPassword/TokenFormContainer';
import NewPasswordForm from '../../containers/ForgotPassword/NewPasswordFormContainer';

const ForgotPassword = () => (
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
            <TokenForm />

            {/* Sign up button */}
            <NewPasswordForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
);

export default ForgotPassword;
