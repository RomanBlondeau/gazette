/* eslint-disable react/forbid-prop-types */
// @flow
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';

const styles1 = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

const Alert = props => {
  const { errorMessage, errorOpen, handleClose, classes } = props;

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={errorOpen}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id'
      }}
    >
      <MySnackbarContentWrapper
        onClose={handleClose}
        className={classes.margin}
        variant="error"
        message={errorMessage}
      />
    </Snackbar>
  );
};

Alert.propTypes = {
  errorMessage: PropTypes.string,
  errorOpen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

Alert.defaultProps = {
  errorMessage: 'An error occured',
  errorOpen: false
};

export default withStyles(styles2)(Alert);
