import sendConstants from '../../constants/Send/send.constants';

const initialState = {
  from: '',
  object: '',
  to: ''
};

function projects(state = initialState, action) {
  switch (action.type) {
    case sendConstants.SEND_SELECT_CONTACT:
      return {
        ...state,
        to: state.to === '' ? action.email : state.to + ', ' + action.email
      };
    case sendConstants.SEND_UPDATE:
      return {
        ...state,
        [action.send.target.name]: action.send.target.value
      };
    case sendConstants.SEND_SUCCESS:
    case sendConstants.SEND_REQUEST:
    case sendConstants.SEND_FAILURE:
    default:
      return state;
  }
}

export default projects;
