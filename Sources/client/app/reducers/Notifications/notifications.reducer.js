import userConstants from '../../constants/User/user.constants';

const initialState = {
  count: 0,
  message: 'You have 0 notifications'
};

function notifications(state = initialState, action) {
  switch (action.type) {
    case userConstants.NOTIFICATIONS_ADD:
      return {
        ...state,
        count: state.count + 1
      };
    case userConstants.NOTIFICATIONS_REMOVE:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

export default notifications;
