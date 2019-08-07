/* eslint-disable react/prop-types */
/* eslint flowtype-errors/show-errors: 0 */
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import Homepage from './containers/Home/HomeContainer';
import LoginPage from './components/Login/Login';
import SignUpPage from './components/SignUp/SignUp';
import ForgotPasswordPage from './components/ForgotPassword/ForgotPassword';
import ContactsPage from './containers/Contacts/ContactsContainer';
import EditPage from './containers/Editor/EditorContainer';
import SendInterface from './containers/SendInterface/SendContainer';
import CalendarPage from './components/App/Calendar/Calendar';
import SettingsPage from './containers/Settings/SettingsContainer';
import NewsletterInterface from './components/App/NewsletterInterface/NewsletterInterface';
import TopNavbar from './containers/Navbar/TopNavbarContainer';
import SideNavbar from './components/App/Navbars/SideNavbar/SideNavbar';
import history from './helpers/history';

const defaultContainer = () => (
  <Switch>
    <Route path={routes.HOME} component={Homepage} />
    <Route path={routes.CONTACTS} component={ContactsPage} />
    <Route path={routes.EDIT} component={EditPage} />
    <Route path={routes.SEND} component={SendInterface} />
    <Route path={routes.CALENDAR} component={CalendarPage} />
    <Route path={routes.NEWSLETTER} component={NewsletterInterface} />
    <Route path={routes.SETTINGS} component={SettingsPage} />
    <Route path={routes.SIGNUP} component={SignUpPage} />
    <Route path={routes.FORGOTPASSWORD} component={ForgotPasswordPage} />
    <Route path={routes.LOGIN} component={LoginPage} />
  </Switch>
);

export default () => (
  <App>
    {localStorage.getItem('user') !== null && (
      <Fragment>
        <TopNavbar />
        <SideNavbar active={history.location.pathname} />
      </Fragment>
    )}
    <Switch>
      <Route component={defaultContainer} />
    </Switch>
  </App>
);
