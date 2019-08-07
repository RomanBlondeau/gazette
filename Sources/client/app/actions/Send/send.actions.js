import sendConstants from '../../constants/Send/send.constants';

function update(send) {
  return { type: sendConstants.SEND_UPDATE, send };
}

function selectContact(email) {
  return { type: sendConstants.SEND_SELECT_CONTACT, email };
}

const sendActions = {
  update,
  selectContact
};

export default sendActions;
