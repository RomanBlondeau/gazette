// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import registration from './registration.reducer';
import authentication from './authentication.reducer';
import alert from './alert.reducer';

const rootReducer = combineReducers({
  registration,
  authentication,
  alert,
  router
});

export default rootReducer;
