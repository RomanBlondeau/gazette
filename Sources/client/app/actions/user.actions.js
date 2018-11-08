/* eslint-disable no-underscore-dangle */
import userConstants from '../constants/user.constants';
import userService from '../services/user.services';
import alertActions from './alert.actions';
import history from '../helpers/history';

import routes from '../constants/routes.json';

function displayError(error) {
  if (error.response === undefined) {
    alert(error);
  } else {
    alert(`Error: ${error.response.data.message}`);
  }
}

function togglePassword() {
  return { type: userConstants.TOGGLE_PASSWORD };
}

function login(username, password) {
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }

  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        history.push(routes.HOME);
      },
      error => {
        dispatch(failure(error.toString()));
        displayError(error);
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

function logout() {
  userService.logout();
  history.push(routes.LOGIN);
  return { type: userConstants.LOGOUT };
}

function register(user) {
  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }

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
        displayError(error);
        dispatch(alertActions.error(error.toString()));
      });
  };
}

function update(user) {
  return { type: userConstants.UPDATE, user };
}

function forgotPassword(user) {
  function request(user) {
    return { type: userConstants.FORGOTPASSWORD_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.FORGOTPASSWORD_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.FORGOTPASSWORD_FAILURE, error };
  }

  return dispatch => {
    dispatch(request(user));

    userService
      .forgotPassword(user.email)
      .then(() => {
        dispatch(success());
        alert('Token sent, please check your email.');
        history.push(routes.LOGIN);
        dispatch(
          alertActions.success('Reset password: ask for token successful')
        );
      })
      .catch(error => {
        dispatch(failure(error.toString()));
        displayError(error);
        dispatch(alertActions.error(error.toString()));
      });
  };
}

function resetPassword(user) {
  function request(user) {
    return { type: userConstants.RESETPASSWORD_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.RESETPASSWORD_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.RESETPASSWORD_FAILURE, error };
  }

  return dispatch => {
    dispatch(request(user));

    userService
      .forgotPassword(user.email)
      .then(() => {
        dispatch(success());
        alert('Your password is reset.');
        history.push(routes.LOGIN);
        dispatch(alertActions.success('Reset password successful'));
      })
      .catch(error => {
        dispatch(failure(error.toString()));
        displayError(error);
        dispatch(alertActions.error(error.toString()));
      });
  };
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }

  return dispatch => {
    dispatch(request(id));

    userService
      .delete(id)
      .then(
        user => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      );
  };
}

const userActions = {
  login,
  logout,
  register,
  update,
  togglePassword,
  forgotPassword,
  resetPassword,
  delete: _delete
};

export default userActions;
