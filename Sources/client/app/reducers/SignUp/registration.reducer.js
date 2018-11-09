import userConstants from '../../constants/User/user.constants';

const initialState = {
  password: ''
};

function registration(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        password: ''
      };
    case userConstants.REGISTER_REQUEST:
    case userConstants.REGISTER_FAILURE:
    default:
      return state;
  }
}

export default registration;
