// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import config from '../../../config/api';
import history from '../../../helpers/history';
import routes from '../../../constants/routes.json';
import css from './Settings.scss';

const styles = () => ({
  root: {
    display: 'flex',
    backgroundColor: '#2E2E43',
    height: '100%'
  }
});

class Settings extends React.Component {
  deleteAccount = () => {
    const { user } = this.props;
    axios.delete(`${config.user.delete}/${user.id}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`
      }
    })
    .then(() => {
      alert('Your account has been deleted. You will be redirected to the login page.');
      history.push(routes.LOGIN)
    })
    .catch(err => {
      console.error(err);
      alert('An error occured, we couldn\'t delete your account, please try again.');
    })
  };

  render() {
    const { classes, user } = this.props;
    return (
      <div className={classes.root}>
        <div className={css.contentContainer}>
          <div className={css.titleContainer}>
            <h3>Your informations</h3>
          </div>
          <h4>Username: {user.username}</h4>
          <h4>First name: {user.firstName}</h4>
          <h4>Last name: {user.lastName}</h4>
          <h4>Email: {user.email}</h4>
          <div style={{ textAlign: 'center' }}>
            <button className={css.deleteButton} onClick={this.deleteAccount}>
              Delete my account
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(Settings);
