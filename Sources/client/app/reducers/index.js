// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import registration from './SignUp/registration.reducer';
import authentication from './Login/authentication.reducer';
import alert from './Alert/alert.reducer';
import form from './Form/form.reducer';

const rootReducer = combineReducers({
  registration,
  authentication,
  alert,
  form,
  router
});

export default rootReducer;
