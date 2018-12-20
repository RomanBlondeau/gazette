// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';
import PropTypes from 'prop-types';
import css from './SendForm.scss';

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
    <p style={{ color: 'grey', marginLeft: 15 }}>Settings</p>
    <h5 style={{ textAlign: 'center', color: '#353535' }}>
      Email will be sent with gazette's own email adress
    </h5>
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        error={object === ''}
        id="outlined-full-width"
        label="Subject"
        placeholder="Subject"
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
        label="Recipients"
        placeholder="Recipients"
        multiline
        fullWidth
        margin="normal"
        variant="outlined"
        name="to"
        value={to}
        onChange={e => onUpdate(e)}
        helperText="email adresses separated by a comma"
        rows={2}
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
