/* eslint-disable react/prop-types */
/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import Homepage from './components/App/Homepage/Homepage';
import LoginPage from './components/Login/Login';
import SignUpPage from './components/SignUp/SignUp';
import ForgotPasswordPage from './components/ForgotPassword/ForgotPassword';
import ContactsPage from './components/App/Contacts/Contacts';
import EditPage from './components/App/Editor/Edit';
import CalendarPage from './components/App/Calendar/Calendar';
import HelpPage from './components/App/Help/Help';
import SettingsPage from './components/App/Settings/Settings';
import TopNavbar from './components/App/Navbars/TopNavbar/TopNavbar';
import SideNavbar from './components/App/Navbars/SideNavbar/SideNavbar';
import history from './helpers/history';

const defaultContainer = () => (
  <Switch>
    <Route path={routes.HOME} component={Homepage} />
    <Route path={routes.CONTACTS} component={ContactsPage} />
    <Route path={routes.EDIT} component={EditPage} />
    <Route path={routes.CALENDAR} component={CalendarPage} />
    <Route path={routes.HELP} component={HelpPage} />
    <Route path={routes.SETTINGS} component={SettingsPage} />
    <Route path={routes.SIGNUP} component={SignUpPage} />
    <Route path={routes.FORGOTPASSWORD} component={ForgotPasswordPage} />
    <Route path={routes.LOGIN} component={LoginPage} />
  </Switch>
);

export default () => (
  <App>
    {localStorage.getItem('user') !== null && (
      <div>
        <TopNavbar />
        <SideNavbar active={history.location.pathname} />
      </div>
    )}
    <Switch>
      <Route component={defaultContainer} />
    </Switch>
  </App>
);
