/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default () => (
  <App>
    <Switch>
      <PrivateRoute path={routes.SIGNUP} component={SignUpPage} />
      <PrivateRoute path={routes.HOME} component={HomePage} />
      <Route path={routes.LOGIN} component={LoginPage} />
    </Switch>
  </App>
);
