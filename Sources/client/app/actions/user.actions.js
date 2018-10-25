/* eslint-disable no-underscore-dangle */
import userConstants from '../constants/user.constants';
import userService from '../services/user.services';
import alertActions from './alert.actions';
import history from '../helpers/history';

import routes from '../constants/routes.json';

const userActions = {
  login,
  logout,
  register,
  delete: _delete
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        history.push(routes.HOME);
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  history.push(routes.LOGIN);
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService
      .register(
        user.email,
        user.username,
        user.password,
        user.firstName,
        user.lastName
      )
      .then(() => {
        dispatch(success());
        alert('Registration successful');
        history.push(routes.LOGIN);
        dispatch(alertActions.success('Registration successful'));
      })
      .catch(error => {
        dispatch(failure(error.toString()));
        alert(`Registration failed: ${error.response.data.message}`);
        dispatch(alertActions.error(error.toString()));
      });
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    userService
      .delete(id)
      .then(
        user => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      );
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}

export default userActions;
