/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from "./containers/SignUpPage";

export default () => (
  <App>
    <Switch>
      <Route path={routes.SIGNUP} component={SignUpPage} />
      <Route path={routes.HOME} component={HomePage} />
      <Route path={routes.LOGIN} component={LoginPage} />
    </Switch>
  </App>
);
