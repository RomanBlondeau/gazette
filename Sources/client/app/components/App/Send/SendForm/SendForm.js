// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import css from './SendForm.scss';
import TextField from '@material-ui/core/TextField/TextField';
import PropTypes from 'prop-types';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 15
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

function validateSingleEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateSeveralEmails(emailList) {
  var emails = emailList.replace(/\s/g, '').split(',');
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var valid = true;

  for (var i = 0; i < emails.length; i++) {
    if (emails[i] == '' || !regex.test(emails[i])) {
      valid = false;
    }
  }
  return valid;
}

const SendForm = ({ to, object, onUpdate, classes }) => (
  <div>
    <p style={{ color: 'grey', marginLeft: 15 }}>{`Paramètres d'envoi`}</p>
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        error={object === ''}
        id="outlined-full-width"
        label="Objet"
        placeholder="Sujet du mail"
        fullWidth
        margin="normal"
        variant="outlined"
        name="object"
        value={object}
        onChange={e => onUpdate(e)}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        error={!validateSeveralEmails(to)}
        id="outlined-textarea"
        label="Destinataires"
        placeholder="Destinataires"
        multiline
        fullWidth
        margin="normal"
        variant="outlined"
        name="to"
        value={to}
        onChange={e => onUpdate(e)}
        helperText="adresses mails séparés par une virgule"
        rows={3}
      />
    </form>
  </div>
);

SendForm.propTypes = {
  from: PropTypes.string,
  object: PropTypes.string,
  to: PropTypes.string,
  onUpdate: PropTypes.func.isRequired
};

SendForm.defaultProps = {
  from: '',
  object: '',
  to: ''
};

export default withStyles(styles)(SendForm);
