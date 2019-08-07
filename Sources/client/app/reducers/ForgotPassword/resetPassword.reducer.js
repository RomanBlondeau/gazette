import userConstants from '../../constants/User/user.constants';

const initialState = {
  token: '',
  password: ''
};

function resetPassword(state = initialState, action) {
  switch (action.type) {
    case userConstants.RESETPASSWORD_SUCCESS:
      return {
        ...state,
        token: '',
        password: ''
      };
    case userConstants.RESETPASSWORD_REQUEST:
    case userConstants.RESETPASSWORD_FAILURE:
    default:
      return state;
  }
}

export default resetPassword;
