// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import registration from './SignUp/registration.reducer';
import authentication from './Login/authentication.reducer';
import alert from './Alert/alert.reducer';
import form from './Form/form.reducer';
import sendToken from './ForgotPassword/sendToken.reducer';
import resetPassword from './ForgotPassword/resetPassword.reducer';
import notifications from './Notifications/notifications.reducer';
import projects from './Projects/projects.reducer';
import send from './Send/send.reducer';
import contacts from './Contacts/contacts.reducer';
import container from './Container/container.reducer';

const rootReducer = combineReducers({
  registration,
  authentication,
  alert,
  form,
  sendToken,
  resetPassword,
  notifications,
  projects,
  send,
  contacts,
  container,
  router
});

export default rootReducer;
