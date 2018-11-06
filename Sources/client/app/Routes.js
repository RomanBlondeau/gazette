/* eslint-disable react/prop-types */
/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './components/Login/Login';
import SignUpPage from './containers/SignUpPage';
import ForgotPassword from './containers/ForgotPasswordPage';
import Container from './containers/Container';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: routes.LOGIN, state: { from: props.location } }}
        />
      )
    }
  />
);

export default () => (
  <App>
    <Switch>
      <Route path={routes.SIGNUP} component={SignUpPage} />
      <Route path={routes.FORGOTPASSWORD} component={ForgotPassword} />
      <PrivateRoute path={routes.HOME} component={HomePage} />
      <Route path={routes.CONTAINER} component={LoginPage} />
    </Switch>
  </App>
);
