import formConstants from '../../constants/Form/form.constants';

function togglePassword() {
  return { type: formConstants.TOGGLE_PASSWORD };
}

function toggleConfirmPassword() {
  return { type: formConstants.TOGGLE_CONFIRM_PASSWORD };
}

function update(form) {
  return { type: formConstants.UPDATE, form };
}

function passwordMatch(status) {
  return { type: formConstants.PASSWORD_MATCH, status };
}

const formActions = {
  togglePassword,
  toggleConfirmPassword,
  update,
  passwordMatch
};

export default formActions;
