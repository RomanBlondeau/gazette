import userConstants from '../../constants/User/user.constants';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { loggedIn: true, user, showPassword: false }
  : {
      loggedIn: false,
      user: {
        username: '',
        password: ''
      },
      showPassword: false
    };

function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return state;
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return state;
    case userConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: {
          username: '',
          password: ''
        }
      };
    default:
      return state;
  }
}

export default authentication;
