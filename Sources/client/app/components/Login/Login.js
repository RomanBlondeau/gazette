// @flow
import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import Button from '@material-ui/core/Button/Button';
import styles from './Login.scss';
import LoginForm from '../../containers/Login/LoginFormContainer';
import RememberMe from './RememberMe/RememberMe';
import DoLogin from '../../containers/Login/DoLoginContainer';
import history from '../../helpers/history';
import routes from '../../constants/routes';
import axios from 'axios';
import config from '../../config/api';

class Login extends React.Component {
  componentDidMount() {
    try {
      const tok = JSON.parse(localStorage.getItem('user')).token;
      axios
        .head(config.auth.verify, {
          headers: { Authorization: `bearer ${tok}` }
        })
        .then(() => history.push(routes.HOME))
        .catch(() => {
          localStorage.removeItem('user');
        });
    } catch (e) {
      console.error(e);
    }
  }

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
                  <Grid item xs={6} className={styles.forgotPasswordContainer}>
                    <Button onClick={() => history.push(routes.FORGOTPASSWORD)}>
                      Forgot password
                    </Button>
                  </Grid>

                  {/* Login button */}
                  <Grid item xs={6}>
                    <DoLogin />
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

export default Login;
