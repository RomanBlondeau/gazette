import userConstants from '../../constants/User/user.constants';

function registration(state = { disabled: true }, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
    case userConstants.REGISTER_SUCCESS:
    case userConstants.REGISTER_FAILURE:
    default:
      return state;
  }
}

export default registration;
