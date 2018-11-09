import formConstants from '../../constants/Form/form.constants';

const initialState = {
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  firstName: '',
  lastName: '',
  passwordMatch: false,
  showPassword: false
};

function form(state = initialState, action) {
  switch (action.type) {
    case formConstants.UPDATE:
      return {
        ...state,
        [action.form.target.name]: action.form.target.value
      };
    case formConstants.TOGGLE_PASSWORD:
      return {
        ...state,
        showPassword: !state.showPassword
      };
    case formConstants.TOGGLE_CONFIRM_PASSWORD:
      return {
        ...state,
        showConfirmPassword: !state.showConfirmPassword
      };
    case formConstants.PASSWORD_MATCH:
      return {
        ...state,
        passwordMatch: action.status
      };
    default:
      return state;
  }
}

export default form;
