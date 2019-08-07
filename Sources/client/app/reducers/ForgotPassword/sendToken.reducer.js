import userConstants from '../../constants/User/user.constants';

const initialState = {
  email: '',
  showPassword: false,
  showConfirmPassword: false,
  passwordMatch: false,
  password: '',
  confirmPassword: '',
  token: ''
};

function sendToken(state = initialState, action) {
  switch (action.type) {
    case userConstants.FORGOTPASSWORD_SUCCESS:
      return {
        ...state,
        email: '',
        showPassword: false,
        showConfirmPassword: false,
        passwordMatch: false,
        password: '',
        confirmPassword: '',
        token: ''
      };
    case userConstants.FORGOTPASSWORD_REQUEST:
    case userConstants.FORGOTPASSWORD_FAILURE:
    default:
      return state;
  }
}

export default sendToken;
