/* eslint-disable react/prop-types */
/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import ForgotPassword from './containers/ForgotPasswordPage';
import ContactsPage from './containers/ContactsPage';
import EditPage from './containers/EditPage';
import CalendarPage from './containers/CalendarPage';
import HelpPage from './containers/HelpPage';
import SettingsPage from './containers/SettingsPage';

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
      <PrivateRoute path={routes.CONTACTS} component={ContactsPage} />
      <PrivateRoute path={routes.EDIT} component={EditPage} />
      <PrivateRoute path={routes.CALENDAR} component={CalendarPage} />
      <PrivateRoute path={routes.HELP} component={HelpPage} />
      <PrivateRoute path={routes.SETTINGS} component={SettingsPage} />
      <Route path={routes.LOGIN} component={LoginPage} />
    </Switch>
  </App>
);
