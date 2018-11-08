/* eslint-disable react/prop-types */
/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import Homepage from './components/App/Homepage/Homepage';
import LoginPage from './components/Login/Login';
import SignUpPage from './containers/SignUp/SignUpPage';
import ForgotPassword from './containers/ForgotPassword/ForgotPasswordPage';
import ContactsPage from './containers/Contacts/ContactsPage';
import EditPage from './containers/Editor/EditPage';
import CalendarPage from './containers/Calendar/CalendarPage';
import HelpPage from './containers/Help/HelpPage';
import SettingsPage from './containers/Settings/SettingsPage';
import TopNavbar from './components/App/Navbars/TopNavbar/TopNavbar';
import SideNavbar from './components/App/Navbars/SideNavbar/SideNavbar';
import config from './config/api';
import history from './helpers/history';

const verifyLogin = () => {
  try {
    const tok = JSON.parse(localStorage.getItem('user')).token;
    axios
      .head(config.auth.verify, {
        headers: { Authorization: `bearer ${tok}` }
      })
      .then(() => true)
      .catch(() => {
        localStorage.removeItem('user');
        return false;
      });
  } catch (e) {
    return false;
  }
};

const defaultContainer = () => {
  if (verifyLogin()) history.push(routes.HOME);
  return (
    <Switch>
      {localStorage.getItem('user') !== null && (
        <div>
          <TopNavbar />
          <SideNavbar active={routes.HOME} />
        </div>
      )}
      <Route path={routes.HOME} component={Homepage} />
      <Route path={routes.CONTACTS} component={ContactsPage} />
      <Route path={routes.EDIT} component={EditPage} />
      <Route path={routes.CALENDAR} component={CalendarPage} />
      <Route path={routes.HELP} component={HelpPage} />
      <Route path={routes.SETTINGS} component={SettingsPage} />
      <Route path={routes.SIGNUP} component={SignUpPage} />
      <Route path={routes.FORGOTPASSWORD} component={ForgotPassword} />
      <Route path={routes.LOGIN} component={LoginPage} />
    </Switch>
  );
};

export default () => (
  <App>
    <Switch>
      <Route component={defaultContainer} />
    </Switch>
  </App>
);
